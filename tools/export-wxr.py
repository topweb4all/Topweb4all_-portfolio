#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
TOPWEB4ALL — مُصدِّر المحتوى إلى WXR (استيراد ووردبريس الأصلي)
يقرأ data/articles.js + data/projects.js ويطلع wp-content-import/content.tw4a.xml
يشمل: 6 مقالات + 6 مشاريع + التصنيفات + الميتا (_ar/_en) + المرفقات (صور).
المصدر الوحيد للبيانات = ملفات data — لا إعادة إدخال.
"""
import json, re, subprocess, sys, html, datetime, os, io

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, 'wp-content-import')
OUT = os.path.join(OUT_DIR, 'content.tw4a.xml')
BASE = 'https://topweb4all.dev/'   # غيّريه لو الدومين مختلف — الصور تتنزّل منه أثناء الاستيراد

def dump_data():
    js = "global.window={};const fs=require('fs');eval(fs.readFileSync('%s/data/articles.js','utf8'));eval(fs.readFileSync('%s/data/projects.js','utf8'));console.log(JSON.stringify({articles:window.TW4A_ARTICLES,projects:window.TW4A_PROJECTS}))" % (ROOT, ROOT)
    r = subprocess.run(['node', '-e', js], capture_output=True, text=True, check=True)
    return json.loads(r.stdout)

def cdata(s):
    s = str(s)
    s = s.replace(']]>', ']]]]><![CDATA[>')
    return '<![CDATA[' + s + ']]>'

def meta(key, value):
    if isinstance(value, (list, dict)):
        value = json.dumps(value, ensure_ascii=False)
    return ("<wp:postmeta>\n<wp:meta_key>%s</wp:meta_key>\n<wp:meta_value>%s</wp:meta_value>\n</wp:postmeta>\n"
            % (key, cdata(value)))

def item_base(item_id, login, title, date, slug, status='publish', ptype='post', content='', excerpt=''):
    return f"""<item>
<title>{html.escape(str(title))}</title>
<link>{BASE}{'work/' if ptype=='project' else 'blog/'}{slug}/</link>
<pubDate>{date}</pubDate>
<dc:creator>{cdata(login)}</dc:creator>
<guid isPermaLink="false">{BASE}?p={item_id}</guid>
<description></description>
<content:encoded>{cdata(content)}</content:encoded>
<excerpt:encoded>{cdata(excerpt)}</excerpt:encoded>
<wp:post_id>{item_id}</wp:post_id>
<wp:post_date>{date}</wp:post_date>
<wp:post_date_gmt>{date}</wp:post_date_gmt>
<wp:comment_status>open</wp:comment_status>
<wp:ping_status>closed</wp:ping_status>
<wp:post_name>{cdata(slug)}</wp:post_name>
<wp:status>{status}</wp:status>
<wp:post_parent>0</wp:post_parent>
<wp:menu_order>0</wp:menu_order>
<wp:post_type>{ptype}</wp:post_type>
<wp:post_password></wp:post_password>
<wp:is_sticky>0</wp:is_sticky>
"""

def cat(domain, slug, name):
    return f'<category domain="{domain}" nicename="{slug}">{cdata(name)}</category>\n'

AR_NAMES = {'brand':'البراند','web':'المواقع','email':'الإيميلات','auto':'الأتمتة','qa':'الجودة','launch':'الإطلاق'}

def build():
    d = dump_data()
    out = io.StringIO()
    out.write('''<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
  xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:wfw="http://wellformedweb.org/CommentAPI/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:wp="http://wordpress.org/export/1.2/">
<channel>
<title>TOPWEB4ALL</title>
<link>https://topweb4all.dev/</link>
<description>Content export — articles + projects</description>
<language>ar</language>
<wp:wxr_version>1.2</wp:wxr_version>
<wp:base_site_url>https://topweb4all.dev/</wp:base_site_url>
<wp:base_blog_url>https://topweb4all.dev/</wp:base_blog_url>
<wp:author><wp:author_id>1</wp:author_id><wp:author_login>''' + cdata('admin') + '''</wp:author_login><wp:author_email>contact@topweb4all.dev</wp:author_email><wp:author_display_name>''' + cdata('Omnia Ahmed') + '''</wp:author_display_name><wp:author_first_name>''' + cdata('Omnia') + '''</wp:author_first_name><wp:author_last_name>''' + cdata('Ahmed') + '''</wp:author_last_name></wp:author>
''')
    # terms: categories for posts
    for c in ['brand','web','email','auto','qa','launch']:
        out.write(f"<wp:term><wp:term_id>{0}</wp:term_id><wp:term_taxonomy>category</wp:term_taxonomy><wp:term_slug>{c}</wp:term_slug><wp:term_parent></wp:term_parent><wp:term_name>{cdata(AR_NAMES[c])}</wp:term_name></wp:term>\n")
    for c in ['brand','web','auto','launch']:
        out.write(f"<wp:term><wp:term_id>0</wp:term_id><wp:term_taxonomy>project_type</wp:term_taxonomy><wp:term_slug>{c}</wp:term_slug><wp:term_parent></wp:term_parent><wp:term_name>{cdata(AR_NAMES[c])}</wp:term_name></wp:term>\n")

    aid = 9000; pid = 1000
    now = '2026-11-14 12:00:00'

    # ---- attachments first (importer downloads from live URLs) ----
    thumbs = {}
    for a in d['articles']:
        aid += 1
        url = BASE + a['cover']
        out.write(item_base(aid,'admin', html.escape(a['title_en']), now, 'art-'+a['slug'], 'inherit', 'attachment',
                    '', '').replace('<wp:post_type>attachment</wp:post_type>','<wp:post_type>attachment</wp:post_type>')
              + f"<wp:attachment_url>{url}</wp:attachment_url>\n<wp:postmeta><wp:meta_key>_wp_attached_file</wp:meta_key><wp:meta_value>{cdata(a['cover'])}</wp:meta_value></wp:postmeta>\n</item>\n")
        thumbs['art:'+a['slug']] = aid
    for p in d['projects']:
        aid += 1
        url = BASE + p['cover']
        out.write(item_base(aid,'admin', html.escape(p['title_en']), now, 'prj-'+p['slug'], 'inherit', 'attachment','','')
              + f"<wp:attachment_url>{url}</wp:attachment_url>\n<wp:postmeta><wp:meta_key>_wp_attached_file</wp:meta_key><wp:meta_value>{cdata(p['cover'])}</wp:meta_value></wp:postmeta>\n</item>\n")
        thumbs['prj:'+p['slug']] = aid
        for i,g in enumerate(p.get('gallery',[]),1):
            aid += 1
            out.write(item_base(aid,'admin', html.escape(p['title_en']+f' — {i}'), now, f'prj-{p["slug"]}-{i}', 'inherit','attachment','','')
                  + f"<wp:attachment_url>{BASE+g}</wp:attachment_url>\n<wp:postmeta><wp:meta_key>_wp_attached_file</wp:meta_key><wp:meta_value>{cdata(g)}</wp:meta_value></wp:postmeta>\n</item>\n")

    # ---- articles ----
    for a in d['articles']:
        pid += 1
        body = '\n'.join(f'<p>{x}</p>' for x in a['body_ar'])
        out.write(item_base(pid,'admin', a['title_ar'], now, a['slug'], 'publish','post', body, a['excerpt_ar']))
        out.write(cat('category', a['cat'], AR_NAMES.get(a['cat'], a['cat'])))
        out.write(meta('title_en', a['title_en']))
        out.write(meta('excerpt_en', a['excerpt_en']))
        out.write(meta('body_en', '\n'.join(a['body_en'])))
        out.write(meta('quote_ar', a['quote_ar']))
        out.write(meta('quote_en', a['quote_en']))
        out.write(meta('points_ar', a['points_ar']))
        out.write(meta('points_en', a['points_en']))
        out.write(meta('reading_time_ar', a['date_ar'].split('•')[-1].strip()))
        out.write(meta('reading_time_en', a['date_en'].split('•')[-1].strip()))
        out.write(meta('_thumbnail_id', thumbs['art:'+a['slug']]))
        out.write('</item>\n')

    # ---- projects ----
    for p in d['projects']:
        pid += 1
        out.write(item_base(pid,'admin', p['title_ar'], now, p['slug'], 'publish','project', p['overview_ar'], p['excerpt_ar']))
        for c in p['cats']:
            out.write(cat('project_type', c, AR_NAMES.get(c, c)))
        for k in ['title_en','excerpt_en','client_ar','client_en','timeline_ar','timeline_en','scope_ar','scope_en','year','overview_ar','overview_en','challenge_ar','challenge_en','testi_ar','testi_en']:
            out.write(meta(k, p[k]))
        out.write(meta('stack', p['stack']))
        out.write(meta('gallery', p['gallery']))
        out.write(meta('stats', p['stats']))
        out.write(meta('_thumbnail_id', thumbs['prj:'+p['slug']]))
        out.write('</item>\n')

    out.write('</channel>\n</rss>\n')
    os.makedirs(OUT_DIR, exist_ok=True)
    open(OUT,'w',encoding='utf-8').write(out.getvalue())
    print('WXR written:', OUT, len(out.getvalue()), 'chars')

if __name__ == '__main__':
    build()

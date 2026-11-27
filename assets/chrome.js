/* TOPWEB4ALL — unified site chrome.
   Usage on each content page:
     <link rel="stylesheet" href="assets/chrome.css">
     <div id="tw4a-chrome-header"></div> ... <div id="tw4a-chrome-footer"></div>
     <script src="assets/chrome.js"></script>
     <script>TW4A_CHROME.init({ active: 'work' });</script>
   active: 'work' | 'blog' | ''  (highlights the nav link) */
window.TW4A_CHROME = (function () {
    var STR = {
        en: {
            'nav.home': 'Home', 'nav.services': 'Services', 'nav.work': 'Work', 'nav.pricing': 'Pricing',
            'nav.about': 'About & Founder', 'nav.faq': 'FAQ', 'nav.blog': 'Insights', 'nav.contact': 'Contact',
            'nav.start': 'Start a Project',
            'nav.brand': 'Brand from Scratch', 'nav.brandSub': 'Naming, identity & guidelines',
            'nav.web': 'Web Design & Dev', 'nav.webSub': 'Fast, high-conversion sites',
            'nav.email': 'Corporate Emails', 'nav.emailSub': 'Workspace & M365 deliverability',
            'nav.auto': 'Workflow Automation', 'nav.autoSub': 'CRM & payment webhooks',
            'nav.qa': 'QA & Testing Audits', 'nav.qaSub': '140-check pre-launch sweep',
            'nav.launch': 'Project Launch', 'nav.launchSub': 'Go-live & 30-day support',
            'status.ready': 'Ready for Work', 'status.city': 'Cairo',
            'ft.desc': 'Software Engineering & Digital Brand Studio. From idea to launch — brand, web, emails, automation, QA.',
            'ft.copy': '© 2026 TOPWEB4ALL. Precision Architecture. All rights reserved to',
            'ft.studio': 'Studio', 'ft.trust': 'Trust',
            'ft.svc': 'Services', 'ft.work': 'Work', 'ft.price': 'Pricing', 'ft.how': 'How We Work',
            'ft.about': 'About & Founder', 'ft.faq': 'FAQ', 'ft.blog': 'Insights', 'ft.contact': 'Contact Us',
            'a11y.skip': 'Skip to main content', 'a11y.mainNav': 'Main navigation', 'a11y.menu': 'Toggle menu',
            'a11y.lang': 'Switch language — العربية / English', 'a11y.theme': 'Toggle dark and light theme',
            'a11y.footerNav': 'Footer navigation'
        },
        ar: {
            'nav.home': 'الرئيسية', 'nav.services': 'الخدمات', 'nav.work': 'الأعمال', 'nav.pricing': 'الأسعار',
            'nav.about': 'عن المؤسسة', 'nav.faq': 'الأسئلة الشائعة', 'nav.blog': 'المدونة', 'nav.contact': 'اتصل بنا',
            'nav.start': 'ابدأ مشروعك',
            'nav.brand': 'تأسيس البراند', 'nav.brandSub': 'الاسم والهوية والدليل',
            'nav.web': 'تصميم وتطوير المواقع', 'nav.webSub': 'مواقع سريعة عالية التحويل',
            'nav.email': 'الإيميلات الرسمية', 'nav.emailSub': 'إعدادات Workspace و M365',
            'nav.auto': 'أتمتة سير العمل', 'nav.autoSub': 'ربط CRM والمدفوعات',
            'nav.qa': 'اختبار وضمان الجودة', 'nav.qaSub': 'فحص 140 نقطة قبل الإطلاق',
            'nav.launch': 'إطلاق المشروع', 'nav.launchSub': 'الإطلاق ودعم 30 يوم',
            'status.ready': 'جاهزون للعمل', 'status.city': 'القاهرة',
            'ft.desc': 'استوديو هندسة برمجيات وبراند رقمي. من الفكرة للإطلاق — براند ومواقع وإيميلات وأتمتة وجودة.',
            'ft.copy': '© 2026 TOPWEB4ALL. هندسة بدقة. جميع الحقوق محفوظة لـ',
            'ft.studio': 'الاستوديو', 'ft.trust': 'الثقة',
            'ft.svc': 'الخدمات', 'ft.work': 'الأعمال', 'ft.price': 'الأسعار', 'ft.how': 'منهجية العمل',
            'ft.about': 'عن المؤسسة', 'ft.faq': 'الأسئلة الشائعة', 'ft.blog': 'المدونة', 'ft.contact': 'اتصل بنا',
            'a11y.skip': 'انتقل إلى المحتوى الأساسي', 'a11y.mainNav': 'القائمة الرئيسية', 'a11y.menu': 'فتح وإغلاق القائمة',
            'a11y.lang': 'تغيير اللغة — العربية / English', 'a11y.theme': 'تبديل الوضع الليلي والنهاري',
            'a11y.footerNav': 'روابط الفوتر'
        }
    };
    var CUBE = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2 2 7v10l10 5 10-5V7l-10-5zm0 2.3L19.7 8 12 11.7 4.3 8 12 4.3zM4 9.7l7 3.5v6.5l-7-3.5V9.7zm9 10v-6.5l7-3.5v6.5l-7 3.5z"/></svg>';
    var GLOBE = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
    var MOON = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M20.6 14.5A8.8 8.8 0 0 1 9.5 3.4a.7.7 0 0 0-.9-.9 10.3 10.3 0 1 0 12.9 12.9.7.7 0 0 0-.9-.9z"/></svg>';
    var SUN = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-15h1v3h-1zM3.5 10H.5v1h3zm17 0h-3v1h3zM5 3.6 4.3 2.9 2.2 5l.7.7zm14.8 15.5-.7-.7-2.1 2.1.7.7zm0-15.5 2.1 2.1-.7.7-2.1-2.1zm-15.6 15.5-2.1 2.1.7.7 2.1-2.1zM11 21h1v3h-1z"/></svg>';
    var BURGER = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>';
    var SOCIALS = [
        ['https://www.linkedin.com/in/omniabdm/', 'LinkedIn', '<path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9z"/>'],
        ['https://github.com/topweb4all', 'GitHub', '<path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2z"/>'],
        ['https://x.com/topweb4all', 'X', '<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>'],
        ['https://www.instagram.com/topweb4all/', 'Instagram', '<path d="M12 2c2.7 0 3 0 4 .1 1 .1 1.8.2 2.4.5.6.2 1.1.6 1.6 1.1.5.5.9 1 1.1 1.6.3.6.4 1.4.5 2.4.1 1 .1 1.3.1 4s0 3-.1 4c-.1 1-.2 1.8-.5 2.4-.2.6-.6 1.1-1.1 1.6-.5.5-1 .9-1.6 1.1-.6.3-1.4.4-2.4.5-1 .1-1.3.1-4 .1s-3 0-4-.1c-1-.1-1.8-.2-2.4-.5-.6-.2-1.1-.6-1.6-1.1-.5-.5-.9-1-1.1-1.6-.3-.6-.4-1.4-.5-2.4-.1-1-.1-1.3-.1-4s0-3 .1-4c.1-1 .2-1.8.5-2.4.2-.6.6-1.1 1.1-1.6.5-.5 1-.9 1.6-1.1.6-.3 1.4-.4 2.4-.5 1-.1 1.3-.1 4-.1M12 0C9.3 0 9 0 8 .1 6.9.1 6.1.3 5.3.6c-.8.3-1.4.8-2 1.4-.6.6-1.1 1.2-1.4 2C1.6 5 1.4 5.9 1.3 7 1.2 8 1.2 8.3 1.2 12s0 4 .1 5c.1 1.1.3 1.9.6 2.7.3.8.8 1.4 1.4 2 .6.6 1.2 1.1 2 1.4.8.3 1.6.5 2.7.6 1 .1 1.3.1 4 .1s4 0 5-.1c1.1-.1 1.9-.3 2.7-.6.8-.3 1.4-.8 2-1.4.6-.6 1.1-1.2 1.4-2 .3-.8.5-1.6.6-2.7.1-1 .1-1.3.1-4s0-4-.1-5c-.1-1.1-.3-1.9-.6-2.7-.3-.8-.8-1.4-1.4-2-.6-.6-1.2-1.1-2-1.4C18.9.3 18.1.1 17 .1 16 0 15.7 0 12 0zm0 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-11.8a1.4 1.4 0 1 1-1.4-1.4 1.4 1.4 0 0 1 1.4 1.4z"/>'],
        ['https://www.youtube.com/channel/UCBsfyWKluta-tjaqIvq62IA', 'YouTube', '<path d="M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C16.6 3.5 12 3.5 12 3.5s-4.6 0-7.8.4c-.4.1-1.4.1-2.3 1-.7.7-.9 2.3-.9 2.3S.8 9.1.8 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.4 7.6.4s4.6 0 7.8-.4c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.7 15V8.4l6.2 3.3L9.7 15z"/>'],
        ['https://www.pinterest.com/topweb4all/', 'Pinterest', '<path d="M12 2a10 10 0 0 0-3.7 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.3-.9 3.6-.2 1 .5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.9 0-2.5-1.8-4.3-4.4-4.3a4.6 4.6 0 0 0-4.8 4.6c0 .9.4 1.9.8 2.4.1.1.1.2.1.3l-.3 1.2c0 .2-.2.2-.4.1-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.3 6.3-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.9-.8 2-1.2 2.6A10 10 0 1 0 12 2z"/>']
    ];
    function t(lang, k) { return (STR[lang] && STR[lang][k]) || STR.en[k] || k; }
    function lang() { return localStorage.getItem('tw4a-lang') || 'ar'; }
    function headerHTML(active, L) {
        function lk(id, key, hash) {
            var cur = active === id ? ' aria-current="page"' : '';
            return '<li><a class="tw4a-link' + (active === id ? ' active' : '') + '"' + cur + ' href="Topweb4all.html#' + hash + '" data-tw4a="' + key + '">' + t(L, key) + '</a></li>';
        }
        var dd = [
            ['svc-brand', 'nav.brand', 'nav.brandSub', '<path d="M14 3l1.8 4.6L20 9l-4.2 1.4L14 15l-1.8-4.6L8 9l4.2-1.4L14 3zm-6.5 9L9 15.5 12.5 17 9 18.5 7.5 22 6 18.5 2.5 17 6 15.5 7.5 12zm11 1 1 2.5L22 17l-2.5 1L18.5 20.5 17.5 18 15 17l2.5-1 1-2.5z"/>'],
            ['svc-web', 'nav.web', 'nav.webSub', '<path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>'],
            ['svc-email', 'nav.email', 'nav.emailSub', '<path d="M12 1 3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5l-9-4zm-1.5 14.5-3.5-3.5 1.4-1.4 2.1 2.1 4.6-4.6 1.4 1.4-6 6z"/>'],
            ['svc-automation', 'nav.auto', 'nav.autoSub', '<path d="M12 2a2 2 0 0 1 2 2c2.5.5 4 2.5 4 5v1h2v7h-2v2h-3v-2H9v2H6v-2H4v-7h2v-1c0-2.5 1.5-4.5 4-5a2 2 0 0 1 2-2zm-3 8h2v2H9zm6 0h2v2h-2zM9 13h6v1H9z"/>'],
            ['svc-qa', 'nav.qa', 'nav.qaSub', '<path d="M9 3h6v2h3v2h-1.1A7 7 0 0 1 13 12.9V15l4 7H7l4-7v-2.1A7 7 0 0 1 7.1 7H6V5h3V3zm4 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-1 2.2v1.3H10.5v1h3v1H12v1.3h-1v-4.6h1z"/>'],
            ['svc-launch', 'nav.launch', 'nav.launchSub', '<path d="M9.5 2c3.2 1.6 5.6 4.2 6.9 7.6l3.1 3.1-3 1.5-1.7-1.7-.5 5.1-2.5 2.5-.9-2.8-2.7-.9 1.8-2.2-3.4-3.4C4.7 8.9 6.3 5.2 9.5 2zm.9 3.1c-1.5 1.1-2.3 3-1.9 4.7L13 5.3c-.9-.4-2-.3-2.6.8zM5 20c1-2.5 3-4.5 5.5-5.5l1 1c-2.2 1-3.9 2.7-4.9 4.9L5 20z"/>']
        ];
        var ddHTML = dd.map(function (d) {
            return '<a href="Topweb4all.html#' + d[0] + '"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">' + d[3] + '</svg><span><span data-tw4a="' + d[1] + '">' + t(L, d[1]) + '</span><small data-tw4a="' + d[2] + '">' + t(L, d[2]) + '</small></span></a>';
        }).join('');
        return '' +
        '<a class="tw4a-skip" href="#tw4a-main">' + t(L, 'a11y.skip') + '</a>' +
        '<header class="tw4a-header" role="banner">' +
            '<div class="tw4a-left">' +
                '<a class="tw4a-logo" href="Topweb4all.html"><img src="images/logo.png" alt="TOPWEB4ALL" style="height:38px;width:auto;display:block;"><div class="tw4a-logo-text">TOPWEB<span>4ALL</span></div></a>' +
                '<div class="tw4a-status"><span class="tw4a-dot"></span><span><span data-tw4a="status.city">' + t(L, 'status.city') + '</span> <strong id="tw4aClock">--:--</strong> • <span data-tw4a="status.ready">' + t(L, 'status.ready') + '</span></span></div>' +
            '</div>' +
            '<nav class="tw4a-nav" aria-label="' + t(L, 'a11y.mainNav') + '"><ul>' +
                lk('home', 'nav.home', 'home') +
                '<li class="tw4a-drop"><a class="tw4a-link" href="Topweb4all.html#services"><span data-tw4a="nav.services">' + t(L, 'nav.services') + '</span> <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true"><path d="M7 10l5 5 5-5H7z"/></svg></a>' +
                '<div class="tw4a-menu">' + ddHTML + '</div></li>' +
                lk('work', 'nav.work', 'portfolio') +
                lk('pricing', 'nav.pricing', 'pricing') +
                lk('about', 'nav.about', 'about') +
                lk('faq', 'nav.faq', 'faq') +
                lk('blog', 'nav.blog', 'blog') +
                lk('contact', 'nav.contact', 'contact') +
            '</ul></nav>' +
            '<div class="tw4a-right">' +
                '<button class="tw4a-icon" id="tw4aLangBtn" type="button" aria-label="' + t(L, 'a11y.lang') + '" title="' + t(L, 'a11y.lang') + '">' + GLOBE + '</button>' +
                '<button class="tw4a-icon" id="tw4aThemeBtn" type="button" aria-label="' + t(L, 'a11y.theme') + '" title="' + t(L, 'a11y.theme') + '" aria-pressed="false"></button>' +
                '<a class="tw4a-btn" href="Topweb4all.html#contact" data-tw4a="nav.start">' + t(L, 'nav.start') + '</a>' +
                '<button class="tw4a-icon tw4a-burger" id="tw4aBurger" type="button" aria-label="' + t(L, 'a11y.menu') + '" aria-expanded="false" aria-controls="tw4aDrawer">' + BURGER + '</button>' +
            '</div>' +
        '</header>' +
        '<div class="tw4a-drawer" id="tw4aDrawer" role="dialog" aria-modal="true" aria-label="' + t(L, 'a11y.menu') + '" aria-hidden="true">' +
            '<a href="Topweb4all.html#home" data-tw4a="nav.home">' + t(L, 'nav.home') + '</a>' +
            '<a href="Topweb4all.html#services" data-tw4a="nav.services">' + t(L, 'nav.services') + '</a>' +
            '<a href="projects.html" data-tw4a="nav.work">' + t(L, 'nav.work') + '</a>' +
            '<a href="Topweb4all.html#pricing" data-tw4a="nav.pricing">' + t(L, 'nav.pricing') + '</a>' +
            '<a href="https://topweb4all.github.io/Topweb4all_-portfolio/" data-tw4a="nav.about">' + t(L, 'nav.about') + '</a>' +
            '<a href="Topweb4all.html#faq" data-tw4a="nav.faq">' + t(L, 'nav.faq') + '</a>' +
            '<a href="articles.html" data-tw4a="nav.blog">' + t(L, 'nav.blog') + '</a>' +
            '<a href="Topweb4all.html#contact" data-tw4a="nav.contact">' + t(L, 'nav.contact') + '</a>' +
        '</div>';
    }
    function footerHTML(L) {
        var socials = SOCIALS.map(function (s) {
            return '<a href="' + s[0] + '" target="_blank" title="' + s[1] + '"><svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">' + s[2] + '</svg></a>';
        }).join('');
        return '' +
        '<footer class="tw4a-footer" role="contentinfo"><div class="tw4a-footer-grid">' +
            '<div><a class="tw4a-logo" href="Topweb4all.html"><img src="images/logo.png" alt="TOPWEB4ALL" style="height:30px;width:auto;display:block;"><div class="tw4a-logo-text" style="font-size:1.15rem">TOPWEB<span>4ALL</span></div></a>' +
            '<p class="desc" data-tw4a="ft.desc">' + t(L, 'ft.desc') + '</p>' +
            '<p class="copy"><span data-tw4a="ft.copy">' + t(L, 'ft.copy') + '</span> <a href="https://www.linkedin.com/in/omniabdm/" target="_blank" rel="noopener" style="color:inherit;font-weight:600">OmNia AhMed</a></p></div>' +
            '<div class="tw4a-cols"><div><h4 data-tw4a="ft.studio">' + t(L, 'ft.studio') + '</h4><div class="links">' +
                '<a href="Topweb4all.html#services" data-tw4a="ft.svc">' + t(L, 'ft.svc') + '</a>' +
                '<a href="projects.html" data-tw4a="ft.work">' + t(L, 'ft.work') + '</a>' +
                '<a href="Topweb4all.html#pricing" data-tw4a="ft.price">' + t(L, 'ft.price') + '</a>' +
                '<a href="Topweb4all.html#portfolio" data-tw4a="ft.how">' + t(L, 'ft.how') + '</a>' +
            '</div></div><div><h4 data-tw4a="ft.trust">' + t(L, 'ft.trust') + '</h4><div class="links">' +
                '<a href="https://topweb4all.github.io/Topweb4all_-portfolio/" data-tw4a="ft.about">' + t(L, 'ft.about') + '</a>' +
                '<a href="Topweb4all.html#faq" data-tw4a="ft.faq">' + t(L, 'ft.faq') + '</a>' +
                '<a href="articles.html" data-tw4a="ft.blog">' + t(L, 'ft.blog') + '</a>' +
                '<a href="Topweb4all.html#contact" data-tw4a="ft.contact">' + t(L, 'ft.contact') + '</a>' +
            '</div></div></div>' +
            '<div class="tw4a-socials">' + socials + '</div>' +
        '</div></footer>';
    }
    function paint(L) {
        document.querySelectorAll('[data-tw4a]').forEach(function (el) {
            var k = el.getAttribute('data-tw4a');
            if (STR[L] && STR[L][k]) el.textContent = STR[L][k];
        });
    }
    function tick() {
        try {
            var el = document.getElementById('tw4aClock');
            if (el) el.textContent = new Intl.DateTimeFormat([], { timeZone: 'Africa/Cairo', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());
        } catch (e) {}
    }
    return {
        init: function (opts) {
            opts = opts || {};
            var L = lang();
            var hh = document.getElementById('tw4a-chrome-header');
            var ff = document.getElementById('tw4a-chrome-footer');
            if (hh) hh.innerHTML = headerHTML(opts.active || '', L);
            if (ff) ff.innerHTML = footerHTML(L);
            tick(); setInterval(tick, 1000);
            var th = document.documentElement.getAttribute('data-theme') || localStorage.getItem('tw4a-theme') || 'dark';
            document.documentElement.setAttribute('data-theme', th);
            var tb = document.getElementById('tw4aThemeBtn');
            function icon() { if (tb) tb.innerHTML = (document.documentElement.getAttribute('data-theme') === 'light') ? SUN : MOON; }
            icon();
            function themePressed() {
                if (tb) tb.setAttribute('aria-pressed', String(document.documentElement.getAttribute('data-theme') === 'light'));
            }
            themePressed();
            if (tb) tb.addEventListener('click', function () {
                var nx = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', nx);
                localStorage.setItem('tw4a-theme', nx); icon(); themePressed();
            });
            var lb = document.getElementById('tw4aLangBtn');
            if (lb) lb.addEventListener('click', function () {
                var nx = lang() === 'ar' ? 'en' : 'ar';
                localStorage.setItem('tw4a-lang', nx);
                document.documentElement.lang = nx;
                document.documentElement.dir = nx === 'ar' ? 'rtl' : 'ltr';
                paint(nx);
                if (window.__tw4aAnnounce) window.__tw4aAnnounce(nx === 'ar' ? 'تم التبديل إلى العربية' : 'Switched to English');
                if (typeof window.applyLang === 'function' && window.__tw4a_chrome_switch !== true) {
                    window.__tw4a_chrome_switch = true;
                    try { window.applyLang(nx); } finally { window.__tw4a_chrome_switch = false; }
                }
            });
            // ---- mobile drawer (a11y: aria-expanded, aria-hidden, Esc, focus restore) ----
            var bg = document.getElementById('tw4aBurger');
            var dr = document.getElementById('tw4aDrawer');
            var bd = document.getElementById('tw4aBackdrop');
            if (!bd) { bd = document.createElement('div'); bd.id = 'tw4aBackdrop'; bd.className = 'tw4a-backdrop'; document.body.appendChild(bd); }
            var lastFocus = null;
            function setDrawerLinks(open) {
                if (!dr) return;
                dr.querySelectorAll('a').forEach(function (a) {
                    if (open) a.removeAttribute('tabindex');
                    else a.setAttribute('tabindex', '-1');
                });
            }
            function setDrawer(open) {
                if (!dr) return;
                dr.classList.toggle('open', open);
                dr.setAttribute('aria-hidden', String(!open));
                setDrawerLinks(open);
                if (bg) bg.setAttribute('aria-expanded', String(open));
                if (bd) bd.classList.toggle('open', open);
                document.body.style.overflow = open ? 'hidden' : '';
                if (open) {
                    lastFocus = document.activeElement;
                    var first = dr.querySelector('a');
                    if (first) first.focus();
                } else if (lastFocus && lastFocus.focus) {
                    lastFocus.focus();
                }
            }
            if (bg) bg.addEventListener('click', function () {
                setDrawer(!(dr && dr.classList.contains('open')));
            });
            if (bd) bd.addEventListener('click', function () { setDrawer(false); });
            if (dr) {
                dr.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setDrawer(false); }); });
                dr.addEventListener('keydown', function (e) {
                    if (e.key === 'Escape') { setDrawer(false); if (bg) bg.focus(); return; }
                    if (e.key !== 'Tab') return;
                    var f = dr.querySelectorAll('a[href], button:not([disabled])');
                    if (!f.length) return;
                    var first = f[0], last = f[f.length - 1];
                    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
                });
            }
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && dr && dr.classList.contains('open')) { setDrawer(false); if (bg) bg.focus(); }
            });
            setDrawerLinks(false);
            // live region announces language/theme changes for screen readers
            var live = document.getElementById('tw4aLive');
            if (!live) {
                live = document.createElement('div');
                live.id = 'tw4aLive'; live.className = 'sr-only';
                live.setAttribute('aria-live', 'polite'); live.setAttribute('aria-atomic', 'true');
                document.body.appendChild(live);
            }
            window.__tw4aAnnounce = function (msg) { if (live) live.textContent = msg; };
        },
        paint: paint
    };
})();

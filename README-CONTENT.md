# TOPWEB4ALL — نظام المحتوى (عربي / English)

الموقع شغال على GitHub Pages بدون سيرفر. عشان تضيفي مقال أو مشروع جديد، بتعدلي ملف واحد فقط.

## الملفات

| الملف | وظيفته |
|---|---|
| `Topweb4all.html` | الموقع الرئيسي (الأقسام بتتملي تلقائيًا من ملفات البيانات) |
| `data/articles.js` | كل المقالات (عربي + إنجليزي) |
| `data/projects.js` | كل المشاريع (عربي + إنجليزي) |
| `articles.html` | صفحة كل المقالات (بحث + فلترة) |
| `article.html?id=SLUG` | صفحة مقال واحد |
| `projects.html` | صفحة كل المشاريع (فلترة) |
| `project.html?id=SLUG` | صفحة مشروع واحد (Case Study) |
| `admin.html` | لوحة توليد كود مقال/مشروع جديد (افتحيها من جهازك) |
| `images/` | حطي صورك هنا (اعملي الفولدر لو مش موجود) |

## إضافة مقال جديد (دقيقتين)

1. افتحي `admin.html` في المتصفح (دبل كليك).
2. اختاري تبويب «📝 مقال جديد» واملئ الحقول بالعربي والإنجليزي.
3. اضغطي «توليد الكود» ثم «نسخ الكود».
4. افتحي `data/articles.js` والصقي الكود قبل سطر القالب الأخير (قبل `/* ── انسخي القالب`).
5. ارفعي على GitHub — المقال هيظهر وحده في:
   - الموقع الرئيسي (قسم Insights)
   - `articles.html`
   - صفحة `article.html?id=SLUG` الخاصة به

الصور: ارفعي صورة في فولدر `images/` واكتبي `images/my-cover.jpg` في حقل الصورة. لو لسه بتجربي خلي رابط picsum زي الباقي.

## إضافة مشروع جديد (دقيقتين)

نفس الخطوات من تبويب «🚀 مشروع جديد» في `admin.html`، والصقي في `data/projects.js`.
المشروع هيظهر وحده في:
- الموقع الرئيسي (قسم Work)
- `projects.html`
- صفحة `project.html?id=SLUG` الخاصة به

## النشر على GitHub Pages

1. اعملي repository جديد وارفعي كل الملفات (أو `git push`).
2. من Settings ← Pages ← اختاري Branch: `main` / Folder: `/ (root)`.
3. موقعك هيبقى على `https://USERNAME.github.io/REPO/` — والصفحات:
   - `.../articles.html` ، `.../article.html?id=zero-to-one-brand-checklist`
   - `.../projects.html` ، `.../project.html?id=nile-commerce-zero-to-one`

ملاحظة: اللغة والثيم محفوظان في `localStorage` فالتنقل بين الصفحات يحافظ على اختيار الزائر (عربي/EN، ليلي/نهاري).

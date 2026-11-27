# 📊 نظام لوحة الرسائل (Messages Dashboard) — TOPWEB4ALL

تمت إضافة نظام احترافي لجمع رسائل نموذج Contact Us وعرضها في لوحة تحكم، مع إمكانية الربط بـ Google Sheet (Excel).

## الملفات المضافة

| الملف | الوظيفة |
|---|---|
| `dashboard.html` | لوحة تحكم لعرض/بحث/فلترة/تصدير رسائل النموذج (محمية بكلمة مرور) |
| `google-apps-script.js` | كود Google Apps Script لربط النموذج بـ Google Sheet |
| `index.html` (مُعدّل) | نموذج Contact يحفظ الرسائل محلياً ويُعيد توجيهها اختيارياً إلى Sheet |

## 1) الاستخدام (بدون سيرفر — GitHub Pages)

1. ارفع الملفات إلى repository على GitHub (أو فعّل GitHub Pages).
2. افتح `dashboard.html` (مثلاً `https://yourname.github.io/topweb4all/dashboard.html`).
3. كلمة المرور الافتراضية: `topweb4all` (غيّرها في `DASH_PASS` داخل `dashboard.html`).
4. أي رسالة تُرسل من نموذج Contact في `index.html` تُحفظ في `localStorage` (`tw4a-messages`) وتظهر في اللوحة.

> ⚠️ ملاحظة: `localStorage` خاص بكل متصفح. للحصول على جميع رسائل الزوار (من أجهزة مختلفة) استخدم ربط Google Sheet (الخطوة 2).

## 2) ربط النموذج بـ Google Sheet (Excel) — اختياري

1. أنشئ Google Sheet جديداً.
2. Extensions → Apps Script → الصق محتوى `google-apps-script.js` → Save.
3. Deploy → New deployment → Web app:
   - Execute as: **Me**
   - Who has access: **Anyone**
   - انسخ رابط Web app (ينتهي بـ `/exec`).
4. في `index.html` عيّن:
   ```js
   window.TW4A_SHEET_ENDPOINT = 'https://script.google.com/macros/s/XXXX/exec';
   ```
   (موجود في `<script>` قبل السكربت الرئيسي)
5. في `dashboard.html` عيّن `SHEET_URL = 'https://script.google.com/macros/s/XXXX/exec'` أو أدخله عند المزامنة.
6. في اللوحة اضغط "🔄 مزامنة Sheet" لجلب جميع الرسائل من Sheet.

## الميزات

- 📊 إحصائيات: إجمالي، غير مقروء، اليوم، هذا الأسبوع
- 🔍 بحث + فلترة حسب الخدمة/الحالة
- ✓ تمييز مقروء/غير مقروء، 🗑 حذف
- ⬇️ تصدير CSV (Excel)
- 🔄 مزامنة من Google Sheet
- 🗑 مسح الكل
- 🔐 حماية بكلمة مرور (sessionStorage)
- 🌙 متوافق مع ثيم الموقع (dark/light)

## تغيير كلمة المرور

في `dashboard.html`: `const DASH_PASS = 'topweb4all';`

## ملاحظات أمنية

هذا نظام client-side (GitHub Pages). كلمة المرور ليست "أمان حقيقي" — لأمان عالٍ استخدم backend (Cloudflare Workers / Firebase) أو حماية GitHub Pages (غير متاحة). للاستخدام الشخصي/الداخلي مناسب.

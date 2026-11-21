/* ============================================================
   TOPWEB4ALL — Content System
   How to add a new article (2 minutes):
   1) Copy one { ... } block below
   2) Change slug to something unique, e.g. "my-new-guide"
   3) Fill title_en/title_ar + excerpt + body paragraphs
   4) Save file → done. Listing + detail page update automatically.
   Works on GitHub Pages (static, no backend). Images: put files in
   /images/articles/ and reference "images/articles/my-cover.jpg", or use any URL.
   ============================================================ */
window.TW4A_ARTICLES = [
  {
    slug: "zero-to-one-brand-checklist",
    cat: "brand",
    cover: "images/articles/zero-to-one-brand-checklist.jpg",
    date_en: "Nov 2026 • 6 min read",
    date_ar: "نوفمبر 2026 • 6 دقائق قراءة",
    title_en: "The zero-to-one brand checklist: from naming to visual system",
    title_ar: "قائمة البراند من الصفر: من الاسم إلى النظام البصري",
    excerpt_en: "How we turn a raw idea into a market-ready identity without agency bloat — naming, domains, guidelines and flagship pages.",
    excerpt_ar: "كيف نحوّل الفكرة الخام إلى هوية جاهزة للسوق بدون تضخم الوكالات — الاسم والدومينات والأدلة والصفحات الأساسية.",
    body_en: [
      "Every strong brand starts with a name that survives three tests: memorable in 3 seconds, available as .com + social handles, and meaningful in both Arabic and English. We shortlist 12 names, then kill 9 of them in the first review.",
      "The visual system comes next: one primary logo, one mono version, 2–3 brand colors max, and a type pairing (display + body). Anything more is decoration, not identity.",
      "Finally we ship the flagship footprint: a one-page site, matching social covers, and email signatures — so the brand looks real from day one."
    ],
    body_ar: [
      "كل براند قوي يبدأ باسم يجتاز 3 اختبارات: يُحفظ في 3 ثوانٍ، ومتاح كـ .com ومعرفات سوشيال، وله معنى بالعربية والإنجليزية. نجهز 12 اسمًا ثم نستبعد 9 منها في أول مراجعة.",
      "ثم يأتي النظام البصري: لوجو أساسي واحد ونسخة أحادية، ولونان أو 3 ألوان كحد أقصى، وثنائية خطوط (عرض + نص). أي شيء زائد هو زخرفة لا هوية.",
      "وأخيرًا نطلق الحضور الأساسي: موقع من صفحة واحدة وأغلفة سوشيال متطابقة وتوقيعات إيميل — ليبدو البراند حقيقيًا من اليوم الأول."
    ],
    quote_en: "\"A brand is not a logo. It is the promise a customer can repeat in one sentence.\"",
    quote_ar: "\"البراند ليس لوجو. بل هو الوعد الذي يستطيع العميل تكراره في جملة واحدة.\"",
    points_en: ["Check .com + Instagram + X handles before falling in love with a name", "Limit palette to 3 colors and 2 fonts", "Ship guidelines as a 1-page PDF your team will actually use"],
    points_ar: ["تحقق من .com وإنستجرام وX قبل أن تقع في حب الاسم", "التزم بـ 3 ألوان وخطين فقط", "سلّم الدليل كملف صفحة واحدة يستخدمه فريقك فعلًا"]
  },
  {
    slug: "subsecond-loads-win-deals",
    cat: "web",
    cover: "images/articles/subsecond-loads-win-deals.jpg",
    date_en: "Nov 2026 • 5 min read",
    date_ar: "نوفمبر 2026 • 5 دقائق قراءة",
    title_en: "Why sub-second loads win deals (and how we engineer them)",
    title_ar: "لماذا سرعة التحميل الأقل من ثانية تكسب الصفقات (وكيف نهندسها)",
    excerpt_en: "Clean architecture, no bloated dependencies, responsive layouts — the speed stack behind high-conversion sites.",
    excerpt_ar: "معمارية نظيفة بدون اعتماديات منتفخة وتصميم متجاوب — منظومة السرعة وراء المواقع عالية التحويل.",
    body_en: [
      "Speed is a feature. A homepage that loads in 0.8s converts up to 2x better than one loading in 3s — especially on Egyptian 4G networks.",
      "Our stack: static-first pages, images in WebP under 120KB, zero heavy UI frameworks for landing pages, and CDN caching with stale-while-revalidate.",
      "We measure with Lighthouse + real-device throttling, not office Wi-Fi. Target: LCP under 1.2s, CLS under 0.05."
    ],
    body_ar: [
      "السرعة ميزة بحد ذاتها. صفحة تفتح في 0.8 ثانية تحوّل حتى ضعف صفحة تفتح في 3 ثوانٍ — خصوصًا على شبكات 4G في مصر.",
      "منظومتنا: صفحات ثابتة أولًا، صور WebP أقل من 120KB، بدون أطر واجهات ثقيلة لصفحات الهبوط، وتخزين CDN مع stale-while-revalidate.",
      "نقيس بـ Lighthouse مع اختناق شبكة يحاكي الأجهزة الحقيقية لا واي فاي المكتب. المستهدف: LCP أقل من 1.2 ثانية وCLS أقل من 0.05."
    ],
    quote_en: "\"Nobody ever complained a website was too fast.\"",
    quote_ar: "\"لم يشتكِ أحد يومًا أن موقعًا ما سريع أكثر من اللازم.\"",
    points_en: ["Compress every hero image under 120KB (WebP)", "Ship landing pages without heavy JS frameworks", "Cache at the CDN edge, revalidate in background"],
    points_ar: ["اضغط كل صورة رئيسية لأقل من 120KB بصيغة WebP", "ابنِ صفحات الهبوط بدون أطر JS ثقيلة", "خزّن على أطراف CDN وحدّث في الخلفية"]
  },
  {
    slug: "spf-dkim-dmarc-inbox",
    cat: "email",
    cover: "images/articles/spf-dkim-dmarc-inbox.jpg",
    date_en: "Oct 2026 • 4 min read",
    date_ar: "أكتوبر 2026 • 4 دقائق قراءة",
    title_en: "SPF, DKIM, DMARC: stop landing in spam forever",
    title_ar: "SPF وDKIM وDMARC: توقف عن الوصول للسبام للأبد",
    excerpt_en: "The exact enforcement sequence we use for Workspace and M365 setups to reach 100% inbox placement.",
    excerpt_ar: "تسلسل التفعيل الدقيق الذي نستخدمه لإعدادات Workspace وM365 للوصول إلى 100% إنبوكس.",
    body_en: [
      "Deliverability is DNS, not luck. Most 'spam problems' are just missing or misordered SPF, DKIM and DMARC records.",
      "Our order: SPF first (include only real senders), then DKIM (1024-bit+ per provider), then DMARC at p=none → quarantine → reject over 3 weeks.",
      "We verify with inbox tests on Gmail, Outlook and Yahoo before handoff, and deliver a 1-page admin doc with every record."
    ],
    body_ar: [
      "الوصول للإنبوكس مسألة DNS لا حظ. معظم 'مشاكل السبام' هي سجلات SPF وDKIM وDMARC ناقصة أو مرتبة خطأ.",
      "ترتيبنا: SPF أولًا (المرسلون الحقيقيون فقط)، ثم DKIM بطول 1024-bit+ لكل مزود، ثم DMARC من p=none إلى quarantine إلى reject خلال 3 أسابيع.",
      "نتحقق باختبارات إنبوكس على Gmail وOutlook وYahoo قبل التسليم، ونسلّم صفحة إدارة واحدة فيها كل سجل."
    ],
    quote_en: "\"If Gmail cannot verify you, Gmail will not trust you.\"",
    quote_ar: "\"إذا لم يستطع Gmail التحقق منك، فلن يثق بك.\"",
    points_en: ["SPF: list only tools that really send", "DKIM: enable per sender, 1024-bit minimum", "DMARC: ramp none → quarantine → reject"],
    points_ar: ["SPF: اذكر فقط الأدوات التي ترسل فعلًا", "DKIM: فعّله لكل مرسل، 1024-bit كحد أدنى", "DMARC: تدرّج من none إلى quarantine إلى reject"]
  },
  {
    slug: "kill-manual-crm-work",
    cat: "auto",
    cover: "images/articles/kill-manual-crm-work.jpg",
    date_en: "Oct 2026 • 5 min read",
    date_ar: "أكتوبر 2026 • 5 دقائق قراءة",
    title_en: "Kill manual CRM work: forms → pipeline → payments",
    title_ar: "اقضِ على شغل CRM اليدوي: نماذج ← خط ← مدفوعات",
    excerpt_en: "Webhook-first automation patterns that connect lead forms, CRMs and gateways without fragile zaps.",
    excerpt_ar: "أنماط أتمتة تبدأ من Webhooks تربط نماذج العملاء وCRM والبوابات بدون حلول هشة.",
    body_en: [
      "Manual copy-paste between forms, sheets and CRM is where leads die. We replace it with one webhook pipeline: form submit → validate → create deal → trigger sequence → notify on WhatsApp/email.",
      "Payments close the loop: successful charge fires a webhook that moves the deal to 'won', issues the invoice, and provisions access — no human touch.",
      "Every flow has retries + dead-letter alerts, so a failed webhook never silently eats an order."
    ],
    body_ar: [
      "النسخ واللصق اليدوي بين النماذج والشيتات وCRM هو حيث تموت العملاء المحتملون. نستبدله بخط Webhook واحد: إرسال النموذج ← تحقق ← إنشاء صفقة ← تشغيل سلسلة ← إشعار واتساب/إيميل.",
      "المدفوعات تُغلق الحلقة: الدفع الناجح يطلق Webhook ينقل الصفقة إلى 'مغلقة' ويصدر الفاتورة ويفعّل الوصول — بدون تدخل بشري.",
      "كل تدفق فيه إعادة محاولة + تنبيهات للأخطاء، فلا يبتلع Webhook فاشل أي طلب بصمت."
    ],
    quote_en: "\"Automate the boring so humans can do the closing.\"",
    quote_ar: "\"أتمت الممل ليتفرغ البشر للإغلاق.\"",
    points_en: ["One webhook in, validated + logged", "CRM stages mirror payment states 1:1", "Retries + alerts on every external call"],
    points_ar: ["Webhook واحد للداخل، مُتحقق منه ومُسجَّل", "مراحل CRM تعكس حالات الدفع 1:1", "إعادة محاولة + تنبيهات على كل استدعاء خارجي"]
  },
  {
    slug: "140-check-qa-sweep",
    cat: "qa",
    cover: "images/articles/140-check-qa-sweep.jpg",
    date_en: "Sep 2026 • 7 min read",
    date_ar: "سبتمبر 2026 • 7 دقائق قراءة",
    title_en: "The 140-check pre-launch QA sweep we run every time",
    title_ar: "فحص الجودة 140 نقطة قبل الإطلاق الذي نجريه كل مرة",
    excerpt_en: "Cross-browser, edge cases and performance bottlenecks — what to test before your traffic spike.",
    excerpt_ar: "كل المتصفحات والحالات الحدية واختناقات الأداء — ماذا تختبر قبل ذروة الترافيك.",
    body_en: [
      "Launch-day bugs are never mysterious — they are the checks someone skipped. Our sweep covers 140 points: functional flows, forms validation, responsive breakpoints, cross-browser matrix, and speed.",
      "We record video proof for every defect with severity (blocker / major / minor) so developers fix in priority order.",
      "The final gate: a fresh-device, fresh-network rehearsal — cache cleared, throttled 4G, exactly like a first-time visitor."
    ],
    body_ar: [
      "أخطاء يوم الإطلاق ليست غامضة أبدًا — بل هي الفحوصات التي تخطاها أحدهم. فحصنا يغطي 140 نقطة: التدفقات الوظيفية والتحقق من النماذج ونقاط التوقف المتجاوبة ومصفوفة المتصفحات والسرعة.",
      "نسجل إثبات فيديو لكل عيب مع درجة الخطورة (معطّل / رئيسي / بسيط) ليصلح المطورون بالأولوية.",
      "البوابة الأخيرة: تجربة بجهاز جديد وشبكة جديدة — كاش ممسوح و4G مخنوقة، تمامًا كزائر أول مرة."
    ],
    quote_en: "\"QA is not finding bugs. It is preventing launch-day surprises.\"",
    quote_ar: "\"الجودة ليست إيجاد الأخطاء. بل منع مفاجآت يوم الإطلاق.\"",
    points_en: ["Test on real mid-range Android, not just flagships", "Every form: empty, wrong, huge, Arabic + English", "Record video proof per defect with severity"],
    points_ar: ["اختبر على أندرويد متوسط حقيقي لا فقط الأجهزة الرائدة", "كل نموذج: فارغ وخاطئ وضخم وبالعربية والإنجليزية", "سجل فيديو لكل عيب مع درجة الخطورة"]
  },
  {
    slug: "zero-downtime-go-live",
    cat: "launch",
    cover: "images/articles/zero-downtime-go-live.jpg",
    date_en: "Sep 2026 • 6 min read",
    date_ar: "سبتمبر 2026 • 6 دقائق قراءة",
    title_en: "Zero-downtime go-live: DNS, CDN and indexing done right",
    title_ar: "إطلاق بدون توقف: DNS وCDN والأرشفة بالطريقة الصحيحة",
    excerpt_en: "Our launch-day runbook: cutover order, caching, Search Console and the 30-day support window.",
    excerpt_ar: "خطة يوم الإطلاق: ترتيب النقل والتخزين المؤقت وSearch Console ونافذة الدعم 30 يوم.",
    body_en: [
      "Go-live order matters: lower TTLs 48h before, deploy to production + verify, switch DNS, warm the CDN cache, then submit sitemaps.",
      "We keep the old version on standby with an instant rollback DNS entry — used twice in 3 years, worth it every time.",
      "After launch: Search Console + Analytics verification, 404 watch for 7 days, and weekly reports for 30 days."
    ],
    body_ar: [
      "ترتيب الإطلاق مهم: خفّض TTL قبل 48 ساعة، انشر على الإنتاج وتحقق، بدّل DNS، سخّن كاش CDN، ثم أرسل خرائط الموقع.",
      "نُبقي النسخة القديمة جاهزة مع مدخل DNS للتراجع الفوري — استُخدم مرتين في 3 سنوات، ويستحق كل مرة.",
      "بعد الإطلاق: تحقق من Search Console والتحليلات، ومراقبة 404 لمدة 7 أيام، وتقارير أسبوعية لـ 30 يومًا."
    ],
    quote_en: "\"A calm launch day is engineered weeks before.\"",
    quote_ar: "\"يوم الإطلاق الهادئ يُهندَس قبلها بأسابيع.\"",
    points_en: ["Lower DNS TTL to 300s 48h before launch", "Keep instant-rollback entry ready", "Watch 404s + index coverage for 30 days"],
    points_ar: ["خفّض DNS TTL إلى 300 ثانية قبل الإطلاق بـ 48 ساعة", "جهّز مدخل التراجع الفوري", "راقب 404 وتغطية الأرشفة لـ 30 يومًا"]
  }

  /* ── انسخي القالب ده لمقال جديد ──
  ,
  {
    slug: "my-new-article",
    cat: "web",
    cover: "images/my-cover.jpg",
    date_en: "Dec 2026 • 5 min read",
    date_ar: "ديسمبر 2026 • 5 دقائق قراءة",
    title_en: "English title here",
    title_ar: "العنوان بالعربية هنا",
    excerpt_en: "Short English summary (1-2 lines).",
    excerpt_ar: "ملخص عربي قصير (سطر أو سطرين).",
    body_en: ["Paragraph 1...", "Paragraph 2...", "Paragraph 3..."],
    body_ar: ["فقرة 1...", "فقرة 2...", "فقرة 3..."],
    quote_en: "\"Quote...\"",
    quote_ar: "\"اقتباس...\"",
    points_en: ["Point 1", "Point 2", "Point 3"],
    points_ar: ["نقطة 1", "نقطة 2", "نقطة 3"]
  }
  ─────────────────────────────── */
];

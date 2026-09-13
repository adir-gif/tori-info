/**
 * pingo-legal/build.js — הדפים המשפטיים בחמש שפות.
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * ‼️ **למה מחולל ולא חמישה עותקים ביד.** המסמכים האלה **משתנים** — כל ספק
 * חדש, כל קטגוריית מידע חדשה, כל שינוי במה שנשלח ל-AI מחייב עדכון. חמישה
 * קבצים נפרדים שכל אחד מהם מחזיק גם את ה-`<style>` וגם את התוכן פירושם
 * שתיקון אחד צריך לנחות בחמישה מקומות, וששכחה באחד מהם היא **הצהרה שגויה
 * בדף משפטי** — לא באג ויזואלי.
 *
 * כאן המעטפת (‏`<head>`, הסגנון, בורר השפה, הכיווניות) יושבת פעם אחת,
 * והתוכן יושב ב-`content/<lang>.js` פעם אחת לכל שפה.
 *
 * ── מה נוצר ─────────────────────────────────────────────────────────────
 * 15 קבצים: שלושה עמודים × חמש שפות, ב-`<lang>/`.
 * ובנוסף **שלושה קבצים בשורש** שהם שכפול של הגרסה האנגלית.
 *
 * ‼️ **השורש חייב להישאר חי, וזו לא בחירת עיצוב.** הכתובות
 * `tori-info.vercel.app/privacy.html` ו-`/delete-account.html` **כבר יושבות
 * בשלושה מקומות שאי אפשר לשנות מכאן**: בשדה App Privacy של אפל, בטופס
 * Data Safety של גוגל, ובתוך הבילד עצמו (`PRIVACY_URL` ב-`src/legal.ts`).
 * קישור שבור שם הוא עילת דחייה. השורש הוא לכן אנגלית — שפת הבסיס החדשה —
 * **עם בורר שפה בראש הדף** שמעביר ל-`<lang>/`.
 *
 * הרצה:  node pingo-legal/build.js
 */

const fs = require('fs');
const path = require('path');

const LANGS = ['en', 'he', 'es', 'fr', 'ar'];
const DIR = { he: 'rtl', ar: 'rtl', en: 'ltr', es: 'ltr', fr: 'ltr' };
const LABEL = { en: 'English', he: 'עברית', es: 'Español', fr: 'Français', ar: 'العربية' };

/** ‼️ אנגלית ראשונה — היא מה שיושב בשורש. ראה ההערה למעלה */
const ROOT_LANG = 'en';

const PAGES = ['index', 'privacy', 'deleteAccount'];
const FILE = { index: 'index.html', privacy: 'privacy.html', deleteAccount: 'delete-account.html' };

/*
  ── הסגנון ────────────────────────────────────────────────────────────────
  זהה למה שהיה בשלושת הקבצים, עם שני הבדלים בלבד:

  · **`th,td{text-align:start}`** ולא `right`. זה כל מה שהטבלאות צריכות כדי
    לעבוד בשתי הכיווניות — `start` נגזר מ-`dir` של המסמך. ‏`right` קשיח
    היה משאיר את הטבלאות מיושרות לימין גם באנגלית.
  · **`.langs`** — בורר השפה, שלא היה קיים.

  ⚠️ הבורר הוא `<a>` ולא JavaScript. דף משפטי צריך להיקרא גם כשסקריפט
  נחסם, וגם על ידי בוט ביקורת שאינו מריץ כלום.
*/
const STYLE = `
  :root{
    --bg:#f7fbff; --card:#fff; --text:#16222e; --muted:#5b6b7a; --faint:#8496a6;
    --ice:#2d7dd2; --line:#e2ecf5; --warn:#fff8e6; --warnline:#f0dfae;
  }
  @media (prefers-color-scheme: dark){
    :root{ --bg:#0f1720; --card:#16212c; --text:#e8f0f7; --muted:#a7b8c6; --faint:#7d8fa0;
           --ice:#6fb3f2; --line:#243441; --warn:#2a2416; --warnline:#4a4023; }
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--text);
       font-family:'Rubik','Segoe UI',system-ui,-apple-system,sans-serif;
       line-height:1.75;font-size:17px}
  .wrap{max-width:760px;margin:0 auto;padding:32px 20px 80px}
  header{padding:28px 0 8px;border-bottom:2px solid var(--line);margin-bottom:28px}
  h1{font-size:30px;margin:0 0 6px;letter-spacing:-.02em}
  h2{font-size:21px;margin:36px 0 10px;color:var(--ice);letter-spacing:-.01em}
  h3{font-size:17px;margin:22px 0 6px}
  .sub{color:var(--muted);font-size:15px;margin:0}
  p,li{color:var(--text)}
  ul{padding-inline-start:22px}
  ol{padding-inline-start:22px}
  li{margin:7px 0}
  .card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px 20px;margin:18px 0}
  .note{background:var(--warn);border-color:var(--warnline)}
  .muted{color:var(--muted);font-size:15px}
  table{width:100%;border-collapse:collapse;margin:14px 0;font-size:15.5px}
  th,td{text-align:start;padding:10px 12px;border-bottom:1px solid var(--line);vertical-align:top}
  th{color:var(--muted);font-weight:600;font-size:14px}
  a{color:var(--ice)}
  code{background:var(--line);padding:1px 6px;border-radius:5px;font-size:14px;direction:ltr;display:inline-block}
  .btn{display:inline-block;background:var(--ice);color:#fff;text-decoration:none;
       padding:13px 22px;border-radius:12px;font-weight:600;margin-top:6px}
  footer{margin-top:48px;padding-top:20px;border-top:1px solid var(--line);color:var(--faint);font-size:14px}

  /* בורר השפה — שורה דקה מעל הכותרת, לא ניווט */
  .langs{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:14px;
         padding-bottom:14px;margin-bottom:-10px}
  .langs a{text-decoration:none;color:var(--muted)}
  .langs a[aria-current]{color:var(--text);font-weight:600}

  /* ── דף הבית ─────────────────────────────────────────────────────── */
  a.row{display:block;background:var(--card);border:1px solid var(--line);
        border-radius:14px;padding:16px 18px;margin:10px 0;text-decoration:none;color:inherit}
  a.row strong{color:var(--ice);display:block;font-size:17px}
  a.row span{color:var(--muted);font-size:15px}
`;

/**
 * ‼️ **הבורר מצביע תמיד ל-`<lang>/` ולעולם לא לשורש**, גם כשהדף הנוכחי
 * *הוא* השורש. אחרת אנגלית בשורש ואנגלית ב-`en/` היו שתי כתובות לאותו דף,
 * והמעבר ביניהן היה נראה למשתמש כמו לחיצה שלא עשתה כלום.
 */
function langBar(lang, page, atRoot) {
  const base = atRoot ? './' : '../';
  const links = LANGS.map((l) =>
    `<a href="${base}${l}/${FILE[page]}" lang="${l}"${l === lang ? ' aria-current="page"' : ''}>${LABEL[l]}</a>`
  ).join('\n    ');
  return `<nav class="langs">\n    ${links}\n  </nav>`;
}

function render(lang, page, atRoot) {
  const c = require(`./content/${lang}.js`)[page];
  return `<!doctype html>
<!--
  ⚠️ **נוצר על ידי \`pingo-legal/build.js\` — אין לערוך כאן.**
  התוכן: \`pingo-legal/content/${lang}.js\` · המעטפת: \`build.js\`.
-->
<html lang="${lang}" dir="${DIR[lang]}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${c.title}</title>
<style>${STYLE}</style>
</head>
<body>
<div class="wrap">

  ${langBar(lang, page, atRoot)}

<header>
  <h1>${c.h1}</h1>
  <p class="sub">${c.sub}</p>
</header>

${c.body.trim()}

</div>
</body>
</html>
`;
}

const ROOT = __dirname;
let n = 0;
for (const lang of LANGS) {
  fs.mkdirSync(path.join(ROOT, lang), { recursive: true });
  for (const page of PAGES) {
    fs.writeFileSync(path.join(ROOT, lang, FILE[page]), render(lang, page, false));
    n++;
  }
}
for (const page of PAGES) {
  fs.writeFileSync(path.join(ROOT, FILE[page]), render(ROOT_LANG, page, true));
  n++;
}
console.log(`✓ ${n} קבצים · ${LANGS.length} שפות · השורש ב-${ROOT_LANG}`);

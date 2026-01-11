// js/config.js

const _SUPABASE_URL = 'https://blzkbhjjoqylinywxtyy.supabase.co'; // 這裡維持你原本的網址
const _SUPABASE_KEY = 'sb_publishable_k5DR0vYzR9-GKrHoysRFjA_iTMlJPjh';        // 這裡維持你原本的金鑰

// ▼▼▼ 修改這一行 ▼▼▼
// 我們把連線存到 'window.db' 這個變數，避免跟官方原本的名稱打架
window.db = window.supabase.createClient(_SUPABASE_URL, _SUPABASE_KEY);

console.log("資料庫連線成功，請使用 db 來操作！");

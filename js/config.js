// js/config.js
// 這是全站共用的設定檔

const _SUPABASE_URL = 'https://blzkbhjjoqylinywxtyy.supabase.co';
const _SUPABASE_KEY = 'sb_publishable_k5DR0vYzR9-GKrHoysRFjA_iTMlJPjh'; // 填入那個 eyJ 開頭的長字串

// 初始化 Supabase 客戶端
const supabase = window.supabase.createClient(_SUPABASE_URL, _SUPABASE_KEY);

console.log("Supabase 連線已啟動！");

// js/config.js

const _SUPABASE_URL = 'https://blzkbhjjoqylinywxtyy.supabase.co'; // 這裡維持你原本的網址
const _SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsemtiaGpqb3F5bGlueXd4dHl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxMzIyMzUsImV4cCI6MjA4MzcwODIzNX0.14FW_Y3iJlqGVwN2kGBZskYH-uHkjaBvwfCPPST7xq0';        // 這裡維持你原本的金鑰

// ▼▼▼ 修改這一行 ▼▼▼
// 我們把連線存到 'window.db' 這個變數，避免跟官方原本的名稱打架
window.db = window.supabase.createClient(_SUPABASE_URL, _SUPABASE_KEY);

console.log("資料庫連線成功，請使用 db 來操作！");

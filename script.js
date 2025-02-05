document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        // Redirect ไปยังหน้า Homepage
        window.location.href = 'homePage.html'; // เปลี่ยน 'index.html' เป็นชื่อไฟล์ Homepage ของคุณ

        // แสดงข้อความ "Hello world!" ในหน้า Homepage
        localStorage.setItem('welcomeMessage', 'Hello world!');
    } else {
        alert('Username หรือ Password ไม่ถูกต้อง');
    }
});
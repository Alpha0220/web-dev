document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มแบบปกติ

    // ตรวจสอบข้อมูล Login (ตัวอย่าง)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        alert('Login สำเร็จ!');
        // Redirect ไปยังหน้าอื่น หรือทำอย่างอื่นตามต้องการ
    } else {
        alert('Username หรือ Password ไม่ถูกต้อง');
    }
});
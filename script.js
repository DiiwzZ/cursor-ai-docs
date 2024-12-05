document.addEventListener('DOMContentLoaded', function() {
    // โหลด navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            
            // เพิ่ม active class ตาม URL ปัจจุบัน
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                // ไม่เพิ่ม active class สำหรับลิงก์ดาวน์โหลด
                if (href === currentPage && !href.includes('cursor.sh')) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}); 
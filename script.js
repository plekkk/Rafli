// Tunggu sampai seluruh dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Efek Navigasi Aktif
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Cek apakah posisi scroll berada di dalam section
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(current)) {
                link.classList.add('active');
            }
        });
    });


    // 2. Animasi Saat Scroll (Fade-in effect)
    const fadeElements = document.querySelectorAll('.container, .hero-content, footer');

    const observerOptions = {
        root: null, // viewport sebagai root
        rootMargin: '0px',
        threshold: 0.1 // elemen akan dianggap terlihat jika 10% dari elemen sudah masuk viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        el.classList.add('fade-in-on-scroll');
        observer.observe(el);
    });

});

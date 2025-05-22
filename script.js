// Scroll Reveal Animation
const animatedElements = document.querySelectorAll('.animate-fade, .animate-slide, .animate-zoom');

const revealOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, {
  threshold: 0.1,
});

animatedElements.forEach(el => observer.observe(el));

const links = document.querySelectorAll('.nav-link');
const body = document.body; // bisa juga bagian utama yang ingin di fade

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (!targetSection) return;

    // Tambah class fade-out ke body (atau bagian utama yang ingin efek)
    body.classList.add('fade-out');

    // Tunggu animasi selesai 500ms, lalu scroll dan hapus fade-out
    setTimeout(() => {
      // Scroll ke bagian target dengan smooth behavior
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Hapus class fade-out biar halaman tampil normal lagi
      body.classList.remove('fade-out');
    }, 500);
  });
});

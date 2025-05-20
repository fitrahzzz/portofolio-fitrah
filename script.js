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


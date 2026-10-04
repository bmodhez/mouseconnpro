document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for Scroll Animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select all elements to animate
  const animatedElements = document.querySelectorAll('.animate-up, .animate-left, .animate-right, .stagger-box');
  
  animatedElements.forEach(el => {
    // Remove the instant animation classes if any and prepare for scroll reveal
    el.classList.add('hidden-reveal');
    observer.observe(el);
  });
});

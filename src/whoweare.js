document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stat");

  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;
    stats.forEach((stat) => {
      const top = stat.getBoundingClientRect().top;
      if (top < trigger) {
        stat.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

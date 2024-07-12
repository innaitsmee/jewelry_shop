//hero section height
document.querySelector(".hero-section").style.height = `calc(100vh - ${
  getComputedStyle(document.querySelector(".header")).height
})`;

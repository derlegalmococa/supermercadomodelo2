document.addEventListener("DOMContentLoaded", () => {
  // Banner / carrossel funcionalidade simples
  const slides = document.querySelectorAll(".banner-slide");
  const prevBtn = document.querySelector(".banner-prev");
  const nextBtn = document.querySelector(".banner-next");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Alternar slides automaticamente a cada 5s
  setInterval(nextSlide, 5000);

  // Funcionalidade de busca (mock)
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      // Aqui você pode redirecionar ou fazer fetch para busca de produtos
      alert("Você pesquisou por: " + query);
      // ex: window.location.href = `/busca.html?q=${encodeURIComponent(query)}`;
    }
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchBtn.click();
    }
  });
});

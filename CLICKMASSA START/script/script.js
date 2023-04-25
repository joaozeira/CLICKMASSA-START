/* FAQ */
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

/* SCROLL */
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

/* When Scroll */
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
});

/* NAV RECURSOS */
const gatilho = document.querySelector("#gatilho");
const chamada = document.querySelector("#chamada");
const interacao = document.querySelector("#interacao");

const contGatilho = document.querySelector("#cont-gatilho");
const contChamada = document.querySelector("#cont-chamada");
const contInteracao = document.querySelector("#cont-interacao");

gatilho.addEventListener("click", function active() {
  gatilho.classList.add("active");
  chamada.classList.remove("active");
  interacao.classList.remove("active");

  contGatilho.style.display = 'flex';
  contChamada.style.display = 'none';
  contInteracao.style.display = 'none';
});

chamada.addEventListener("click", function active() {
  gatilho.classList.remove("active");
  chamada.classList.add("active");
  interacao.classList.remove("active");

  contGatilho.style.display = 'none';
  contChamada.style.display = 'flex';
  contInteracao.style.display = 'none';
});

interacao.addEventListener("click", function active() {
  gatilho.classList.remove("active");
  chamada.classList.remove("active");
  interacao.classList.add("active");

  contGatilho.style.display = 'none';
  contChamada.style.display = 'none';
  contInteracao.style.display = 'flex';
}); 


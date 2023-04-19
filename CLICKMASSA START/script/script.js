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



/* PLANOS */
/* $(".content-planos").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".nav-planos",
  swipe: false,
  touchMove: false,
  draggable: false,
  infinite: false,
});

$(".nav-planos").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".content-planos",
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  swipeToSlide: false,
  touchMove: false,
  draggable: false,
  infinite: false,
}); */

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

/* NAV PLANOS */
const mensal = document.querySelector("#mensal");
const semestral = document.querySelector("#semestral");
const anual = document.querySelector("#anual");

const cardMensal = document.querySelector("#cards-mensal");
const cardSemestral = document.querySelector("#cards-semestral");
const cardAnual = document.querySelector("#cards-anual");



mensal.addEventListener("click", function active() {
  mensal.classList.add("active");
  semestral.classList.remove("active");
  anual.classList.remove("active");

  cardMensal.style.display = 'grid';
  cardSemestral.style.display = 'none';
  cardAnual.style.display = 'none';
});

semestral.addEventListener("click", function active() {
  mensal.classList.remove("active");
  semestral.classList.add("active");
  anual.classList.remove("active");

  cardMensal.style.display = 'none';
  cardSemestral.style.display = 'grid';
  cardAnual.style.display = 'none';
});

anual.addEventListener("click", function active() {
  mensal.classList.remove("active");
  semestral.classList.remove("active");
  anual.classList.add("active");

  cardMensal.style.display = 'none';
  cardSemestral.style.display = 'none';
  cardAnual.style.display = 'grid';
});



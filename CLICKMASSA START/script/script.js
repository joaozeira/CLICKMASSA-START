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

/* SLICK */
/* MAIS FUNCIONALIDADES */
$(".content-recursos").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".nav-recursos",
  swipe: false,
  touchMove: false,
  draggable: false,
  infinite: false,
});

$(".nav-recursos").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".content-recursos",
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  swipeToSlide: false,
  touchMove: false,
  draggable: false,
  infinite: false,
});

/* PLANOS */
$(".content-planos").slick({
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
});

/* NAV RECURSOS */
const gatilho = document.querySelector("#gatilho");
const chamada = document.querySelector("#chamada");
const interacao = document.querySelector("#interacao");

gatilho.addEventListener("click", function active() {
  gatilho.classList.add("active");
  chamada.classList.remove("active");
  interacao.classList.remove("active");
});

chamada.addEventListener("click", function active() {
  gatilho.classList.remove("active");
  chamada.classList.add("active");
  interacao.classList.remove("active");
});

interacao.addEventListener("click", function active() {
  gatilho.classList.remove("active");
  chamada.classList.remove("active");
  interacao.classList.add("active");
});

/* NAV PLANOS */
const mensal = document.querySelector("#mensal");
const semestral = document.querySelector("#semestral");
const anual = document.querySelector("#anual");

mensal.addEventListener("click", function active() {
  mensal.classList.add("active");
  semestral.classList.remove("active");
  anual.classList.remove("active");
});

semestral.addEventListener("click", function active() {
  mensal.classList.remove("active");
  semestral.classList.add("active");
  anual.classList.remove("active");
});

anual.addEventListener("click", function active() {
  mensal.classList.remove("active");
  semestral.classList.remove("active");
  anual.classList.add("active");
});

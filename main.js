const burger = document.querySelector(".burger");
const nav = document.querySelector(".main-nav");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
});

$('.corusel').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

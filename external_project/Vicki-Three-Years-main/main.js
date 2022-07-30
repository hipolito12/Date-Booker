var slideup = document.getElementById("slideup");
var neont = document.getElementById("neon_title");
var boton = document.getElementById("boton_en_corazon");
var mage1 = document.getElementById("image1");
var mostrar = document.getElementById("ocultar");
var img2 = document.getElementById("box2");
var image2 = document.getElementById("image2");
var vegetta = document.getElementById("vegetta");
var goku = document.getElementById("sexo");
var defo1 = document.getElementById("img2");
var monacontainer = document.getElementById("monacontainer");
var music = document.getElementById("musica");
var bailes= document.getElementById("bailes");
boton.addEventListener("click", function (e) {
  e.preventDefault();
  neont.style.visibility = "visible";
  image1.classList.add("animate__flipInX");
  image1.style.setProperty("animation-duration", "2s");
  image1.style.visibility = "visible";
  image2.classList.add("animate__flipInX");
  image2.style.setProperty("animation-duration", "2s");
  image2.style.visibility = "visible";

  mostrar.style.visibility = "visible";

  setTimeout(function () {
    slideup.style.visibility = "visible";
    boton.style.visibility = "hidden";
    slideup.classList.add("animate__fadeInUpBig");
    slideup.style.visibility = "visible";
    slideup.style.setProperty("--animate-duration", "1s");
  }, 600);
  setTimeout(function () {
    monacontainer.style.visibility = "visible";
  }, 1000);

  setTimeout(function () {
    vegetta.classList.add("animate__bounceOutRight");
    vegetta.style.setProperty("--animate-duration", "8s");
    vegetta.style.visibility = "visible";
    music.innerHTML="<audio  src='ner.mp3' autoplay ></audio>";
    setTimeout(function () {
      bailes.classList.add("animate__fadeOutUpBig");
      bailes.style.setProperty("--animate-duration", "180s");
      bailes.style.visibility = "visible";

    }, 3000);
  }, 3000);
  setTimeout(function () {
    goku.classList.add("animate__bounceOutLeft");
    goku.style.setProperty("--animate-duration", "9s");
    goku.style.visibility = "visible";
  }, 6000);
});

img2.addEventListener("click", function (e) {
  img2.classList.add("animate__rotateIn");
  img2.style.setProperty("--animate-duration", "1s");

  setTimeout(() => {
    img2.classList.remove("animate__rotateIn");
  }, 1000);

});

mage1.addEventListener("click", function (e) {

  mage1.classList.add("animate__rotateIn");
  mage1.style.setProperty("--animate-duration", "1s");
  setTimeout(() => {
    mage1.classList.remove("animate__rotateIn");
  }, 1000);

});

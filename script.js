var offerBar = document.querySelector(".offer-bar");

document.getElementById("offer-close").addEventListener(
  "click",

  function () {
    offerBar.style.display = "none";
  },
);

var sliderleftbutton = document.getElementById("slider-left-activate");
var sliderrightbutton = document.getElementById("slider-right-activate");
var sliderimage = document.querySelector(".slider-image-container");
var slidermargin = 0;

console.log(sliderleftbutton);

sliderrightbutton.addEventListener(
  "click",

  function () {
    slidermargin = slidermargin + 100;

    if (slidermargin > 200) {
      slidermargin = 0;
      sliderimage.style.transform = `translateX(0vw)`;
    } else {
      sliderimage.style.transform = `translateX(-${slidermargin}vw)`;
    }
  },
);

sliderleftbutton.addEventListener(
  "click",

  function () {
    if (slidermargin == 0) {
      slidermargin = 200;
      sliderimage.style.transform = `translateX(-${slidermargin}vw)`;
    } else {
      slidermargin = slidermargin - 100;
      sliderimage.style.transform = `translateX(-${slidermargin}vw)`;
    }
  },
);

var likebuttons = document.querySelectorAll(".like-button");

likebuttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.src.indexOf("blackheart") > 0) {
      console.log("jkjk");
      e.target.src = "https://errormakesclever.github.io/Nostra-Ecommerce-Js/icons/redheart.png";
    } else {
      e.target.src = "https://errormakesclever.github.io/Nostra-Ecommerce-Js/icons/blackheart.png";
    }
  });
});

window.addEventListener("scroll", function () {
  var elements = this.document.querySelectorAll(".initial-scroll-animate");
  elements.forEach((el) => {
    windowHeight = window.innerHeight;
    console.log(windowHeight);
    var elbound = el.getBoundingClientRect();

    if (windowHeight > elbound.top - 100) {
      el.classList.remove("reveal-scroll-animate");
    }
  });
});

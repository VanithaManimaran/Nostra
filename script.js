var offerBar = document.querySelector(".offer-bar");

document.getElementById("offer-close").addEventListener(
  "click",

  function () {
    offerBar.style.display = "none";
  },
);

// Side navbar toggle
var sideNavActivate = document.getElementById("side-navbar-activate");
var sideNavClose = document.getElementById("side-navbar-close");
var sideNavbar = document.querySelector(".side-navbar");

if (sideNavActivate) {
  sideNavActivate.addEventListener("click", function () {
    sideNavbar.style.marginLeft = "0";
  });
}
window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    sideNavbar.style.marginLeft = "-100%";
  }
});

if (sideNavClose) {
  sideNavClose.addEventListener("click", function () {
    sideNavbar.style.marginLeft = "-100%";
  });
}

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
      e.target.src =
        "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/icons/redheart.png";
    } else {
      e.target.src =
        "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/icons/blackheart.png";
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

context.js;

// Offer bar close
var offerBar = document.querySelector(".offer-bar");
var offerClose = document.getElementById("offer-close");
if (offerClose && offerBar) {
  offerClose.addEventListener("click", function () {
    offerBar.style.display = "none";
  });
}

// Side navbar toggle
var sideNavMenu = document.getElementById("side-navbar-activate");
var sidenavbar = document.querySelector(".side-navbar");
if (sideNavMenu) {
  sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px";
  });
}

var sideNavCloseBtn = document.getElementById("side-navbar-close");
if (sideNavCloseBtn) {
  sideNavCloseBtn.addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-100%";
  });
}

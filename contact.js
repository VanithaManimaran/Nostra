var sideNavMenu = document.getElementById("side-navbar-activate");
var sidenavbar = document.querySelector(".side-navbar");
sideNavMenu.addEventListener("click", function () {
  sidenavbar.style.marginLeft = "0px";
});

document.getElementById("side-navbar-close").addEventListener("click", () => {
  document.querySelector(".side-navbar").style.marginLeft = "-60%";
});

// Offer bar close
var offerBar = document.querySelector(".offer-bar");
var offerClose = document.getElementById("offer-close");
if (offerClose && offerBar) {
  offerClose.addEventListener("click", function () {
    offerBar.style.display = "none";
  });
}
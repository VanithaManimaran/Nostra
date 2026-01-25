// Products data
const products = [
  {
    id: 1,
    name: "Floral Summer Shirt",
    src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f1.jpg",
    desc: "",
    price: 220,
    tags: ["new", "blue", "summer"],
  },
  {
    id: 2,
    name: "Summer Green",
    src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f2.jpg",
    desc: "",
    price: 260,
    tags: ["new", "green", "beach"],
  },
  {
    id: 3,
    name: "Party Floral Shirt",
    src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f3.jpg",
    desc: "",
    price: 399,
    tags: ["old", "red", "party"],
  },
  {
    id: 4,
    name: "Floral Summer Shirt",
    src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f4.jpg",
    desc: "",
    price: 399,
    tags: ["old", "white", "beach"],
  },
  {
    id: 5,
    name: "Beach Shirt",
    src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f5.jpg",
    desc: "",
    price: 579,
    tags: ["old", "white", "beach"],
  },
  {
    id: 6,
    name: "Shirt Party Red",
    src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f6.jpg",
    desc: "",
    price: 579,
    tags: ["old", "red", "party"],
  },
  {
    id: 7,
    name: "Party Floral Shirt",
    src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f3.jpg",
    desc: "",
    price: 399,
    tags: ["old", "red", "party"],
  },
  {
    id: 8,
    name: "Shirt Party Red",
    src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f6.jpg",
    desc: "",
    price: 579,
    tags: ["old", "red", "party"],
  },
  {
    id: 9,
    name: "Floral Summer Shirt",
    src: "https://errormakesclever.github.io/Nostra-Ecommerce-Js/img/products/f1.jpg",
    desc: "",
    price: 220,
    tags: ["new", "blue", "summer"],
  },
];

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
window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    sideNavbar.style.marginLeft = "-100%";
  }
});

var sideNavClose = document.getElementById("side-navbar-close");
if (sideNavClose) {
  sideNavClose.addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-100%";
  });
}

// Render products
var container = document.querySelector(".products");
if (container) {
  products.forEach((product) => {
    var createItem = document.createElement("div");
    createItem.classList.add("product");
    createItem.style.width = "30%";
    createItem.style.marginBottom = "20px";
    createItem.innerHTML = `
            <img style="width: 100%;" class="rounded mb-2" src="${product.src}" alt="${product.name}">
            <h1 class="font-bold text-xl">${product.name}</h1>
            <p class="text-gray-600 text-lg">₹${product.price}</p>
            <tags style="display:none;">${product.tags}</tags>
        `;
    container.append(createItem);
  });
}

// Filter functionality
var filterList = [];
var tags = document.querySelectorAll('input[name="tags"]');

tags.forEach((tag) => {
  tag.addEventListener("change", (e) => {
    if (e.target.checked) {
      filterList.push(e.target.value);
      update();
    } else {
      filterList = filterList.filter((item) => item !== e.target.value);
      update();
    }
  });
});

function update() {
  var productList = document.querySelectorAll(".product");

  for (var i = 0; i < productList.length; i++) {
    var check = false;
    var product = productList[i];
    var temp = product.querySelector("tags").innerHTML;

    const tempFilterArray = temp.split(",");

    filterList.forEach((j) => {
      tempFilterArray.forEach((i) => {
        if (j == i) {
          check = true;
        }
      });
    });

    if (!check && filterList.length > 0) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  }
}

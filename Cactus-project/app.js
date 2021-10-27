/* Show - close nav */
const toggleShow = document.querySelector(".toggle-show")
const navList = document.querySelector(".nav-menu-container")
const toggleClose = document.querySelector(".toggle-close")

toggleShow.addEventListener("click", function(){
    navList.classList.add("show-list")
})

toggleClose.addEventListener("click", function(){
    navList.classList.remove("show-list")
})

/* Products */
const Products = [
    {
    id: 1,
    name: "Christmas Cactus",
    price: "$14.00",
    img: "./img/Christmas-Cactus.jpg"
    },
    {
    id: 2,
    name: "Fairy Castle Cactus",
    price: "$14.00",
    img: "./img/Fairy-Castle-Cactus.jpg"
    },
    {
    id: 3,
    name: "Star Cactus",
    price: "$10.00",
    img: "./img/Star-Cactus.jpg"
    },
    {
    id: 4,
    name: "Feather Cactus",
    price: "$25.99",
    img: "./img/Easter-Cactus.jpg"
    },
    {
    id: 5,
    name: "Parodia",
    price: "$15.99",
    img: "./img/Parodia.jpg"
    },
    {
    id: 6,
    name: "Easter Cactus",
    price: "$16.00",
    img: "./img/Easter-Cactus.jpg"
    }



]

const img = document.getElementById("product-img")
const name = document.getElementById("product-title")
const price = document.getElementById("product-price")

const prevBtn = document.querySelector(".toggle-prev")
const nextBtn = document.querySelector(".toggle-next")

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
    showProduct();
})

function showProduct() {
    const item = Products[currentItem];
    productImg.src = item.img;
    productName.textContent = item.name;
    productPrice.textContent = item.price;
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if (currentItem > Products.length - 1) {
    currentItem = 0;
    }
    showProduct();
})

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
    currentItem = Products.length - 1;
  }
  showProduct();
})





/* scroll */
const navbar = document.getElementById("nav-container")
const topLink = document.querySelector(".top-link")
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
})

//Navigation

function openNav() {
    document.getElementById("myNavbar").style.height = "280px";
}

function closeNav() {
    document.getElementById("myNavbar").style.height = "0";
}


//Carousel

let span = document.getElementsByTagName('span');
let product = document.getElementsByClassName('product');
let productPage = Math.ceil(product.length/4);
let l = 0;
let movePer = 25.70;
let maxMove = 210;


//Mobile view

let mobileView = window.matchMedia("(max-width: 767px)");
if (mobileView.matches) {
    movePer = 50.70;
    maxMove = 510;
}

let rightMover = ()=> {
    l = l + movePer;
    if (product == 1) {l = 0}
    for (const i of product)
    {
        if (l > maxMove) { l = l - movePer;}
        i.style.left = '-' + l + '%';
    }
}

let leftMover = ()=> {
    l = l - movePer;
    if (l<=0) {l=0;}
    for (const i of product)
    {
        if (productPage > 1)
        i.style.left = '-' + l + '%';
    }
}

span[1].onclick = ()=> {rightMover();}
span[0].onclick = ()=> {leftMover();}


//Testimonial Auto Slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("testi-item");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000);
}

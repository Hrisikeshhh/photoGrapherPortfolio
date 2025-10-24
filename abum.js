document.addEventListener("DOMContentLoaded",()=>{

// making album Divs clickable

let firstDiv = document.querySelector(".pic1");
firstDiv.addEventListener("click",()=>{
    window.location.href = "Events&PeoplePhotoshoot.html";
})

let secondDiv = document.querySelector(".pic2");
secondDiv.addEventListener("click",()=>{
    window.location.href = "fashionPhotoshoot.html";
})

let thirdDiv = document.querySelector(".pic3");
thirdDiv.addEventListener("click",()=>{
    window.location.href = "OutdoorTravel.html";
})

let fourthDiv = document.querySelector(".pic4");
fourthDiv.addEventListener("click",()=>{
    window.location.href = "comercial&product.html";
})

let fifthDiv = document.querySelector(".pic5");
fifthDiv.addEventListener("click",()=>{
    window.location.href = "creative&specialty.html";
})
})

  // mobile
let mobile = gsap.matchMedia();

mobile.add("(max-width:800px)",()=>{
let menu = document.querySelector("#menu");
let close = document.querySelector("#close");
let tl1 = gsap.timeline();

let tl = gsap.timeline();
tl.to(".navigationItems",{
   x :"100vw",
   duration:0.4
})



tl.from(".navItem",{
   x:30,
   opacity:0,
   stagger:0.2
})

tl.pause();

menu.addEventListener("click",()=>{
    tl.play();
})

close.addEventListener("click",()=>{
    tl.reverse();
})

})
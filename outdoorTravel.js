document.addEventListener("DOMContentLoaded",()=>{

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

return ()=>{
    tl.kill();
}

})

})
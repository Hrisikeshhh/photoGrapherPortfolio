document.addEventListener("DOMContentLoaded",()=>{

    // making divs clickable

    let categories = document.querySelectorAll(".btn");

    categories.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            localStorage.setItem("photos",
            btn.dataset.id)
            window.location.href = "gallary.html";
        })
    })


    // for mobile screen
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

tl1.from(".box",{
   y:30,
   opacity:0,
   scrollTrigger:{
    scroller:"body",
    trigger:".box",
    scrub:2,
    start:"top 90%",
    end:"top 70%"
   }

})


return()=>{
    tl.kill();
}


})











});
function openImg(img) {
      document.getElementById("lightbox").style.display = "flex";
      document.getElementById("lightboxImg").src = img.src;
    }
    function closeImg() {
      document.getElementById("lightbox").style.display = "none";
    }


    let url = fetch("photos.json");

    url.then((response)=>{
      return response.json();
    })
    .then((data)=>{
       let Picid = localStorage.getItem("photos");
       let pics = data.find(p=> p.id == Picid);

       document.querySelector(".text").textContent = pics.firstPara;
       document.querySelector("#pic1").src = pics.image1;
       document.querySelector("#pic2").src = pics.image2;
       document.querySelector("#pic3").src = pics.image3;
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

});
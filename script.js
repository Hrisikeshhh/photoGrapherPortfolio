document.addEventListener("DOMContentLoaded",()=>{


// client counter


                //  clients Counter

 function animateCount(element, target) {
    let count = 0;
    let step = Math.ceil(target / 100); // speed of increase
    let interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target; // stop at target
        clearInterval(interval);
      }
      element.textContent = count;
    }, 20); // update every 20ms
  }



  // Use IntersectionObserver so it starts when div is visible
  const clientDiv = document.getElementById("ProjectDone");
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv, 1000); // suppose 1500 clients
      observer.disconnect(); // run only once
    }
  });

  observer.observe(clientDiv);



  // Use IntersectionObserver so it starts when div is visible
  const clientDiv1 = document.getElementById("happyClientServed");
  const observer1 = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv1, 850); // suppose 1500 clients
      observer1.disconnect(); // run only once
    }
  });

  observer1.observe(clientDiv1);



  // Use IntersectionObserver so it starts when div is visible
  const clientDiv2 = document.getElementById("creativeDesignDelivered");
  const observer2 = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv2, 3); // suppose 1500 clients
      observer2.disconnect(); // run only once
    }
  });

  observer2.observe(clientDiv2);



          // reviews data taken from json


  fetch("review.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const swiperWrapper = document.querySelector(".swiper-wrapper");

    // Loop through JSON data
    data.forEach((review) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");

      slide.innerHTML = `
        <div class="reviewBox">
          <div class="leftReview">
            <div class="clientPic" style="background-image: url('${review.image}');"></div>
            <h2 class="clientName">${review.name}</h2>
            <div class="stars">${"⭐".repeat(review.stars)}</div>
          </div>
          <div class="rightReview">
            
            <p class="mainReviewPara o">${review.text}</p>
          </div>
        </div>

      `;

      swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper AFTER slides are added
    new Swiper(".mySwiper", {
      effect: "flip",
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  })
  .catch((error) => {
    console.error("Error loading reviews:", error);
  });

  
  // 

var swiper = new Swiper(".mySwiper", {
        effect: "flip",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


// type.js

 var typed = new Typed('#element', {
      strings: ['Photos that not just look good.', '-They feel something.'],
      typeSpeed: 60,
      backSpeed:30,
      backDelay: 30,
      loop: true
    });
     

let mobile = gsap.matchMedia();

mobile.add("(max-width:800px)",()=>{
let menu = document.querySelector("#menu");
let close = document.querySelector("#close");


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






let desktop = gsap.matchMedia();

desktop.add("(min-width:801px)",()=>{

let tl2 = gsap.timeline();
tl2.from(".a",
  {
    y:100,
    stagger:0.3

  }
)

gsap.from(".b",{
  y:150,
  stagger:0.2,
  opacity:0,
  // duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".b",
    scrub:2,
    start:"top 90%",
    end:"top 70%",
  }
})

gsap.from(".c",{
  x:-150,
  opacity:0,
  // duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".c",
    scrub:2,
    start:"top 40%",
    end:"top 10%",
  }
})

gsap.from(".d",{
  x:150,
  opacity:0,
  // duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".d",
    scrub:2,
    start:"top 40%",
    end:"top 10%",
  }
})

gsap.from(".e",{
  y:100,
  opacity:0,
  // duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".e",
    scrub:2,
    start:"top 70%",
    end:"top 50%",
  }
})

tl2.from(".f",{
  y:80,
  opacity:0,
  // duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".f",
    scrub:2,
    start:"top 90%",
    end:"top 70%",
  }
})

tl2.from(".g",{
  y:80,
  opacity:0,
  // duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".g",
    scrub:2,
    start:"top 90%",
    end:"top 70%",
  }
})

gsap.from(".o",{
  y:100,
  stagger:0.2,
  scale:0.5,
  opacity:0,
  // duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".o",
    scrub:2,
    start:"top 90%",
    end:"top 70%",
  }
})


tl2.from(".h",{
  y:80,
  opacity:0,
  // duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".h",
    scrub:2,
    start:"top 90%",
    end:"top 70%",
  }
})

tl2.from(".i",{
  y:80,
  stagger:0.2,
  opacity:0,
  // duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".i",
    scrub:2,
    start:"top 90%",
    end:"top 70%",
  }
})

tl2.from(".j",{
  y:80,
  stagger:0.2,
  opacity:0,
  // duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".j",
    scrub:2,
    start:"top 90%",
    end:"top 70%",
  }
})

tl2.from(".k",{
  y:80,
  stagger:0.2,
  opacity:0,
  // duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".k",
    scrub:2,
    start:"top 90%",
    end:"top 70%",
  }
})

gsap.from(".l",{
  y:100,
  stagger:0.2,
  opacity:0,
  // duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".l",
    scrub:2,
    start:"top 90%",
    end:"top 70%",
  }
})

gsap.from(".n",{
  y:100,
  stagger:0.2,
  opacity:0,
  // duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".n",
    scrub:2,
    start:"top 90%",
    end:"top 70%",
  }
})



gsap.from(".m",{
  y:100,
  scale:0.5,
  opacity:0,
  // duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".m",
    scrub:2,
    start:"top 90%",
    end:"top 70%",
  }
})




})




})
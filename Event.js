document.addEventListener("DOMContentLoaded",()=>{

    
let categories = document.querySelectorAll(".btn");

categories.forEach((box)=>{
     box.addEventListener("click",()=>{
        localStorage.setItem("photos",
            box.dataset.id)
        window.location.href = "gallary.html";
     })
})


})
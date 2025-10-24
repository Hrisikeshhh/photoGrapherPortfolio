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
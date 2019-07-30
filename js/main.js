function photoGalery(options) {
    var galery = document.querySelector(options.galery);
    var bigPicture = galery.querySelector(".big_photo");
    var miniSrc;
    var bigSrc;
    
    galery.onclick = function(e) {
        if(e.target.className == "for_change"){
            miniSrc = e.target.src;
            bigSrc = bigPicture.src;

            e.target.classList.add("hide");
            bigPicture.classList.add("hide");
            setTimeout(function(){
                bigPicture.classList.remove("hide");
            },100);
            setTimeout(function(){
                e.target.classList.remove("hide");
            },200);
            
            e.target.src = bigPicture.src;
            bigPicture.src = miniSrc;
        }
    }

}
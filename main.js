function navbar() {
    const navbar = document.getElementById('navibar');
    var x = navbar.offsetTop;
    const logo = document.getElementById('headerlogo');

    window.onscroll = function(){
        if(window.pageYOffset > x) {
            navbar.classList.remove('navbar');
            navbar.classList.add('navbar-active-scroll');
            logo.style.display = "none";
        } else { 
            navbar.classList.add('navbar'); 
            navbar.classList.remove('navbar-active-scroll');
            logo.style.display = "block";
        }
    }

}

function slider() {
    var slideIndex = 0;
    var slideImg = document.getElementsByClassName('img-slider');
    var slideDot = document.getElementsByClassName('slider-dot');
    const buttonNext = document.querySelector('.button-next');
    const buttonPrev = document.querySelector('.button-prev');

    for(var i=0;i<slideImg.length;i++) {
        slideImg[i].style.display = "none";
    }

    slideImg[slideIndex].style.display = "block";


    buttonNext.addEventListener("click", () =>{
        slideIndex++;
        if (slideIndex > slideImg.length-1) {
            slideIndex=0;
            slideImg[slideImg.length-1].style.display = "none";
            slideImg[slideIndex].style.display = "block";
            slideDot[slideIndex].classList.add("slider-dot-active");
            slideDot[slideImg.length-1].classList.remove("slider-dot-active");
        } else {
            slideImg[slideIndex-1].style.display = "none";
            slideImg[slideIndex].style.display = "block";
            slideDot[slideIndex].classList.add("slider-dot-active");
            slideDot[slideIndex-1].classList.remove("slider-dot-active");
        }
    });

    buttonPrev.addEventListener("click", () => {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slideImg.length-1;
            slideImg[0].style.display = "none";
            slideImg[slideIndex].style.display = "block";
            slideDot[slideIndex].classList.add("slider-dot-active");
            slideDot[0].classList.remove("slider-dot-active");
        } else {
            slideImg[slideIndex].style.display = "block";
            slideImg[slideIndex+1].style.display = "none";
            slideDot[slideIndex].classList.add("slider-dot-active");
            slideDot[slideIndex+1].classList.remove("slider-dot-active");
            }
    });

    slideDot[0].addEventListener("click", () =>{
        slideDot[slideIndex].classList.remove('slider-dot-active');
        slideImg[slideIndex].style.display = "none";
        slideIndex = 0;
        slideDot[slideIndex].classList.add('slider-dot-active');
        slideImg[slideIndex].style.display = "block";
    });

    slideDot[1].addEventListener("click", () =>{
        slideDot[slideIndex].classList.remove('slider-dot-active');
        slideImg[slideIndex].style.display = "none";
        slideIndex = 1;
        slideDot[slideIndex].classList.add('slider-dot-active');
        slideImg[slideIndex].style.display = "block";
    });

    slideDot[2].addEventListener("click", () =>{
        slideDot[slideIndex].classList.remove('slider-dot-active');
        slideImg[slideIndex].style.display = "none";
        slideIndex = 2;
        slideDot[slideIndex].classList.add('slider-dot-active');
        slideImg[slideIndex].style.display = "block";
    });

    setInterval(() => {
        slideIndex++;
        if(slideIndex>slideImg.length-1) {
            slideIndex=0;
            slideImg[slideImg.length-1].style.display = "none";
            slideImg[slideIndex].style.display = "block";
            slideDot[slideIndex].classList.add("slider-dot-active");
            slideDot[slideImg.length-1].classList.remove("slider-dot-active");
        } else {
            slideImg[slideIndex-1].style.display = "none";
            slideImg[slideIndex].style.display = "block";
            slideDot[slideIndex].classList.add("slider-dot-active");
            slideDot[slideIndex-1].classList.remove("slider-dot-active");
        }
    }, 5000);


}
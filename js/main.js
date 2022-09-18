
const navbarImg = document.querySelector('.navbar .img-content'),
      navbar = document.querySelector('.navbar'),
      barsIcon = document.querySelector('.navbar .bars-icon'),
      linksContainer = document.querySelector('.links'),
      links = document.querySelector('.links ul'),
      XmarkIcon = document.querySelector('.links > div'),
      arrowLeft = document.querySelector('.arrow-left'),
      arrowRight = document.querySelector('.arrow-right'),
      slideContainer = document.querySelector('.slides-container'),
      body = document.querySelector('body'),
      coup = document.querySelector('.imgs-container'),
      slider = document.querySelector('.slider'),
      slideOne = document.querySelector('.slide-one'),
      slideTwo = document.querySelector('.slide-two');

window.addEventListener('scroll' , function () {
    if (this.innerWidth > 992) {
        if (this.scrollY > 20) {
            navbarImg.classList.add('navbar-mov')
            navbar.classList.add('navbar-mov')
            navbar.style.background = '#000';
            
        } else {
            navbarImg.classList.remove('navbar-mov')
            navbar.classList.remove('navbar-mov')
            navbar.style.background = 'none';
        }
    } else {
        if (this.scrollY > 20) {
            navbar.style.background = '#000';
        } else {
            navbar.style.background = 'none';
        }
    }
})

function openMenu () {
    linksContainer.classList.add('open');
    links.classList.add('open');
}
function closeMenu () {
    linksContainer.classList.remove('open');
    links.classList.remove('open');
    body.style.paddingLeft = 0;
}

barsIcon.addEventListener('click',openMenu);
XmarkIcon.addEventListener('click',closeMenu);
linksContainer.addEventListener('click' , closeMenu);
links.addEventListener('click',(e) => e.stopPropagation());



/* slider */

arrowRight.addEventListener('click',() => {
    slideContainer.style.left = '-100%';
    arrowRight.style.opacity = '.3'
    arrowLeft.style.opacity = '1'
    slideTwo.classList.add('active');
    slideOne.classList.remove('active');
})
arrowLeft.addEventListener('click',() => {
    slideContainer.style.left = '0';
    arrowRight.style.opacity = '1';
    arrowLeft.style.opacity = '.3'
    slideTwo.classList.remove('active');
    slideOne.classList.add('active');
})

/************** moving cup by moving mouse *************/ 

let direction = "";
let oldx = 0;
let oldy = 0;
let right = 0;
let up = 0;


var mousemovemethod = function (e) {
    
        if (e.pageX > oldx && e.pageY == oldy) {
            direction="right";
        }
        else if (e.pageX == oldx && e.pageY > oldy) {
            direction="down";
        }
        else if (e.pageX == oldx && e.pageY < oldy) {
            direction="up";
        }
        else if (e.pageX < oldx && e.pageY == oldy) {
            direction="left";
        }
    
        if (direction == 'right') {
            right += .1;
            coup.style.right = right + 'px';
        } 
        else if (direction == 'left') {
            right -= .1;
            coup.style.right = right + 'px';
        }
        else if (direction == 'up') {
            up += .1;
            coup.style.top = up + 'px';
        }
        else if (direction == 'down') {
            up -= .1;
            coup.style.top = up + 'px';
        }
    
        oldx = e.pageX;
        oldy = e.pageY;
}

slider.addEventListener('mousemove', mousemovemethod);

/* start some info */

const topLeftImg = document.querySelector('.top-left'),
      topRoghtImg = document.querySelector('.top-right'),
      bottomLeftImg = document.querySelector('.bottom-left'),
      bottomRightImg = document.querySelector('.bottom-right');  

let topImg = 0;
let bottomImg = 0; 
let oldValue = 0;
let newValue = 0;

window.addEventListener('scroll', function () {
        newValue = window.pageYOffset;
        if (this.scrollY >= 900 && this.scrollY <= 1300) {
            
            if (oldValue < newValue) {
                topImg -= 1.5;
            } else if (oldValue > newValue) {
                topImg += 1.5;
            }
            topLeftImg.style.left = topImg + 'px';
            topRoghtImg.style.right = topImg + 'px';
        }
        if (this.scrollY >= 1250 && this.scrollY <= 1750) {
            console.log (oldValue)
            if (oldValue < newValue) {
                console.log("down");
                bottomImg -= 1.5;
            }
             else if (oldValue > newValue) {
                console.log("up");
                bottomImg += 1.5;
            }
            bottomLeftImg.style.left = bottomImg + 'px';
            bottomRightImg.style.right = bottomImg + 'px';
        }
        oldValue = newValue;
})

$('.someInfoSlide').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 922,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      }
    ]
  });



/* start menu*/

const menu = document.querySelector('.menu'),
      imgContainer = document.querySelector('.img-container'),
      allMenuItems = Array.from(document.querySelectorAll('.menu .item')),
      imgContainerIMG = document.querySelector('.img-container img'),
      allItemsSrc = ['images/cup-1.png', 'images/cup-2.png', 'images/cup-3.png', 'images/cup-4.png','images/cup-1.png', 'images/cup-2.png', 'images/cup-3.png', 'images/cup-4.png','images/cup-1.png', 'images/cup-2.png', 'images/cup-3.png', 'images/cup-4.png'];

$('.menu-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
     responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 1
            }
        }
    ]
  });


menu.addEventListener('mousemove', (e) => {

    if (e.clientX <= 500) {
        imgContainer.style.left = 600 + 'px';
    } else {
        imgContainer.style.left = 100 + 'px';
    }
})

allMenuItems.forEach((ele , ind) => {

    ele.addEventListener('mouseenter',() => {
        let img = document.createElement('img');
        img.setAttribute('src',allItemsSrc[ind]);
        imgContainer.appendChild(img)
    })
    ele.addEventListener('mouseleave' , () => {
        imgContainer.children[0].remove()
    })
})


/*start feedback*/

const prevArrow = document.querySelector('.feedback .prev'),
    nextArrow = document.querySelector('.feedback .next');

    console.log (nextArrow)
$('.feedback-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
})
prevArrow.addEventListener('click', function () {
    this.classList.remove('active');
    nextArrow.classList.add('active');
})

nextArrow.addEventListener('click', function () {
    this.classList.remove('active');
    prevArrow.classList.add('active');
})



/* start news*/





$('.news-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
     responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
        }
    ]
  });



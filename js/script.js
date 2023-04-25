//Navbar Hamburger

const dropdownMenu = document.querySelector('.dropdown-menu');
const toggleNavbar = document.querySelector('.toggle-navbar');
const dropdownClose = document.querySelector('.dropdown-close');
const navMenu = document.querySelector('.nav-menu');

dropdownMenu.previousElementSibling.addEventListener('click', function () {
	if(window.innerWidth < 1000) {
		dropdownMenu.classList.add('show');
		toggleNavbar.classList.add('hide');
	}
})

dropdownClose.addEventListener('click', function () {
	if(window.innerWidth < 1000) {
		dropdownMenu.classList.remove('show');
		toggleNavbar.classList.remove('hide');
	}
})


toggleNavbar.addEventListener('click', function () {
	if(window.innerWidth < 1000) {
		navMenu.classList.toggle('show');

		if(navMenu.classList.contains('show')) {
			this.classList.replace('fa-bars', 'fa-x');
		} else {
			this.classList.replace('fa-x', 'fa-bars');
		}
	}
})

$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(300);
    });
    
    smallScreenMenu();
    let temp;
    function resizeEnd(){
        smallScreenMenu();
    }

    $(window).resize(function(){
        clearTimeout(temp);
        temp = setTimeout(resizeEnd, 100);
        resetMenu();
    });
});


const subMenus = $('.sub-menu');
const menuLinks = $('.menu-link');

function smallScreenMenu(){
    if($(window).innerWidth() <= 1000){
        menuLinks.each(function(item){
            $(this).click(function(){
                $(this).next().slideToggle();
            });
        });
    } else {
        menuLinks.each(function(item){
            $(this).off('click');
        });
    }
}

function resetMenu(){
    if($(window).innerWidth() > 1000){
        subMenus.each(function(item){
            $(this).css('display', 'none');
        });
    }
}


//Navbar Ende



//Carousel

$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 6,
        lazyLoad: 'ondemand',
        arrows: true,
        centerMode: true,
        infinite: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,

              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,

              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
  });


  $(document).ready(function(){
    $('.product_carousel').slick({
        slidesToShow: 1 ,
        lazyLoad: 'ondemand',
        arrows: true,
        centerMode: true,
        infinite: true
    });
  });



  // to-top Button

  // Get the button:
let mybutton = document.getElementById("top-btn");


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  //document.body.scrollTop = 0; // For Safari
  //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 



//Shopping Cart addClass removeClass
$('.shopping_cart > a').on('click', function(){
  $('.mini_cart,.body_overlay').addClass('active')
});
$('.mini_cart_close a,.body_overlay').on('click', function(){
  $('.mini_cart,.body_overlay').removeClass('active')
});
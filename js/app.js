window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    var y=document.getElementById("vis");
    if(y.style.display === "inline" ){
      y.style.display="none"
    }
    else{
      y.style.display="inline"
    }
  }
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    dots: false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
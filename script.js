$(document).ready(function(){
  $(window).scroll(function(){
    // scroll-up button show/hide script
    if(this.scrollY > 300){
      $('.scroll-up-btn').addClass("show");
    }else{
      $('.scroll-up-btn').removeClass("show");
    }
  });
  
  // slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });

  // typing text animation script
  var typed = new Typed('#element', {
    strings: ['Designer', 'Java Developer', 'Back-End Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed('#element2', {
    strings: ['Designer', 'Java Developer', 'Back-End Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  //theme toggler
  let themeToggler = document.querySelector(".theme-toggler");
  let toggleBtn = document.querySelector(".toggle-btn");

  toggleBtn.onclick =()=>{
    themeToggler.classList.toggle("active");
  };

  window.onscroll =()=>{
    themeToggler.classList.remove("active");
  };

  document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn)=>{
    btn.onclick =()=>{
      let color = btn.style.background;
      document.querySelector(":root").style.setProperty("--theme-color", color);
    };
  });
});
$(function () {
  /* let $header = $("header");
  let headerHeight = $header.height(); 
  let $subUl = $(".sub");
  let $bgGnb = $(".bg_gnb"); 
  let $gnb = $(".gnb");
  let $hamMob = $("header .menu_right_mob");
  let $subLi = $(".sub > ul > li");  
  let $gnbLi = $(".gnb > ul > li");*/

  /* 
  $header.on("mouseover", function () {
    $(this).addClass("touch");
  });
  $header.on("mouseleave", function() {
    $(this).removeClass("touch");
    
  })
  $gnb.on("mouseover", function () {
    $bgGnb.slideDown(300);
    $subUl.slideDown(300);
  }); 
  $gnb.on("mouseleave", function () {
    $bgGnb.slideUp(300)   
    $subUl.slideUp(300) 
  });

  $(window).on("scroll", function () {
    let i = Math.floor($(this).scrollTop());
    //console.log(i);
    if (headerHeight < i) {
      $header.removeClass("touch");
      $header.addClass("on");            
    }          
  });  
 */

  /* $hamMob.on('click', function() {
    $('header .gnb').stop().animate({
      opacity: 1,
      height: '35vh'
    }).stop().animate({
      opacity: 0,
      height: 0
    })
  }) */

 /*  $hamMob.on('click', function() {
    $gnb.slideToggle(500);     
  }); */
/* 
  $gnbLi.on('click', function() {
    $(this).stop().animate({
      opacity: 1,
      height: '50vh'
    }).stop().animate({
      opacity: 0,
      height: 0
    })
  });  */

 /* $gnbLi.on('click', function() {
    $(this).next($subLi).stop().slideToggle(300);
    $(this).toggleClass('touch').children().removeClass('touch');
    $(this).next($subLi).children($subLi).stop().slideUp(300);
}); */ 

  //modal js
  const ham = document.querySelector(".menu_right_web");  
  const modalBox = document.querySelector(".modalBox");
  const btnClose = document.querySelector(".btnClose");
  
  ham.onclick = () => {
    modalBox.classList.add("open");   
  };
  
  btnClose.onclick = () => {
    modalBox.classList.remove("open");
  };  

  /* $(".text_area").animate({ marginTop: "100px" }, 800);

  let valTxt = document.querySelector(".val_textarea");
  $(valTxt).delay(1000).animate({ marginLeft: "200px" }, 800);

  let valPic = document.querySelector(".val_pic");
  $(valPic).fadeIn(2000)

  let menuUp = document.querySelector(".menu_pic");
  $(menuUp).delay(3000).animate({ marginTop: "-100px" }, 800);

  let heImg = document.querySelector(".head img");
  let diImg = document.querySelector(".director img");
  let heText = document.querySelector(".head_textarea");
  let diText = document.querySelector(".di_textarea");

  $(heImg).delay(4000).animate({ marginLeft: "100px" }, 800);
  $(diImg).delay(4000).animate({ marginRight: "100px" }, 800);
  $(heText).delay(4000).animate({ marginLeft: "-100px" }, 800);
  $(diText).delay(4000).animate({ marginRight: "-100px" }, 800); */

  let hallUp = document.querySelector("#hall");
  $(hallUp).delay(5000).animate({ marginTop: "-100px" }, 800);

  const fbtn = document.querySelector(".etc .family .btn");
  const open = document.querySelector(".etc .family .open");
  const dbtn = document.querySelector(".etc .family .down");
  fbtn.onclick = () => {
    fbtn.classList.toggle("active");
    open.classList.toggle("active");
    dbtn.style.rotate = "180deg";
    /* if (open.includes(active)) {
            dbtn.style.rotate = '180deg' 
        }else {
            dbtn.style.rotate = '90deg' 
        } */
  };

  const hall = document.querySelector("#hall .inner");
  $(hall).animate({marginTop: "-100px"}, 800);

});

console.log('hello');
particlesJS.load('particles-js','particles.json',function(){
  console.log('particles.json loaded...');
});

$(document).ready(function(){

    navoffset = $('nav').offset().top;
    $('#team').addClass('hide');
    $(window).scroll(function(){
      var scrollpos = $(window).scrollTop();
      if(scrollpos >= navoffset){
        $("nav").addClass('navbar-fixed-top');
        $("#team").removeClass('hide');
      }else{
        $("nav").removeClass('navbar-fixed-top');
        $("#team").addClass('hide');
      }
    });
    $('#team').click(function(){
      $('.team-class').addClass('active');
    });
    $('.close').click(function(){
      $('.team-class').removeClass('active');
    });
    //smooth scrolling
    $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });
  //about
  $('.about').show();
  $('.about-btn').click(function(){
    $('.rules').hide();
    $('.contacts').hide();
    if($(".about").css("display")=="none"){
      $(".about").show();
    }
    else{
      $(".about").hide();
    }
  });
  //rules
  $('.rules').hide();
  $('.rule-btn').click(function(){
    $('.about').hide();
    $('.contacts').hide();
    if($(".rules").css("display")=="none"){
      $(".rules").show();
    }
    else{
      $(".rules").hide();
    }
  });
  //contacts
  $('.contacts').hide();
  $('.contacts-btn').click(function(){
    $('.about').hide();
    $('.rules').hide();
    if($(".contacts").css("display")=="none"){
      $(".contacts").show();
    }
    else{
      $(".contacts").hide();
    }
  });
});



    $(document).ready(function(){
       $(".nav-pri > li").each(function(index){
        var t=$(this).find(" > a").text();
        $(this).find(" > a").attr("data-hover",t);
      });
      
      // Fix return Link Register

    $('.menu-mobile').click(function(event){
        event.preventDefault();
        $('.menu-responsive').addClass('active-menu');
        $('.r-overlay').addClass('active-overlay');
        setTimeout(function(){$(".menu-responsive .icon-nav").addClass("fadeInRight");}, 200);
        
      }); 

      // js submenu 2do nivel mario
    function cerrar_submenu(){
      $('.menu-responsive .sub-menu').stop(false).slideUp();
    }
    $('.menu-responsive .menu-item').click(function(event) {
      //event.preventDefault();
        $('.menu-responsive .menu-item').removeClass('active');
        $(this).addClass('active');
        cerrar_submenu();
        $(this).find('.sub-menu').stop(false).slideToggle();
    });
      // fin js submenu 2do nivel mario



      // js submenu 2do nivel
      function cerrar_submenu(){
        $('.menu-responsive .sub-menu').stop(false).slideUp();

      }

    // funcion  para cerrar menu responsive 
    function cerrar_nav() {
      $('.menu-responsive').removeClass('active-menu');
      $('.r-overlay').removeClass('active-overlay');
      $(".menu-responsive .icon-nav").removeClass("fadeInRight");
    };


    $(window).scroll(function(){
        window_y = $(window).scrollTop(); 
        scroll_critical = parseInt($(".header").height()); 
        if (window_y > scroll_critical) { 
           $(".header-neigh").addClass('activo');
        } else {
           $(".header-neigh").removeClass('activo');
        }
    });
    

    //click en boton cerrar y overlay
    $('body').on('click', '.close-nav', function(event) {
      event.preventDefault();
      cerrar_nav();
      cerrar_submenu();
    });
    $('.r-overlay').click(function() {
      cerrar_nav();
      cerrar_submenu();
    });

    $(".icon-mobile").on("click",function(e){
      e.preventDefault();
      var e=$(this);
      e.parent().find(".contact-head").fadeToggle();
      $(".nav-redes-top").hide();
      $(".icon-share2").removeClass("act");
      $(".nav-redes-top > li").each(function(index){
        var t=$(this);
        $(t).removeClass("fadeInRight");
      });
     $(".overlay-tops").toggle();
    });

    $(".overlay-tops").on("click",function(){
      $(".contact-head").fadeOut();
      $("#menu-social-menu").hide();
      $(".icon-share2").removeClass("act");
      $(".nav-redes-top > li").each(function(index){
        var t=$(this);
        $(t).removeClass("fadeInRight");
      });
      $(".overlay-tops").hide();
    });

    var i=50;
    $(".icon-share2").on("click",function(e){
      e.preventDefault();
      var el = $(this);
      $(this).parent().find(".nav-redes-top").hide();
      $(".contact-head").fadeOut();
      if(!$(this).hasClass("act")){
        el.parent().find(".overlay-tops").show();
        $(this).parent().find(".nav-redes-top").show();
         el.parent().find(".nav-redes-top > li").each(function(index){
          var t=$(this);
          i = i + 50;
          setTimeout(function () {
            $(t).addClass("fadeInRight");
          }, i);
         
        });
        el.addClass("act");
      }else{
        el.parent().find(".overlay-tops").hide();
         el.parent().find(".nav-redes-top > li").each(function(index){
          var t=$(this);
          $(t).removeClass("fadeInRight");
        });
         $(".overlay-tops").toggle();
         el.removeClass("act");
      }
      
    });
        // FEATURED PROPERTIES
        var slider2 = $('#content-slider').lightSlider({
            auto: false,
            item: 3,
            loop: true,
            pager: true,
            controls: false,
            speed: 600,
            pause: 3000,
            keyPress: true,
            mode: 'slide',
            responsive: [{
                breakpoint: 1080,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 20,
                }
            }, {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideM2ve: 1,
                    slideMargin: 6,
                }
            }, {
                breakpoint: 481,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }]

        });
        $(document).on('click',"#goToPrevSlide", function() {
            slider2.goToPrevSlide();
        });
        $(document).on('click',"#goToNextSlide", function() {
            slider2.goToNextSlide();
        });

    setTimeout(function () {
      if (location.hash == '#register') {
        $('#login-c').click();
        location.hash = '';
      }   
    }, 1000);
    $(".hide-desk.fa").on("click",function(){
      $("#menu-top-menu").slideToggle();
    });
    // temporary fix for login register modal switch
    $('.triggerRegisterForm').on('click', function (e) {
      setTimeout(function () {
        var switch_to = $('#login-c');
        if (switch_to.length) {
          switch_to.click();
        }
      }, 20);
    });
  });


$(document).ready(function() {
  // Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label'); 
                } else {
                    $parent.removeClass('js-hide-label');   
                }                     
            } 
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } 
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } 
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        });
    } 

});

$(document).ready(function(){
    $('#myTable').DataTable();
    $('#myTable2').DataTable();
    $('#myTable3').DataTable();


});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
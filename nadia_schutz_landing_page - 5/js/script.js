$(document).ready(function() {
    /*sticky navigation*/
    $('.js-section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('stiky');
        }else {
           $('nav').removeClass('stiky'); 
        }
    },{
        offset:'600px;'
    });
    
    /*scroll btns*/ 
    $('.js-scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000)
    });
    $('.js-scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 1000)
    });
    $('.smooth-1').click(function(){
        $('html, body').animate({scrollTop: $('#features').offset().top}, 1000)
    });
    $('.smooth-2').click(function(){
        $('html, body').animate({scrollTop: $('#works').offset().top}, 1000)
    });
    $('.smooth-3').click(function(){
        $('html, body').animate({scrollTop: $('#cities').offset().top}, 1000)
    });
    $('.smooth-4').click(function(){
        $('html, body').animate({scrollTop: $('#plans').offset().top}, 1000)
    });
    
    
    
        /* Navigation scroll */
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
    /*animations on scroll*/
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    },{
    offset:'50%'
    });
    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animated fadeInUp');
    },{
    offset:'50%'
    });
    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animated fadeIn');
    },{
    offset:'50%'
    });
    $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animated pulse');
    },{
    offset:'50%'
    });
    
});























$(document).ready (function() {
    
    new WOW().init();
    
    
    $(".burger-nav").on("click", function(){
        
        $(".container nav ul").toggleClass("open");
        
    });
    
    
    
    /*smooth scrolling*/
    // Cache selectors
var lastId,
    topMenu = $(".nav"),
    topMenuHeight = topMenu.outerHeight()+2,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});


    
    
        /* Scroll on buttons */
    $('.smooth-scroll-1').click(function () {
       $('html, body').animate({scrollTop: $('.container-message').offset().top}, 1000); 
    });
    
    $('.smooth-scroll-2').click(function () {
       $('html, body').animate({scrollTop: $('.container-message').offset().top}, 1000); 
    });
    
    /*animations*/
    
    $('.js-wp-1').waypoint(function(direction) {
       
       $('.js-wp-1').addClass('animated bounceInLeft');
       
    }, {
		offset: '50%'
	});
    
    
    
   $('.js-wp-2').waypoint(function(direction) {
       
       $('.js-wp-2').addClass('animated bounceInRight');
       
   }, {
		offset: '50%'
	});
    
    $('.js-wp-3').waypoint(function(direction) {
       
       $('.js-wp-3').addClass('animated fadeInUp');
       
   }, {
		offset: '50%'
	});
    
    
    /*h1-home*/
$(function () {
    $("#home-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        
    });
});
    /*product-bot-slider*/
    $(function () {
    $("#features-demo").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        
    });
});
    
   
    
    
    
    $(".iphone-btn").delay(2300).animate( {bottom: "+=-3"}, 300);
    $(".iphone-btn").delay(300).animate( {top: "+=-3"}, 100);
    
    
    
    
});
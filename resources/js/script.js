$(document).ready(function() {
    
// Navigation scroll 
    $(function() {
     var offset = -47;    
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top + offset
            }, 700);
            return false;
          }
        }
      });
    });
    
    
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $('.sticky').slideUp(200);
   } else {
      $('.sticky').slideDown(200);
   }
   lastScrollTop = st;
});
    

    
    
//animations
    $('.js--button').waypoint(function(direction){
        $('.js--button').addClass('animated ');
    }, {
        offset: '50%'
});
    $('.js--arrow').waypoint(function(direction){
        $('.js--arrow').addClass('animated bounceInUp');
    }, {
        offset: '100%'
});
    $('.js--social').waypoint(function(direction){
        $('.js--social').addClass('animated jackInTheBox');
    }, {
        offset: '80%'
});
    $('.js--aboutleft').waypoint(function(direction){
        $('.js--aboutleft').addClass('animated rotateInDownLeft');
    }, {
        offset: '80%'
});
    $('.js--aboutright').waypoint(function(direction){
        $('.js--aboutright').addClass('animated rotateInDownRight');
    }, {
        offset: '80%'
});
});







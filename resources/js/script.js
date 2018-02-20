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
});

if (window.location.hash)
    scroll(0,0);
// takes care of some browsers issue
setTimeout(function(){scroll(0,0);},1);

$(function(){
//your current click function
$('.scroll').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop:$($(this).attr('href')).offset().top + 'px'
    },1000,'swing');
});

// if we have anchor on the url (calling from other page)
if(window.location.hash){
    // smooth scroll to the anchor id
    $('html,body').animate({
        scrollTop:$(window.location.hash).offset().top + 'px'
        },1000,'swing');
    }
});




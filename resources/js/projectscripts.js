$(document).ready(function() {
    $('.js--prog').waypoint(function(direction) {
        $('.js--prog').addClass('animated slideInRight');
    }, {
        offset: '70%'
});
    $('.js--myweb').waypoint(function(direction) {
        $('.js--myweb').addClass('animated slideInLeft');
    }, {
        offset: '70%'
});
});
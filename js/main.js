$('#mobile-menu-button').click(function() {
    $('#mobile-menu-display').slideToggle(300);
});

$('#home-mobile-menu-button').click(function() {
    $('#home-mobile-menu-display').slideToggle(300);
    $('.fullscreen-center-logo').toggleClass('hide');
});
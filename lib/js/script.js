// Jquery custom
$(document).ready(function() {
    $('.active-sign-in').hover(function() {
        $(this).addClass('animate__animated animate__swing animate__infinite infinite');
    }, function() {
        $(this).removeClass('animate__animated animate__swing');
    });

    $(window).scroll(function(){
        if( $(window).scrollTop() > 50 ){
            $('.video-text').css('display', 'flex').addClass('animate__animated animate__fadeInUp');
            
        } else {
            $('.video-text').css('display', 'none').removeClass('animate__animated animate__fadeInUp');
        }
        
        // Show btn comeback
        var btn = $('#comeback');

        $(window).scroll(function() {
            if ($(window).scrollTop() > 250) {
                // btn.show().addClass('animate__animated animate__bounceInUp');
                btn.show().addClass('animate__animated animate__bounceInUp');
            } else {
                btn.hide().removeClass('animate__animated animate__bounceInUp');
            }
        });
        // End

        
    });
});
$(document).ready(function(){
     $('.toTop').hide();
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.toTop').fadeIn();
        } else {
            $('.toTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.toTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});
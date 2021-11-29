$(document).ready(function() {
    $('.intern-faq-ques').click(function() {
        if($(this).next().next().css('display') === 'none') {
            $(this).next().next().slideDown('fast');
            $(this).find('span').css('transform', 'rotate(90deg)');
        }
        else {
            $(this).next().next().slideUp('fast');
            $(this).find('span').css('transform', 'rotate(0deg)');
        }
    });

    $('.intern-faq-tab').click(function() {
        if(!$(this).hasClass('active-tab')) {
            $('.active-tab').removeClass('active-tab');
            $(this).addClass('active-tab');
            var index = $('.intern-faq-tab').index(this);
            var content = $('.intern-faq-content:eq('+index+')');
            $('.active-tab-content').fadeOut('fast', function() {
                content.fadeIn('fast');
                $('.active-tab-content').removeClass('active-tab-content');
                content.addClass('active-tab-content');
            });
        }
    });
});
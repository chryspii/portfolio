setTimeout(function() {
    $('.bar').each(function() {
        var bar = $(this);
        bar.find('.progress').css('width', bar.attr('data-percent') + '%' );
    });
}, 500);
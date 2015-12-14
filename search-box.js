(function($) {
    var $window = $(window),
        $html = $('#search');

    function resize() {
        if ($window.width() < 350) {
            return $html.addClass('mobile');
        }

        $html.removeClass('mobile');
    }
    
    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);

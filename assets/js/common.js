$(document).ready(function () {

  $('.js-counter').click(function (e) {
    var dir = $(this).data('dir');
    var $input = $(this).siblings('input');
    var val = parseInt($input.val());
    if (dir == 'down' && val > 1) {
      $input.val(val-1);
    } else {
      if (dir == 'up') {
        $input.val(val+1);
      }
    }
  });
  
  // Applies to all select boxes that have no value for their first option
  $("select").on('change', function() {
      $(this).toggleClass("empty", $.inArray($(this).val(), ['', null]) >= 0);
  }).trigger('change');
  
});

$(window).load(function(){
  
  $(".sticky").each(function(i){
    var parent = $(this).data('sticky-parent');
    $(this).stick_in_parent({
      parent: $(parent)
    });
  });
  
  (function ($) {

    $(function(){

      var $win = $(window),
          $header = $('header'),
          $main = $('main'),
          className = 'fixed',
          height = $header.outerHeight();

      fixHeader();

      $win.on('scroll', fixHeader);

      function fixHeader() {
        var scrollTop = $win.scrollTop();
        if (scrollTop >= height) {
          if (!$header.hasClass(className)) {
            $header.addClass(className);
            $main.attr('style', 'margin-top: '+height+'px');
//            $header.hide().attr('style', 'display: none; top: -60px').addClass(className).show();
//            $header.animate({top: "0"});
          }
        } else {
          $header.removeClass(className)
          $main.attr('style', 'margin-top: 0');
        }
      }

    });

  })(window.jQuery);

});


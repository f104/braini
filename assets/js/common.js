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
//  $("select").on('change', function() {
//      $(this).toggleClass("empty", $.inArray($(this).val(), ['', null]) >= 0);
//  }).trigger('change');
  
});

$(window).load(function(){
  
  $(".sticky").each(function(i){
    var parent = $(this).data('sticky-parent');
    $(this).stick_in_parent({
      parent: $(parent),
      offset_top: 50
    });
  });
  
  $('input[type=file], input[type=radio], input[type=checkbox], select').styler();
  
  (function ($) {

    $(function(){

      var $win = $(window),
          $header = $('header'),
          $main = $('main'),
          className = 'fixed',
          shift = 100, 
          height = $header.outerHeight(),
          progress = false;

      fixHeader();

      $win.on('scroll', fixHeader);

      function fixHeader() {
        if (progress) {
          setTimeout(fixHeader, 400);
          return;
        }
        var scrollTop = $win.scrollTop();
        if (scrollTop >= height + shift) {
          if (!$header.hasClass(className)) {
            progress = true;
            $header.addClass(className);
            $main.attr('style', 'margin-top: '+height+'px');
            $header.attr('style', 'top: -60px');
            $header.animate({top: "0"}, 200, function(){
              progress = false;
            });
          }
        } else {
          if ($header.hasClass(className)) {
            progress = true;
            $header.animate({top: "-60px"}, 200, function(){
              $header.removeClass(className);
              $main.attr('style', 'margin-top: 0');
              progress = false;
            });
          }
        }
      }

    });

  })(window.jQuery);

});


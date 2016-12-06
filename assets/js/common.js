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
  
//  $(".sticky").each(function(i){
//    var parent = $(this).data('sticky-parent');
//    $(this).stick_in_parent({
//      parent: $(parent),
//      offset_top: 50
//    });
//  });
  
//  $(".sticky").pin({
//    containerSelector: ".row",
//    padding: {top: 50, bottom: 55}
//  })
  
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

(function ($) {
  
  $(function(){
    
    moveFilters = {

      init: function() {
        $filters = $('.filters');
        $wrapper = $filters.parents($filters.data('sticky-parent'));
        fHeight = $filters.outerHeight(true);
        fOffset = $filters.offset().top;
        wrHeight = $wrapper.outerHeight(true);
        wrOffset = $wrapper.offset().top;
        wHeight = $(window).height();
        fixedMenuHeight = 60;
        useAnimate = true;

        $('.filters').css({position: 'absolute', top: 0});
        this.move();
      },

      animate: function(top) {
        if (useAnimate) {
          $filters.stop().animate({'top': top}, 300);
        } else {
          $filters.css({'top': top});
        }
      },

      move: function() {
        var scrollTop = $(window).scrollTop();
        var curTop = parseInt($filters.css('top'));

        if (scrollTop + wHeight > fOffset + fHeight) {
          var top = scrollTop - fOffset - (fHeight - wHeight);
          if (top > curTop && scrollTop + wHeight < wrOffset +wrHeight) {
            this.animate(top);
          } else if (curTop > scrollTop - wrOffset + fixedMenuHeight) {
            this.animate(scrollTop - wrOffset + fixedMenuHeight);
          }
        } else { 
          if (scrollTop >= fOffset + fixedMenuHeight ) {
            var top = scrollTop - fOffset + fixedMenuHeight;
            if (top < curTop) {
              this.animate(top);
            }
          } else {
            this.animate(0);
          }
        }
      }

    };

    $(window).load(function(){
      moveFilters.init();
    });

    $(window).on('scroll', function(){
      clearInterval(filtersCounter);
      var filtersCounter = setTimeout(moveFilters.move(), 100);
    });
    
  });

})(window.jQuery);
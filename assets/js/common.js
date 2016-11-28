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
  
});

$(window).load(function(){
  $(".sticky").each(function(i){
    var parent = $(this).data('sticky-parent');
    $(this).stick_in_parent({
      parent: $(parent)
    });
  });
});
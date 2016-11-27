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
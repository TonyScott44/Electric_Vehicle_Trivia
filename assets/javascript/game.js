$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').delay(1000).fadeIn(4000);
    
    $('.video-foreground').delay(13000).fadeOut(3000);
    
    $('.video-foreground').click(function() {
      event.preventDefault();
  
      newLocation = this.href;
      $('body').fadeOut(1000, newPage);
    });
  
    function newPage() {
      window.location = newLocation;
    }

    $('#bgVideo').delay(16000).hide(0);
    $('#cImage').hide(0).delay(16000).fadeIn(2000);
});
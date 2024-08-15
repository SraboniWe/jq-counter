$(document).ready(function(){
// counterUp 
$('.counter').counterUp({
    delay: 10,
    time: 1000
    
});
//simple demo
$('#demo').counto(12345, 5000);


//
$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });





  


})
$(function() {

  $('.nav-toggle').on('click', function(){
    $('#menu').toggleClass('active');
  });

  $('.userInput').focus(function () {
    $(this).parent().addClass('focus');
  }).blur(function () {
    if($(this).val()===''){
      $(this).parent().removeClass('focus');
    }
  })
});

$(document).ready(function(){
  $("#homebtn").click(function(){
    $("#home").slideDown(1000);
    $("#product").hide();
  })
  $("#productbtn").click(function(){
    $("#product").slideDown(1000);
    $("#home").hide();
  })
})

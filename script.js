$(document).ready(function(){
  $("#homebtn").click(function(){
    $("#home").slideDown(800);
    $("#product").hide();
    $("#about").hide();
    $("#blog").hide();
    $("#career").hide();
  })
  $("#productbtn").click(function(){
    $("#product").slideDown(800);
    $("#home").hide();
    $("#about").hide();
    $("#blog").hide();
    $("#career").hide();
  })
  $("#aboutbtn").click(function(){
    $("#about").slideDown(800);
    $("#home").hide();
    $("#product").hide();
    $("#blog").hide();
    $("#career").hide();
  })
  $("#blogbtn").click(function(){
    $("#blog").slideDown(800);
    $("#home").hide();
    $("#product").hide();
    $("#about").hide();
    $("#career").hide();
  })
  $("#careerbtn").click(function(){
    $("#career").slideDown(800);
    $("#home").hide();
    $("#product").hide();
    $("#about").hide();
    $("#blog").hide();
  })
})

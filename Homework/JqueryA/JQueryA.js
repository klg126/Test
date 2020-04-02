$(document).ready(function(){

  $("#ingredients").click( function(){
    $(".gridContent div:first-child ul").toggle();
  });

  $("#nutinfo").click(function(){
    $(".gridContent div:nth-child(3) ul").hide();
  });

  $("footer").mouseover(function(){
      $("footer p").html("Hope you enjoy!");
  });

  $("footer").mouseleave(function() {
    $("footer p").html("Stay tuned for more recipes coming soon!!");
  });

  $("#recipe").click(function(){
    $(".gridContent div:nth-child(2)").css("background-color", "rgb(242, 162, 222)");
  });



});

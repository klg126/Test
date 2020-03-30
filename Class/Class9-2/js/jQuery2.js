$(document).ready( function(){


$("#_hide").click(function(){
  $(".gridContent div:first-child p").hide();
});

$("#_show").click(function(){
  $(".gridContent div:first-child p").show();
});

$("#_toggle").click( function(){
  $(".gridContent div:nth-child(2) p").toggle();
});

$("#_html").click(function() {
  $(".gridContent div:nth-child(3) p").html("Hello <b>World</b>!");
});

$("#_css").click(function(){
  $(".box").css("background-color", "lightblue");
});


$("footer").mouseover(function(){
    $("footer p").html("Yeah! You're over me");
});

$("footer").mouseleave(function() {
  $("footer p").html("Comeback...=(");
});



// --------------------- Debug #4 ----------------------------

// Here goes your jQuery :

$("#HideMe").click(function(){
  $(".smallGridBug div:first-child p").hide();
});

$("#ShowMe").click(function(){
  $(".smallGridBug div:first-child p").show();
});

$("#ToggleMe").click(function(){
  $(".smallGridBug div:nth-child(2) p").toggle();
});

$("#HTMLMe").click(function(){
  $(".smallGridBug div:nth-child(3) p").html("Hi There");
});

$("#CSSMe").click(function(){
  $(".smallGridBug div:first-child p").css("color", "pink");
  $(".smallGridBug div:nth-child(2) p").css ("font-family", "sans-serif");
  $(".smallGridBug div:nth-child(3) p").css("background-color", "lightblue");
  $(".smallGridBug div:nth-child(4) p").css({"font-family": "serif","background-color": "pink"});
});


});

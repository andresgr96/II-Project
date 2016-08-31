
var cSharpTrack = 0;
var JavaTrack = 0;
var phpTrack = 0;
var rubytrack = 0;

$("#first-question").submit(function(event) {
  event.preventDefault();
  var radio1 = $("input:radio[class=first-answer]:checked").val();

  if (radio1 === "front") {
    cSharpTrack++;
    $("#first-question").hide();
    $("#second-question").show(); }
  else {
    $("#first-question").hide();
    $("#second-question").show(); }
});

$("#second-question").submit(function(event) {
  event.preventDefault();
  var radio2 = $("input:radio[class=second-answer]:checked").val();

  if (radio2 === "lots") {
    cSharpTrack++;
    $("#second-question").hide();
    $("#third-question").show(); }
  else if (radio2 === "normal") {
    phpTrack++;
    $("#second-question").hide();
    $("#third-question").show(); }
  else {
    JavaTrack++;
    rubytrack++;
    $("#second-question").hide();
    $("#third-question").show(); }
});

$("#third-question").submit(function(event) {
  event.preventDefault();
  var radio3 = $("input:radio[class=third-answer]:checked").val();

  if (radio3 === "larger") {
    cSharpTrack++;;
    phpTrack++;
    $("#third-question").hide();
    $("#fourth-question").show(); }
  else if (radio3 === "small") {
    JavaTrack++;
    rubytrack++;
    $("#third-question").hide();
    $("#fourth-question").show(); }
  else {
    JavaTrack++;
    $("#third-question").hide();
    $("#fourth-question").show(); }
});

$("#fourth-question").submit(function(event) {
  event.preventDefault();
  var radio4 = $("input:radio[class=fourth-answer]:checked").val();

  if (radio4 === "web") {
    cSharpTrack++;
    rubytrack++;
    phpTrack++;
    $("#fourth-question").hide();
    $("#fifth-question").show(); }
  else {
    JavaTrack++;
    $("#fourth-question").hide();
    $("#fifth-question").show();
  }
});

$("#fifth-question").submit(function(event) {
  event.preventDefault();
  var radio5 = $("input:radio[class=fifth-answer]:checked").val();
  if (radio5 === "philladelphia") {
    $("#fifth-question").hide();
    $("#header").hide();
    $(".header").hide();
    $("#trackPHP").slideToggle(); }
  else {
    $("#fifth-question").hide();
    $("#header").hide();
    $(".header").hide();
    if ((cSharpTrack > JavaTrack) && (cSharpTrack > rubytrack) && (cSharpTrack > phpTrack)) {
      $("#CSharpTrack").slideToggle(); }
    else if ((rubytrack > JavaTrack) && (rubytrack > cSharpTrack) && (rubytrack > phpTrack)) {
      $("#trackRuby").slideToggle(); }
    else if ((phpTrack > JavaTrack) && (phpTrack > rubytrack) && (phpTrack > cSharpTrack)) {
      $("#trackPHP").slideToggle(); }
    else {
      $("#JavaTrack").slideToggle(); }}
});

$(".reload").click(function(){
  location.reload();
})

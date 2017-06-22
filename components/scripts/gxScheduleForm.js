
var $ = require('jquery');

var butt = document.getElementById("activetab");
var mutt = document.getElementById("monTable");

butt.addEventListener('click', function() { alert("This is annoying"); $('.colMon').removeClass("hidden"); }, false);
mutt.addEventListener('click', function() { alert("Monday Heading"); $('.colMon').addClass("hidden"); }, false);
//var mondays = document.querySelectorAll(".colMon");

//for (var i=0; i<mondays.length;i++) {
//    mondays[i].addEventListener('click', function() {alert("Welcome to mondays"); }, false);
//}
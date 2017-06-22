
var $ = require('jquery');

var butt = document.getElementById("activetab");

butt.addEventListener('click', function() { alert("This is annoying"); }, false);

var mondays = document.querySelectorAll(".colMon");

for (var i=0; i<mondays.length;i++) {
    mondays[i].addEventListener('click', function() {alert("Welcome to mondays"); }, false);
}
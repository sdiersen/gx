$ = require 'jquery'
do fill = (item = 'The most creative mindes in Art') ->
	$('.tagline').append "#{item}"
fill
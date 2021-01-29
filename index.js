function randomColour() {
	var randomPallete = ["#949cdf","#f6ecf0","#cd5d7d","#ffb357","#b9f0ff"];
	return randomPallete[Math.floor(Math.random()*5)];
	};

window.setInterval(function() {
	$(".n").css("color",randomColour());
	$(".o").css("color",randomColour());
	$(".w").css("color",randomColour());
	$(".sign").css("color",randomColour());
}, 150);

function randomStar() {
	var randomPic = [".star1",".star2",".star3",".star4",".star5"];
	return randomPic[Math.floor(Math.random()*5)];
};

window.setInterval(function() {
	$(randomStar()).fadeToggle();
},300);
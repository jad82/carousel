$(function() { 
	console.log ('DOM gotowy, można działać dalej');
	var carouselList = $("#carousel ul");
	function showNext () {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	};
	function moveFirstSlide () {
		var firstItem = carouselList.find("li:first"); 
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

	function showPrevious () {
		moveLastSlide();
		carouselList.animate({'marginLeft': 0}, 500);
	};

	function moveLastSlide () {
		var firstItem = carouselList.find("li:first"); 
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
	};

	//setInterval(showNext, 3000);
	var nextButton = $("#next");
  	var prevButton = $("#prev");
	
	nextButton.click(function (){
		showNext();
	});
	prevButton.click (function (){
		showPrevious();
	});
});

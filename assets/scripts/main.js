//using TweenLite.set() takes care of all vendor-prefixes
TweenLite.set(".card__holder", {perspective:2500});
TweenLite.set(".card", {transformStyle:"preserve-3d"});
TweenLite.set(".back", {rotationY:-180});

$(".button--flip").on('click',
  function() {
  	if( $(this).hasClass("is-front") ) {
		TweenLite.to($(".card__holder").find(".card"), 1.2, {rotationY:180, ease:Back.easeOut}),
    	$(this).removeClass("is-front").addClass("is-back"),
    	$(".button--image").removeClass("is-active").addClass("is-disabled"),
    	$(".button--text").removeClass("is-disabled").addClass("is-active"); 
	} else if( $(this).hasClass("is-back") ) {
		TweenLite.to($(".card__holder").find(".card"), 1.2, {rotationY:0, ease:Back.easeOut}),
    	$(this).removeClass("is-back").addClass("is-front"),
    	$(".button--image").removeClass("is-disabled").addClass("is-active"),
    	$(".button--text").removeClass("is-active").addClass("is-disabled");
	}
  }
);
var cardHeight = $(".card__image").height();
var cardWidth = $(".card__image").width();
cardSize = function () {
	console.log( cardWidth + " --- " + cardHeight);
	$(".card, .card__face").height(cardHeight).width(cardWidth);
	$(".card__holder").height(cardHeight);
	resizeCheck();
};

resizeCheck = function () {
	$(".card__image").attr({
	    callback: function (e) {
	        var curHeight = $(this).height();            
	        if (cardHeight !== curHeight) {
	        	cardHeight = $(".card__image").height();
				cardWidth = $(".card__image").width();
				$(".card, .card__face").height(cardHeight).width(cardWidth);
				$(".card__holder").height(cardHeight);
	           alert(cardHeight + " --- " + cardWidth);
	        }            
	    }
	});
};

// $(".button--image").on('click', function(){
// 	$(".card__image").height(450);
// 	resizeCheck();
// });

cardSize();
resizeCheck();
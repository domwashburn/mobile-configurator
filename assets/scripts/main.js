//using TweenLite.set() takes care of all vendor-prefixes
TweenLite.set(".card__holder", {perspective:2500});
TweenLite.set(".card", {transformStyle:"preserve-3d"});
TweenLite.set(".back", {rotationY:-180});
TweenLite.set(".text-fields", {opacity:0});
TweenLite.set(".text-fields__input-group", {opacity:0, y: 0, yPercent:-150, scale: 0.95});
//TweenLite.set(".text-fields__label", {opacity:0, y: 0, yPercent:-100});
TweenLite.set(".app__keyboard", {y:0, yPercent:100});

var fieldsHeight = $(".text-fields").height();


$(".button--flip").on('click',
  function() {
  	if( $(this).hasClass("is-front") ) {
		TweenLite.to($(".card__holder").find(".card"), 1.2, {rotationY:180, ease:Back.easeOut}),
    	$(this).removeClass("is-front").addClass("is-back"),
    	$(".button--image").removeClass("is-active").addClass("is-disabled"),
    	$(".button--text").removeClass("is-active").addClass("is-disabled"); 
	} else if( $(this).hasClass("is-back") ) {
		TweenLite.to($(".card__holder").find(".card"), 1.2, {rotationY:0, ease:Back.easeOut}),
    	$(this).removeClass("is-back").addClass("is-front"),
    	$(".button--image").removeClass("is-disabled").addClass("is-active"),
    	$(".button--text").removeClass("is-disabled").addClass("is-active");
	}
  }
);
$(".button--text").on('click',
  function() {
  	if ($(this).hasClass("is-editing")) {

  	} else if ($(this).hasClass("is-not-editing") && $(this).hasClass("is-active") ) {
  		TweenLite.to($(".app__controls"), 1, { opacity:0,  ease:Power3.easeOut}),
  		TweenLite.to($(".app__keyboard"), 1.2, {yPercent: 0,   ease: Power3. easeInOut}),
  		TweenLite.to($(".card__holder"), .3, { opacity:0,/* height:0,*/   ease: Power3. easeInOut}).delay(.7),
  		TweenLite.to($(".text-fields"), 2, { opacity:1,   ease: Power3. easeInOut}),
  		TweenLite.set($(".app__keyboard").removeClass("is-hidden").addClass("is-visible")),
  		TweenLite.set($(".card__holder").removeClass("is-visible").addClass("is-hidden")).delay(1),
  		TweenLite.set($(".text-fields").removeClass("is-hidden").addClass("is-visible")),
      TweenMax.staggerTo($(".text-fields__input-group"), .4, { opacity:1, yPercent: 0, scale: 1,  ease: Power3. easeOut}, .35).delay();
  	}
  }
);
$(".button--confirm-text").on('click',
  function() {
      TweenLite.set($(".card__holder").removeClass("is-hidden").addClass("is-visible")).delay(.5),
  		TweenLite.to($(".card__holder"), 1, { opacity:1, /*height: fieldsHeight,*/   ease: Power3. easeInOut}).delay(1),
      
      TweenLite.to($(".text-fields"), 0, { opacity:0, height:0,  ease: Power3. easeInOut}),
  		
  		TweenLite.to($(".app__controls"), 2, { opacity:1,  ease: Power3 .easeOut}).delay(.8),

  		TweenLite.to($(".app__keyboard"), 1.2, { yPercent: 100, ease: Power3. easeInOut}),
      TweenMax.staggerTo($(".text-fields__input-group"), .4, { opacity:0, yPercent: 0, scale: .9,  ease: Power3. easeOut}, .35);
      TweenLite.set($(".text-fields").removeClass("is-visible").addClass("is-hidden"));
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
//using TweenLite.set() takes care of all vendor-prefixes
TweenLite.set(".card__holder", {perspective:2500});
TweenLite.set(".card", {transformStyle:"preserve-3d"});
TweenLite.set(".back", {rotationY:-180});
TweenLite.set(".text-fields", {opacity:0});
TweenLite.set(".text-fields__input-group", {opacity:0, scale: 0.8});
TweenLite.set("image-gallery", {opacity:0});
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
$(".button--image").on('click',
  function() {
      showImageSelect();
  }
);
$(".the-image").on('click',
  function() {
      hideImageSelect();
      $(".card--front .card__image").attr("src", "assets/images/card-image.jpg");
  }
);
$(".button--text").on('click',
  function() {
  	if ($(this).hasClass("is-not-editing") && $(this).hasClass("is-active") ) {
      showTextEditor();
  	}
  }
);
$(".button--confirm-text").on('click', function() {
  hideTextEditor();
  $(".card--front .card__image").attr("src", "assets/images/card-done.jpg");
  $(".text-fields").removeClass("is-visible").addClass("is-hidden");
  $(".button--approve").attr("href", "done.html");
});
var showCard = function() {
  $(".card__holder").removeClass("is-hidden").addClass("is-visible");
  TweenLite.to($(".card__holder"), 1, { opacity:1, /*height: fieldsHeight,*/   ease: Power3. easeInOut}).delay(1)
};
var hideCard = function() {
  TweenLite.set($(".card__holder").removeClass("is-visible").addClass("is-hidden")).delay(1),
  TweenLite.to($(".card__holder"), .3, { opacity:0,/* height:0,*/   ease: Power3. easeInOut}).delay(.7)
};
var showAppControls = function() {
  $(".app__controls").removeClass("is-hidden").addClass("is-visible");
  TweenLite.to($(".app__controls"), 2, { opacity:1,  ease: Power3 .easeOut}).delay(.8)
};
var hideAppControls = function() {
  TweenLite.to($(".app__controls"), 1, { opacity:0,  ease:Power3.easeOut})
};
var showTextFields = function() {
  TweenLite.to($(".app__keyboard"), 1.2, {yPercent: 0,   ease: Power3. easeInOut}),
  TweenLite.to($(".text-fields"), 2, { opacity:1,   ease: Power3. easeInOut}),
  TweenLite.set($(".app__keyboard").removeClass("is-hidden").addClass("is-visible")),
  TweenLite.set($(".text-fields").removeClass("is-hidden").addClass("is-visible")),
  TweenMax.staggerTo($(".text-fields__input-group"), .6, { opacity:1, scale: 1,  ease: Power2. easeOut}, .2).delay();
};
var hideTextFields = function() {
  TweenLite.to($(".app__keyboard"), 1.2, { yPercent: 100, ease: Power3. easeInOut}),
  TweenMax.staggerTo($(".text-fields__input-group"), .6, { opacity:0, scale: .8,  ease: Power2. easeOut}, .2),
  TweenLite.to($(".text-fields"), 0, { opacity: 0,  ease: Power3. easeInOut});
};
var showImageGallery = function() {
  TweenLite.to($(".image-gallery"), 2, { opacity:1,   ease: Power3. easeInOut}),
  TweenLite.set($(".image-gallery").removeClass("is-hidden").addClass("is-visible"))
};
var hideImageGallery = function() {
  TweenLite.set($(".image-gallery").removeClass("is-visible").addClass("is-hidden")),
  TweenLite.to($(".image-gallery"), 2, { opacity:0,   ease: Power3. easeInOut});
};

var showTextEditor = function() {
  hideCard();
  hideAppControls();
  showTextFields();
}
var hideTextEditor = function() {
  showCard();
  showAppControls();
  hideTextFields();
}
var showImageSelect = function() {
  hideCard();
  hideAppControls();
  showImageGallery();
}
var hideImageSelect = function() {
  showCard();
  showAppControls();
  hideImageGallery();
}

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

cardSize();
resizeCheck();
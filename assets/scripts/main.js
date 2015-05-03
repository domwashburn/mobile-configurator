//using TweenLite.set() takes care of all vendor-prefixes
TweenLite.set(".card__holder", {perspective:2500});
TweenLite.set(".card", {transformStyle:"preserve-3d"});
TweenLite.set(".back", {rotationY:-180});

$(".button--flip").on('click',
  function() {
  	if( $(this).hasClass("is-front") ) {
		TweenLite.to($(".card__holder").find(".card"), 1.2, {rotationY:180, ease:Back.easeOut}),
    	$(this).removeClass("is-front").addClass("is-back");
	} else if( $(this).hasClass("is-back") ) {
		TweenLite.to($(".card__holder").find(".card"), 1.2, {rotationY:0, ease:Back.easeOut}),
    	$(this).removeClass("is-back").addClass("is-front");
	}
  }
);
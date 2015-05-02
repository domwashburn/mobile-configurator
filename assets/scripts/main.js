//using TweenLite.set() takes care of all vendor-prefixes
TweenLite.set(".card__holder", {perspective:1500});
TweenLite.set(".card", {transformStyle:"preserve-3d"});
TweenLite.set(".card--back", {rotationY:-180});
TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});

$(".button--flip.is-front").hover(
  function() {
    TweenLite.to($(".card__holder").find(".card"), 1.2, {rotationY:180, ease:Back.easeOut});
  },
  function() {
    TweenLite.to($(".card__holder").find(".card"), 1.2, {rotationY:0, ease:Back.easeOut});  
  }
);

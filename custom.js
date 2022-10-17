$('body').on('mouseenter', '#ar-map-toggle', function(e) {
  e.preventDefault();
  $(".ar-map-container").addClass("ar-map-container--show");
});

$('body').on('mouseleave', '#ar-map-toggle', function(e) {
  e.preventDefault();
  $(".ar-map-container").removeClass("ar-map-container--show");
});

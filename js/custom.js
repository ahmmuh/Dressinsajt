$(document).ready(function () {
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  $(".navbar-nav ul a").each(function () {
    if (this.href === path) {
      $(this).addClass("active");
      console.log($(this).addClass("active"));
    }
  });

  (function () {
    var gallery = $(".gallery-images .img-fluid");
    $.each(gallery, function (i, image) {
      var newImage = image;
      $(newImage).mouseover(function () {
        $(newImage).addClass("animate__animated animate__pulse");
      });
    });
  })();
});

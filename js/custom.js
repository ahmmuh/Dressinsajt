$(function () {
  //add animation to gallery images
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

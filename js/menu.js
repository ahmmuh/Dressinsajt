$(function () {
  var cardCol = $(".header-boxes .row .col  ");

  $(cardCol).mouseover(function () {
    $(cardCol).addClass("animate__animated animate__pulse");
  });

  var gallery = $(".img-fluid");
  $.each(gallery, function (i, image) {
    var newImage = image;
    $(newImage).mouseover(function () {
      $(newImage).addClass("animate__animated animate__pulse");
    });
  });
});

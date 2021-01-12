$(document).ready(function () {
  $("ul.navbar-nav > li").click(function (e) {
    $("ul.navbar-nav > li").removeClass("active");
    $(this).addClass("active");
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

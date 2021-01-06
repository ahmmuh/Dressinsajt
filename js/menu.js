var navContainer = document.getElementById("menu-list");
var navLink = navContainer.getElementsByClassName("nav-link");
for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("clcik", function () {
    console.log(i);
    var currentLink = document.getElementsByClassName("active");
    currentLink[0].className = currentLink[0].className.replace("active", "");
    this.className += " active";
  });
}

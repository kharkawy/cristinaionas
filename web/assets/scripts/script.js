var navButton = document.getElementsByClassName("navbar-toggler")[0];
var nav = document.getElementsByClassName("navbar-collapse")[0];
var body = document.getElementsByTagName("body")[0];

navButton.addEventListener("click", () => {
  if (!nav.classList.contains("show")) {
    body.style.overflowY = "hidden";
  } else {
    body.style.overflowY = "scroll";
  }
});

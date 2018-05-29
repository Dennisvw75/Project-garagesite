const hover = document.querySelectorAll('.main-nav__link');

hover.addEventListener("mouseover", function (e) {
  e.target.style.color = 'yellow';
});
setTimeout(function () {
  event.target.style.color = '';
}, 500);
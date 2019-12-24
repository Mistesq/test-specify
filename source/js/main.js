var mainNav = document.querySelectorAll('.page-footer__main-info');
var head = document.querySelector('.page-header__content');
var navToggle = document.querySelectorAll('.m-drawer__content-toggle');
var headToggle = document.querySelectorAll('.page-header__menu-toggle');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var menuButton = document.querySelector('.m-drawer__content-toggle');

const headHandler = () => {
  if (head.classList.contains('closed')) {
    head.classList.remove('closed');
    head.classList.add('opened');
  }
  else {
    head.classList.add('closed');
    head.classList.remove('opened');
  }
};

headToggle.forEach(function (toggle) {
  toggle.addEventListener('click', headHandler);
});

const handlerMenu = () => {
  var elem = event.target;
  var parent = elem.parentNode;

  if (parent.classList.contains('closed')) {
    parent.classList.remove('closed');
    parent.classList.add('opened');
  }
  else {
    parent.classList.add('closed');
    parent.classList.remove('opened');
  }
};

navToggle.forEach(function (item) {
  item.addEventListener('click', handlerMenu);
});

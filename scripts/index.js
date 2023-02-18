const menu = $('.menu');
const menuCloseBtn = $('.close_menu');
const overlay = $('.overlay');

$('.header__button_menu').on('click', function() {
  overlay.fadeIn();
  menu.animate({
    top: 0,
  });

  menuCloseBtn.one('click', closeMenu);
  overlay.one('click', closeMenu);
});

const form = $('.form');
const formCloseBtn = $('.close_form');

form.on('submit', function(event) {
  event.preventDefault();
});

$('.button').on('click', function() {
  overlay.fadeIn(100, function() {
    form.fadeIn('slow');
  });

  form.one('submit', closeForm);
  formCloseBtn.one('click', closeForm);
  overlay.one('click', closeForm);
});

function closeMenu() {
  overlay.fadeOut();
  menu.animate({
    top: '-500px',
  });
};

function closeForm() {
  form.fadeOut('fast', function() {
    overlay.fadeOut(100);
  });
};

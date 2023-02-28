const menu = $('.header__menu--js');
const menuCloseBtn = $('.header__close_menu--js');
const overlay = $('.overlay--js');

$('.header__button_menu--js').on('click', function() {
  overlay.fadeIn();
  menu.animate({
    top: 0,
  });

  menuCloseBtn.one('click', closeMenu);
  overlay.one('click', closeMenu);
});

const form = $('.form--js');
const formCloseBtn = $('.form__close--js');

form.on('submit', function(event) {
  event.preventDefault();
});

$('.banner__order--js').on('click', function() {
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
    top: '-600px',
  });
};

function closeForm() {
  form.fadeOut('fast', function() {
    overlay.fadeOut(100);
  });
};

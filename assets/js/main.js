const btnToggle = document.querySelector('.header__toggle');
const menu = document.querySelector('.header__menu-list');

btnToggle.addEventListener('click', function() {
	menu.classList.toggle('header__menu-list-show-menu');
});

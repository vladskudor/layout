const burger = document.querySelectorAll('#burger');
const menu = document.querySelectorAll('nav');
burger[0].onclick = function() {
	menu[0].classList.toggle('nav-action');
};
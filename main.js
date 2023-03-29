const burger = document.querySelectorAll('#burger');
const menu = document.querySelectorAll('nav');

burger[0].onclick = function () {
    menu[0].classList.toggle('nav-action');
};

window.addEventListener('scroll', function(e) {
    var header = document.querySelectorAll('header');
    if(scrollY => 100) {
    	header[0].style.transition = '.5s';
        header[0].style.background = '#031921';
    }
    if(scrollY <= 100) {
    	header[0].style.transition = '.5s';
        header[0].style.background = 'none';
    }
});


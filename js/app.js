(function () {
    const header = document.querySelector('.header2');
    window.onscroll = () => {
    	if (window.pageYOffset > 739 & window.pageYOffset <= 2150){
    		header.classList.add('header2_fixed');
    	}
    	else{
    		header.classList.remove('header2_fixed');
    	}
    }
 }());

//Burger handler
(function () {
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.header_nav');
	const menuCloseItem = document.querySelector('.header__nav-close');
	
	burgerItem.addEventListener('click',() => {
		menu.classList.add('header_nav_active');
	});

	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header_nav_active');
	});

}());

//Mobile accordion footer
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
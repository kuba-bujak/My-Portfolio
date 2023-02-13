// Navigation

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-nav');

const menuLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
	hamburger.classList.remove('active');
	navMenu.classList.remove('active')
}))

$(function () {
	$(document).scroll(function () {
	  var $nav = $(".navigation");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

	  const scrollY = window.pageYOffset;
	  sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 200;
		const sectionId = current.getAttribute('id');
		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector(`li a[href*=${sectionId}]`).classList.add('active');
		} else {
			document.querySelector(`li a[href*=${sectionId}]`).classList.remove('active');
		}
	  })
	});
 });







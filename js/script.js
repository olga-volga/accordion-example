"use strict";

window.addEventListener('DOMContentLoaded', () => {

	const heading = document.querySelector('.accordion-item__heading'),
		  dropText = document.querySelector('.accordion-item__text'),
		  symbol = document.querySelector('.accordion__symbol');

	function toggleDropContent() {
		dropText.classList.toggle('show');
		heading.classList.toggle('active');

		if (dropText.classList.contains('show')) {
			symbol.innerHTML = '&minus;';
		} else {
			symbol.innerHTML = '&plus;';
		}
		
	}

	heading.addEventListener('click', toggleDropContent);

});
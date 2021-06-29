"use strict";

window.addEventListener('DOMContentLoaded', () => {

	const heading = document.querySelectorAll('.accordion-item__heading'),
		  dropText = document.querySelectorAll('.accordion-item__text'),
		  symbol = document.querySelectorAll('.accordion__symbol');

	function showDropContent(i) {
		dropText[i].classList.toggle('show');
		heading[i].classList.toggle('active');

		if (dropText[i].classList.contains('show')) {
			symbol[i].innerHTML = '&minus;';
		} else {
			symbol[i].innerHTML = '&plus;';
		}	
	}

	heading.forEach((item, i) => {
		item.addEventListener('click', (e) => {
			if (e.target && e.target.classList.contains('accordion-item__heading')) {
				if (e.target == item) {
					showDropContent(i);
				}
			}
		});
	});

});
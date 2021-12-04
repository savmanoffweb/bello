"use strict";

/* burger menu */
const menuBtn = document.querySelector(".burger-button");
const menu = document.querySelector(".menu");
const btnElements = document.querySelectorAll(".burger-button__line");

menuBtn.addEventListener("click", function() {
	menu.classList.toggle("menu--open");
	btnElements.forEach(element => {
		element.classList.toggle("burger-button__line--active");
	});
	document.body.classList.toggle("hidden")
})
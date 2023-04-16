const swiper = new Swiper('.swiper', {
	// Optional parameters

	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar

});

const checkbox = document.getElementById("checkbox");
const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");

// додаємо обробник події для зміни стану чекбоксу
checkbox.addEventListener("change", function () {
	if (this.checked) {
		// якщо чекбокс вибраний, показуємо блок1 та ховаємо блок2
		block1.style.display = "block";
		block2.style.display = "none";
	} else {
		// якщо чекбокс не вибраний, показуємо блок2 та ховаємо блок1
		block1.style.display = "none";
		block2.style.display = "block";
	}
});

const checkbox1 = document.getElementById("checkbox1");
const block11 = document.getElementById("block11");
const block21 = document.getElementById("block21");

// додаємо обробник події для зміни стану чекбоксу
checkbox1.addEventListener("change", function () {
	if (this.checked) {
		// якщо чекбокс вибраний, показуємо блок1 та ховаємо блок2
		block11.style.display = "block";
		block21.style.display = "none";
	} else {
		// якщо чекбокс не вибраний, показуємо блок2 та ховаємо блок1
		block11.style.display = "none";
		block21.style.display = "block";
	}
});







const iconMenu = document.querySelector('.menu__icon')
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body')
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	})
}


let isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
	body.classList.add('touch');
	let arrow = document.querySelectorAll('.arrow');
	for (i = 0; i < arrow.length; i++) {
		let thisLink = arrow[i].previousElementSibling;
		let subMenu = arrow[i].nextElementSibling;
		let thisArrow = arrow[i];

		thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function () {
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
} else {
	body.classList.add('mouse');
}


const btnUp = {
	el: document.querySelector('.btn-up'),
	show() {

		this.el.classList.remove('btn-up_hide');
	},
	hide() {

		this.el.classList.add('btn-up_hide');
	},
	addEventListener() {

		window.addEventListener('scroll', () => {

			const scrollY = window.scrollY || document.documentElement.scrollTop;

			scrollY > 400 ? this.show() : this.hide();
		});

		document.querySelector('.btn-up').onclick = () => {

			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
}
btnUp.addEventListener();






const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

// Кнопки - Открыть Модалку
modalButtons.forEach(function (item) {
	item.addEventListener('click', function () {
		const modalId = this.dataset.modalButton;
		const modal = document.querySelector('#' + modalId);
		modal.classList.remove('hidden');
		document.body.classList.add('lock');

		// Находим внутри открываемой модалки блок .modal-window и запрещаем ему передавать клики "наверх"
		modal.querySelector('.modal-window').addEventListener('click', function (e) {
			e.stopPropagation();
		});
	})
})

// Кнопки - Закрыть Модалку
modalClosebuttons.forEach(function (item) {
	item.addEventListener('click', function () {
		const modal = this.closest('[data-modal]');
		modal.classList.add('hidden');
		document.body.classList.remove('lock');
	})
})

// Закрытие модалок по фейду
allModals.forEach(function (item) {
	item.addEventListener('click', function () {
		this.classList.add('hidden');
		document.body.classList.remove('lock');
	});
});


const checkbox3 = document.getElementById("checkbox3");
const block13 = document.getElementById("block13");
const block23 = document.getElementById("block23");

// додаємо обробник події для зміни стану чекбоксу
checkbox3.addEventListener("change", function () {
	if (this.checked) {
		// якщо чекбокс вибраний, показуємо блок1 та ховаємо блок2
		block13.style.display = "block";
		block23.style.display = "none";
	} else {
		// якщо чекбокс не вибраний, показуємо блок2 та ховаємо блок1
		block13.style.display = "none";
		block23.style.display = "block";
	}
});


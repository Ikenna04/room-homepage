const prev = document.querySelectorAll('.change-icons li:first-child'),
	next = document.querySelectorAll('.change-icons li:last-child'),
	heros = document.querySelectorAll('.hero > li'),
	navLinks = document.querySelectorAll('.nav-links'),
	menuIcons = document.querySelectorAll('.menu-icons');

let a = 0;

const showNav = () => {
	navLinks.forEach(e => {
		e.classList.toggle('show');
	});
};

const changeHero = () => {
	heros.forEach(e => {
		e.classList.remove('show');
	});
	heros[a].classList.add('show');
};

const prevHero = () => {
	a == 0 ? (a = 2) : a--;
	changeHero();
};

const nextHero = () => {
	a < 2 ? a++ : (a = 0);
	changeHero();
};

next.forEach(e => {
	e.addEventListener('click', nextHero);
});

prev.forEach(e => {
	e.addEventListener('click', prevHero);
});

menuIcons.forEach(e => {
	e.addEventListener('click', showNav);
});

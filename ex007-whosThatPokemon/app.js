//MOVEMENT ANIMATION HAPPEN
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//ITEMS
const pokemon = document.querySelector('.pokemon img');

//MOVING ANIMATION EVENT
container.addEventListener('mousemove', e => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//ANIMATE IN
container.addEventListener('mouseenter', e => {
	card.style.transition = 'nome';
	//POPUT
	pokemon.style.transform = 'translateZ(150px)';
});

//ANIMATE OUT

container.addEventListener('mouseleave', e => {
	card.style.transition = 'all 0.5s ease';
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	//POPBACK
	pokemon.style.transform = 'translateZ(0px)';
});

//QUESTION

const gardevoir = document.querySelector('input');
const answer = document.querySelector('.answer');
const button = document.querySelector('button');

gardevoir.focus();
gardevoir.value = '';
answer.textContent = '';

button.addEventListener('click', e => {
	if (gardevoir.value == 'Gardevoir') {
		answer.classList.remove('error');
		answer.textContent = 'Gardevoir';
		pokemon.setAttribute('src', 'Gardevoir.png');
	} else {
		answer.classList.add('error');
		answer.textContent = 'Try Again';
	}
	gardevoir.focus();
	gardevoir.value = '';
});

const g = document.querySelector('.g');
const o = document.querySelector('.o');
const p = document.querySelector('.p');
const green = document.querySelector('.green');
const orange = document.querySelector('.orange');
const pink = document.querySelector('.pink');

g.addEventListener('click', () => {
    green.style.opacity = '1';
    green.style.transform = 'rotate(0deg)';
    pink.style.opacity = '0';
    pink.style.transform = 'rotate(-90deg)';
    orange.style.opacity = '0';
    orange.style.transform = 'rotate(-90deg)';
});

o.addEventListener('click', () => {
    orange.style.opacity = '1';
    orange.style.transform = 'rotate(0deg)';
    pink.style.opacity = '0';
    pink.style.transform = 'rotate(-90deg)';
    green.style.opacity = '0';
    green.style.transform = 'rotate(-90deg)';
});

p.addEventListener('click', () => {
    pink.style.opacity = '1';
    pink.style.transform = 'rotate(0deg)';
    green.style.opacity = '0';
    green.style.transform = 'rotate(-90deg)';
    orange.style.opacity = '0';
    orange.style.transform = 'rotate(-90deg)';
});

// document.querySelector('h3');
// console.log(document.querySelector('h3'));
// console.log(document.querySelector('.h3-segundoTitulo'));
// console.log(document.querySelector('#parrafo'));
// console.log(document.getElementById('parrafo'));

// console.log(document.querySelectorAll('h3'));

const parrafo = document.querySelector('#parrafo');
parrafo.textContent = 'Texto desde JavaScript con <b>textContent</b>';
parrafo.innerHTML = 'Texto con innerHTML, permite colocar <b>etiquetas</b> HTML';

// Agregar clases específicas
parrafo.classList.add('clase-js', 'parrafo-importante');
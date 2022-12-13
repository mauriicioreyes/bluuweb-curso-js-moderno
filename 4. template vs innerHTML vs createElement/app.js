const lista = document.querySelector('#lista');
const arrayLista = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];

// Método createElement
// const fragment = document.createDocumentFragment();
// arrayLista.forEach(item => {
//     const li = document.createElement('li');
//     li.classList.add('list');
//     const b = document.createElement('b');
//     b.textContent = 'Nombre: ';
//     li.appendChild(b);
//     const span = document.createElement('span');
//     span.classList.add('text-danger');
//     span.textContent = item;
//     li.appendChild(span);
//     console.log(li);
//     fragment.appendChild(li);
// });
// lista.appendChild(fragment);


// Método innerHTML
// document.createDocumentFragment no acepta el innerHTML
// let fragment = '';
// arrayLista.forEach(item => {
//     fragment += `
//         <li class="list">
//             <b>Nombre: </b> <span class="text-danger">${item}</span>
//         </li>
//     `;
// });
// lista.innerHTML = fragment;


// Método Template 
const template = document.getElementById('template-li').content;
console.log(template);
const fragment = document.createDocumentFragment();

arrayLista.forEach(item => {
    // template.querySelector('.text-danger')
    template.querySelector('.list span').textContent = item;

    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
});

lista.appendChild(fragment);
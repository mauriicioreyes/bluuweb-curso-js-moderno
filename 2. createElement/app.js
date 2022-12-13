const lista = document.getElementById('lista');
console.log(lista);

// const li = document.createElement('li');
// li.textContent = 'primer elemento';
// lista.appendChild(li);

const arrayElement = ['primer <b>elemento</b>', 'segundo elemento', 'tercer elemento'];

// arrayElement.forEach(item => {
//     console.log(item);
//     const li = document.createElement('li');
//     li.textContent = item;
//     lista.appendChild(li);
// });

// Implementando  Template String
arrayElement.forEach(item => {
    lista.innerHTML += `<li>${item}</li>`;
});

// ⚠ AMBAS OPCIONES GENERARN REFLOW ⚠
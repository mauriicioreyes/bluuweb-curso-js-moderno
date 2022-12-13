const lista = document.getElementById('lista');
console.log(lista);

const arrayItem = ['item 1', 'item 2', 'item 3'];

const fragment = document.createDocumentFragment();
// const fragment = new DocumentFragment();

arrayItem.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;

    const childNode = fragment.firstChild;
    console.log(item, childNode);
    fragment.insertBefore(li, childNode);

    // fragment.appendChild(li);
    // console.log(fragment);
});

lista.appendChild(fragment);

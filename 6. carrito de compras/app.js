const cards = document.getElementById('cards')
const items = document.getElementById('items');
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
// console.log(templateCard);

const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
// console.log({cards, items, footer, templateCard, templateFooter, templateCarrito});
// console.log(templateCard)
// console.log(templateCarrito)
const fragment = document.createDocumentFragment()

// Colección de objetos
let carrito = {}

document.addEventListener('DOMContentLoaded', (e) => {
    fetchData()
});

cards.addEventListener('click', e => {
    addCarrito(e)
})

// Leer elementos del JSON
const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        // console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}


const pintarCards = data => {
    // console.log(data)
    data.forEach(producto => {
        // console.log(producto)
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute('src', producto.thumbnailUrl)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id
        
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
    console.log(cards)
}

const addCarrito = e => {
    // console.log(e.target)
    if (e.target.classList.contains('btn-dark')) {
        // console.log(e.target.parentElement)
        setCarrito(e.target.parentElement)

    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    // console.log(objeto)
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}
    pintarCarrito()  
    // console.log(producto, carrito)
}

// const pintarCarrito = () => {
//     console.log(carrito);
//     Object.values(carrito).forEach(producto => {


//         // templateCarrito.querySelector('th').textContent = producto.id
//         // templateCarrito.querySelectorAll('td')[0].textContent = producto.title
//         // templateCarrito.querySelectorAll()
//     })
    
// }

const pintarCarrito = () => {
    console.log(carrito);
    Object.values(carrito).forEach(producto => {
        items.innerHTML = ''
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
        
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment);
}
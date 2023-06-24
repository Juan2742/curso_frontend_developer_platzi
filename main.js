const menuEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu');

const arrow = document.querySelector('.arrow')
const shoppingCart = document.querySelector('.shopping_cart')
const orders = document.querySelector('.product-detail')

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleorders);
arrow.addEventListener('click', toggleorders);

function toggleDesktopMenu() {
    const isOrdersClosed = orders.classList.contains('inactive');
    
    if (!isOrdersClosed) {
        orders.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isOrdersClosed = orders.classList.contains('inactive');
    
    if (!isOrdersClosed) {
        orders.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}
function toggleorders() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    orders.classList.toggle('inactive');
}

const productList = []

productList.push({
    name: 'Acoustic Guitar',
    price: '36,24',
    image: './images/guitar.jpg'
})

productList.push({
    name: 'Violin',
    price: '72,70',
    image: './images/violin.jpg'
})

productList.push({
    name: 'Piano',
    price: '184,09',
    image: 'https://images.pexels.com/photos/2960891/pexels-photo-2960891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})


/*                              LA MEJOR EN SEGURIDAD:
function renderProducts(arrays) {
    for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const productImage = document.createElement('img');
    productImage.classList.add('product-image');
    productImage.setAttribute('src', product.image);
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerHTML = '$ ' + product.price
    const productName = document.createElement('p');
    productName.innerHTML = product.name

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('p');
    productInfoFigure.innerHTML = product.name;
    const productInfoImageCart = document.createElement('p');
    productInfoImageCart.setAttribute('src', product.image);

    productInfoFigure.appendChild(productInfoImageCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard)
    }
}
*/

/*
<div class="product-card"><img src="./images/guitar.jpg" alt="guitar" class="product-image"><div class="product-info"><div><p>$36,24</p><p>Acoustic Guitar</p></div><figure><img src="./icons/bt_add_to_cart.svg" alt="add"></figure></div></div>
                ABAJO VA A ESTAR UNA FORMA RESUMIDA PERO NO ES LA MEJOR POR SEGURIDAD
*/

function renderProducts(array) {
    for (product of array) {
        const htmlCards = '<div class="product-card"><img src="'+ product.image + '" alt="image" class="product-image"><div class="product-info"><div><p>$' + product.price + '</p><p>' + product.name + '</p></div><figure><img src="./icons/bt_add_to_cart.svg" alt="add"></figure></div></div>'
    
        cardsContainer.innerHTML += htmlCards
    }
}

renderProducts(productList)
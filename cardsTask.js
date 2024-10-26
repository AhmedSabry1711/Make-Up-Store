// Array of products
let simpleProducts = [
    {
        title: "Essence Mascara Lash Princess",
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    },
    {
        title: "Eyeshadow Palette with Mirror",
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
    },
    {
        title: "Powder Canister",
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
    },
    {
        title: "Red Lipstick",
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
    },
    {
        title: "Red Nail Polish",
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
    },
    {
        title: "Essence Mascara Lash Princess",
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    },
    {
        title: "Eyeshadow Palette with Mirror",
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
    },
    {
        title: "Powder Canister",
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
    },
    {
        title: "Red Lipstick",
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
    },
    {
        title: "Red Nail Polish",
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
    }
];

let productsContainer = document.querySelector('.products');

simpleProducts.map(function(product) {
    let productCard = document.createElement('div');
    productCard.classList.add("product-card")
    productCard.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <h4>${product.title}</h4><br><button>buy <i class="fa-solid fa-cart-shopping"></i></button>`;
    productsContainer.appendChild(productCard);
});

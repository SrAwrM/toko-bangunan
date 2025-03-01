// Slider
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function moveSlide(step) {
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Produk Berdasarkan Kategori
function filterCategory(category) {
    const products = document.querySelectorAll('.product-list .product');
    products.forEach(product => {
        if (category === 'semua' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Navigasi Geser Produk
function scrollProducts(direction, category) {
    const container = document.querySelector(`.product-list.${category}`);
    if (container) {
        container.scrollBy({ left: direction * 300, behavior: 'smooth' });
    }
}

// Tambahkan produk secara dinamis
const productsData = [
    { name: "Lampu LED", category: "elektrik", image: "assets/images/lampu.jpg" },
    { name: "Kabel Listrik", category: "elektrik", image: "assets/images/kabel.jpg" },
    { name: "Kabel Listrik", category: "elektrik", image: "assets/images/kabel.jpg" },
    { name: "Kabel Listrik", category: "elektrik", image: "assets/images/kabel.jpg" },
    { name: "Kabel Listrik", category: "elektrik", image: "assets/images/kabel.jpg" },
    { name: "Kabel Listrik", category: "elektrik", image: "assets/images/kabel.jpg" },
    { name: "Kabel Listrik", category: "elektrik", image: "assets/images/kabel.jpg" },
    { name: "Kabel Listrik", category: "elektrik", image: "assets/images/kabel.jpg" },
    { name: "Semen", category: "material", image: "assets/images/semen.jpg" },
    { name: "Batu Bata", category: "material", image: "assets/images/bata.jpg" },
    { name: "Palu", category: "alat", image: "assets/images/palu.jpg" },
    { name: "Gergaji", category: "alat", image: "assets/images/gergaji.jpg" }
];

function loadProducts() {
    const categories = ['elektrik', 'material', 'alat'];
    categories.forEach(category => {
        const container = document.querySelector(`.product-list.${category}`);
        if (container) {
            container.innerHTML = "";
            productsData.filter(product => product.category === category).forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <button>Tambah ke Keranjang</button>
                `;
                container.appendChild(productCard);
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", loadProducts);

// Slider
document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelector(".slides");
    const slideItems = document.querySelectorAll(".slide");
    const totalSlides = slideItems.length;

    function moveSlide(step) {
        slideIndex = (slideIndex + step + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));
});


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

// Tambahkan produk secara dinamis dengan deskripsi dan harga
const productsData = [
    { name: "Lampu LED", category: "elektrik", image: "assets/images/lampu.jpg", price: "Rp 50.000", description: "Lampu hemat energi." },
    { name: "Kabel Listrik", category: "elektrik", image: "assets/images/kabel.jpg", price: "Rp 20.000", description: "Kabel berkualitas tinggi." },
    { name: "Semen", category: "material", image: "assets/images/semen.jpg", price: "Rp 80.000", description: "Semen kuat dan tahan lama." },
    { name: "Batu Bata", category: "material", image: "assets/images/bata.jpg", price: "Rp 2.000", description: "Batu bata merah terbaik." },
    { name: "Palu", category: "alat", image: "assets/images/palu.jpg", price: "Rp 30.000", description: "Palu besi berkualitas." },
    { name: "Gergaji", category: "alat", image: "assets/images/gergaji.jpg", price: "Rp 45.000", description: "Gergaji tajam dan kuat." }
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
                    <p>${product.description}</p>
                    <p><strong>${product.price}</strong></p>
                    <button>Tambah ke Keranjang</button>
                `;
                container.appendChild(productCard);
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", loadProducts);

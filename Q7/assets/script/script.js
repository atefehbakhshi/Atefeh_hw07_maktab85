'use strict'
const products = document.querySelectorAll('.product');
const productSummary = document.querySelector('.product-summary');
let productImage = document.querySelector('.product-image');
let productName = document.querySelector('.product-name');
let productPrice = document.querySelector('.product-price');
let productVideo = document.querySelector('.product-video');
let productLists = [
    {
        id: 'Acer-Chromebook-CB3-131-C3SZ',
        name: 'Acer Chromebook CB3-131-C3SZ',
        image: 'assets/images/Acer-Chromebook-CB3-131-C3SZ.png',
        price: '$228',
        video: 'assets/video/acer.mp4',
    },
    {
        id: 'ASUS-F556UA-AB32',
        name: 'ASUS F556UA-AB32',
        image: 'assets/images/ASUS-F556UA-AB32.png',
        price: '$1,454',
        video: 'assets/video/asus.mp4',
    },
    {
        id: 'Lenovo-Flex-4-2-in-1',
        name: 'Lenovo Flex 4 2-in-1',
        image: 'assets/images/Lenovo-Flex-4-2-in-1.png',
        price: '$754',
        video: 'assets/video/lenovo.mp4',
    },
    {
        id: 'ASUS-VivoBook',
        name: 'ASUS VivoBook',
        image: 'assets/images/ASUS-VivoBook.png',
        price: '$499',
        video: 'assets/video/asus.mp4',
    },
];
products.forEach(item => {
    item.onclick = () => {
        let product = productLists.find(elem => elem.id === item.id);
        productImage.src = product.image;
        productVideo.src = product.video;
        productName.innerText = product.name;
        productPrice.innerText = product.price;
        document.querySelector('.hero').style.display = 'none'
        document.querySelector('.product-introduction').style.display = 'flex'
    }
})

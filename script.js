// JavaScript เพื่อสลับสินค้าและบริการแนะนำ

document.addEventListener("DOMContentLoaded", function () {
    const productSlider = document.querySelector(".products ul");
    const serviceSlider = document.querySelector(".services ul");

    const products = [
        {
            image: "product1.jpg",
            name: "ชื่อสินค้าที่ 1",
            description: "รายละเอียดสินค้าที่ 1"
        },
        {
            image: "product2.jpg",
            name: "ชื่อสินค้าที่ 2",
            description: "รายละเอียดสินค้าที่ 2"
        },
        // เพิ่มรายการสินค้าเพิ่มเติม
    ];

    const services = [
        {
            name: "บริการ 1",
            description: "รายละเอียดบริการ 1"
        },
        {
            name: "บริการ 2",
            description: "รายละเอียดบริการ 2"
        }
        // เพิ่มรายการบริการเพิ่มเติม
    ];

    let currentProductIndex = 0;
    let currentServiceIndex = 0;

    function showNextProduct() {
        currentProductIndex = (currentProductIndex + 1) % products.length;
        updateProductSlide();
    }

    function showPreviousProduct() {
        currentProductIndex = (currentProductIndex - 1 + products.length) % products.length;
        updateProductSlide();
    }

    function showNextService() {
        currentServiceIndex = (currentServiceIndex + 1) % services.length;
        updateServiceSlide();
    }

    function showPreviousService() {
        currentServiceIndex = (currentServiceIndex - 1 + services.length) % services.length;
        updateServiceSlide();
    }

    function updateProductSlide() {
        const product = products[currentProductIndex];
        const productSlide = document.createElement("li");
        productSlide.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        productSlider.innerHTML = "";
        productSlider.appendChild(productSlide);
    }

    function updateServiceSlide() {
        const service = services[currentServiceIndex];
        const serviceSlide = document.createElement("li");
        serviceSlide.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        `;
        serviceSlider.innerHTML = "";
        serviceSlider.appendChild(serviceSlide);
    }

    // เริ่มทำงานสไลด์รูปภาพหรือการแสดงผลสินค้าและบริการ
    updateProductSlide();
    updateServiceSlide();

    // ตั้งเวลาสไลด์รูปภาพหรือสินค้าและบริการ
    setInterval(showNextProduct, 5000); // เปลี่ยนรูปภาพทุก 5 วินาที
    setInterval(showNextService, 6000); // เปลี่ยนบริการทุก 6 วินาที
});

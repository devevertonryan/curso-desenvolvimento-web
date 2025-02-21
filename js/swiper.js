var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        2560: {
            slidesPerView: 6,
            spaceBetween: 50
        }
    }
});
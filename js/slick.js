  new Swiper('.event', {
    loop: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
  });
new Swiper('.reviews', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

new Swiper('.offers', {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
new Swiper('.underhero', {
  loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
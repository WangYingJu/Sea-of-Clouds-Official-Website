// 角色輪播
var galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 15,
  autoplay: true,
  loop: true,
  loopedSlides: 4,
});
var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 15,
  slidesPerView: 4,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 4,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

// 幻獸輪播
var galleryTop = new Swiper(".gallery-top2", {
  spaceBetween: 15,
  autoplay: true,
  loop: true,
  loopedSlides: 4,
});
var galleryThumbs = new Swiper(".gallery-thumbs2", {
  spaceBetween: 15,
  slidesPerView: 4,
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 4,
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

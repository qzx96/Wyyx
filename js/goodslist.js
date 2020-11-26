
//轮播图
var mySwiper = new Swiper('.swiper-container',{
        //pagination : '.swiper-pagination',
    pagination : '#swiper-pagination1',
    //分页器
    pagination: {
        el: '.swiper-pagination',
      },
    loop : true,
    //自动播放
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    })
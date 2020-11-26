// var $li = $('.li_hover')
// console.log($li)
//nav部分的下拉菜单最顶部
$('.li_hover').on({
  mouseenter:function(){
    $('.down').animate({
        // opacity:'1'
    })
    $(this).find('.down').stop().show()
  },
  mouseleave:function(){
    $('.down').animate({
      // opacity:'0'
    })
    $(this).find('.down').stop().hide()
  }
})
//tab-nav下拉菜单
$('.tab-nav li').on({
  mouseenter:function(){
   
    $(this).find('dl').stop().show()
  },
  mouseleave:function(){
   
    $(this).find('dl').stop().hide()
  }
})
//新品首发部分的轮播图
var mySwiper = new Swiper('.swiper-container',{
  //pagination : '.swiper-pagination',
  //pagination : '#swiper-pagination1',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  })
//新品首发的hover效果
$('.sw-pic').on({
  mouseenter:function(){
    $(this).find('img').attr('src','../img/newpr1.png')
    // console.log($(this).find('img'))
    $(this).css({'background-color':'#F4F0EA','box-shadow':'2px 3px 5px #ccc'})
   
  },
  mouseleave:function(){
    $(this).find('img').attr('src','../img/neprmin.png')
    // console.log($(this).find('img'))
    $(this).css({'background-color':'#fff','box-shadow':'none'})
  }
})

//滚动条
$(window).scroll(function(){
          //大于177px

        $(window).scrollTop()>140?$(".top_B").addClass('top_B_fixed'):$(".top_B").removeClass('top_B_fixed');
        $(window).scrollTop()>400?$(".aside-list").addClass('fixed'):$(".aside-list").removeClass('fixed');
        $(window).scrollTop()>400?$(".aside-list").css('position','fixed'):$(".aside-list").css('position','absolute');
        $(window).scrollTop()>0?$('.mask').css('position','fixed'):$('.mask').css('position','absolute')
          //滚动距离

        console.log($(window).scrollTop())
});

//遮罩层和控制页面出现
$('.login').on('click',function(){
  $('.mask').css('display','block')
  $('.wrap').css('display','block')
})
$('.del').on('click',function(){
  $('.mask').css('display','none')
  $('.wrap').css('display','none')
})

//点击商品跳转到商品详情页

$('.sw-pic img').on('click',function(){
  // window.location.href="../pages/detail.html";
  window.open('../dist/detail.html')
})

//点击一类商品跳转到商品列表
$('.tab-nav').on('click',function(){
  window.open('../dist/goodslist.html')
})

//数据请求


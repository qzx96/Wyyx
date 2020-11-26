//滚动条
$(window).scroll(function(){
    //大于177px

  $(window).scrollTop()>140?$(".top_B").addClass('top_B_fixed'):$(".top_B").removeClass('top_B_fixed');
  $(window).scrollTop()>400?$(".aside-list").addClass('fixed'):$(".aside-list").removeClass('fixed');
  $(window).scrollTop()>400?$(".aside-list").css('position','fixed'):$(".aside-list").css('position','absolute');
  $(window).scrollTop()>0?$('.mask').css('position','fixed'):$('.mask').css('position','absolute')
    //滚动距离

  //console.log($(window).scrollTop())
});


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
//遮罩层和控制页面出现
$('.login').on('click',function(){
    $('.mask').css('display','block')
    $('.wrap').css('display','block')
  })

  $('.del').on('click',function(){
    $('.mask').css('display','none')
    $('.wrap').css('display','none')
  })
  
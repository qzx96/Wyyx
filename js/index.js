// var $li = $('.li_hover')
// console.log($li)
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

//放大镜效果，鼠标移动
$('.goodsbox').on({
  mousemove:function (e) {

    //鼠标移动的坐标
    var y = e.pageY - e.clientY;
    var x = e.pageX - e.clientX;
    //鼠标往左走过的最大距离
    var maxLeft = e.clientX - $('.goodsbox').offset().left - $('.g-mask').width()/2 + x;
    var maxTop = e.clientY - $('.goodsbox').offset().top - $('.g-mask').height()/2 +y;
    if(maxLeft<0){
      maxLeft=0;
    }
    if(maxLeft >= ($('.goodsbox').width() - $('.g-mask').width())){
      maxLeft = $('.goodsbox').width() - $('.g-mask').width();
    }
    
    if(maxTop<0){
      maxTop=0;
    }
    if(maxTop >= ($('.goodsbox').height() - $('.g-mask').height())){
      maxTop = $('.goodsbox').height() - $('.g-mask').height();
    }
   
   $('.g-mask').css({'top':maxTop+'px','left':maxLeft + 'px'})
  var hL = maxLeft / ($('.goodsbox').width() - $('.g-mask').width());
  var hT = maxTop / ($('.goodsbox').height() - $('.g-mask').height())
   
   var l = -hL*($('.hidbox img').width() - $('.hidbox').width())
   var t = -hT*($('.hidbox img').height() - $('.hidbox').height())
   console.log(l,t)
  $('.hidbox img').css({'top':t+'px','left':l + 'px'})
  // $('.hidbox img').css({'top':hT+'px','left':hL + 'px'})
  }, 

    mouseenter : function(){
    $('.g-mask').css('display','block');
    $('.hidbox').css('display','block');
    
  },
    mouseleave : function(){
    $('.g-mask').css('display','none');
    $('.hidbox').css('display','none');
  }
  
})


  
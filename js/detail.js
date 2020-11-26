//放大镜效果，鼠标移动
$('.goodsbox').on({
  mousemove: function (e) {

    //鼠标移动的坐标
    var y = e.pageY - e.clientY;
    var x = e.pageX - e.clientX;
    //鼠标往左走过的最大距离
    var maxLeft = e.clientX - $('.goodsbox').offset().left - $('.g-mask').width() / 2 + x;
    var maxTop = e.clientY - $('.goodsbox').offset().top - $('.g-mask').height() / 2 + y;
    if (maxLeft < 0) {
      maxLeft = 0;
    }
    if (maxLeft >= ($('.goodsbox').width() - $('.g-mask').width())) {
      maxLeft = $('.goodsbox').width() - $('.g-mask').width();
    }

    if (maxTop < 0) {
      maxTop = 0;
    }
    if (maxTop >= ($('.goodsbox').height() - $('.g-mask').height())) {
      maxTop = $('.goodsbox').height() - $('.g-mask').height();
    }

    $('.g-mask').css({ 'top': maxTop + 'px', 'left': maxLeft + 'px' })
    var hL = maxLeft / ($('.goodsbox').width() - $('.g-mask').width());
    var hT = maxTop / ($('.goodsbox').height() - $('.g-mask').height())

    var l = -hL * ($('.hidbox img').width() - $('.hidbox').width())
    var t = -hT * ($('.hidbox img').height() - $('.hidbox').height())
    // console.log(l, t)
    $('.hidbox img').css({ 'top': t + 'px', 'left': l + 'px' })
    // $('.hidbox img').css({'top':hT+'px','left':hL + 'px'})
  },

  mouseenter: function () {
    $('.g-mask').css('display', 'block');
    $('.hidbox').css('display', 'block');

  },
  mouseleave: function () {
    $('.g-mask').css('display', 'none');
    $('.hidbox').css('display', 'none');
  }

})


//点击列表图片对应图片切换
$('.ul-list li').on('click', function () {
  $("li a").each(function () {
    $(this).css('border-color', '#e8e8e8')
  });

  $(this).find('a').css('border-color', '#B4A078')
  $('.goodsbox img').attr('src', $(this).find('img').attr('src'))
  $('.hidbox img').attr('src', $(this).find('img').attr('src'))
})
//获取本地存储中的商品数据
var goodsArr = JSON.parse(localStorage.getItem('goods'))

//遍历数据
$.each(goodsArr, function (index, item) {
  //给当前商品展示对应的图片
  $('.goodsbox').find('img').attr({ 'src': item.src, 'code': item.code })
  $('.hidbox').find('img').attr({ 'src': item.src, 'code': item.code })
  $('.ul-list li').find('img').attr({ 'src': item.src, 'code': item.code })
})



$(function () {
  //数据请求


  //获取商品列表数据
  $.ajax({
    url: '../goods.json',
    type: 'get',
    dataType: 'json',
    success: function (json) {
      //console.log(json)
      var liststr = '';
      // var titstr = '';
      $.each(goodsArr, function (Index, val) {
        $.each(json, function (index, item) {
          if (val.code === item.code) {
            // console.log(item)
            // console.log(item.title)
            $('.txt1').text(item.title);
            $('.txt2').text(item.describe);
            $('.tarname').text(item.title);
            $('.pricen').text(item.price.substring(1, item.price.length));
            // console.log(item.price.substring(1,item.price.length))
            var urlArr = [];
            for (var key in item) {
              // console.log(key)
              if (key.indexOf('imgurl') >= 0) {

                urlArr.push(item[key])

              }
            }

            console.log(urlArr.length)
            for (var i = 0, len = urlArr.length; i < len; i++) {
              liststr += `<li><a href="javascript:;"><img src="${urlArr[i]}" alt="" srcset=""></a></li>`
              // console.log( `${urlArr[i]}`)

            }
          }




        })
      })
      //添加li节点
      $('.ul-list').html(liststr)
      //去掉第一个li的左边距
      $('.ul-list li:first').css('margin-left', '0')


      //滑过li切换图片

      // //获取当前展示盒子里的图片路径并保存
      // var isrc = $('.goodsbox img').attr('src');
      $('.ul-list li').on({

        mouseenter: function () {
          $(this).find('a').css('border-color', '#B4A078')
          //滑过的li的图片路径赋给展示盒子和大盒子
          $('.goodsbox img').attr('src', $(this).find('img').attr('src'))
          $('.hidbox img').attr('src', $(this).find('img').attr('src'))
          //console.log($(this).find('img').attr('src'))
        },
        //鼠标滑出恢复(好像不需要)
        // mouseleave:function(){
        //   $('.goodsbox img').attr('src', isrc)
        // }

      })





    }
  })
  //点击加入购物车
  $('.atCar').on('click', function () {


    //获取当前商品的编号

    //console.log(JSON.parse( localStorage.getItem('goods'))[0].code)
    var code = JSON.parse(localStorage.getItem('goods'))[0].code;

    //判断本地存储是否有购物车数据
    if (localStorage.getItem('cargoods')) {
      var cargoodsArr = JSON.parse(localStorage.getItem('cargoods'));
    } else {
      var cargoodsArr = [];
    }
    //默认购物车数据为空
    var hasCargoods = false;
    if (cargoodsArr.length > 0) {
      //判断当前商品是否在购物车中
      $.each(cargoodsArr, function (index, item) {
        if (item.code === code) {
          //商品存在购物车中
          item.num++
          hasCargoods = true;
          return false;
        }
      })
    }

    //如果购物车没有当前选中的商品，添加一条数据
    if(!hasCargoods){
      cargoodsArr.push({cocde:code,num:1})
    }
    //更新本地数据库
    localStorage.setItem('cargoods',JSON.stringify(cargoodsArr))

    alert('添加购物车成功')
  })

})




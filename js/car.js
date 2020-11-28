$(function () {
    //判断本地存储是否you购物车数据
    if (localStorage.getItem('cargoods')) {
        //有就获取本地存储中购物车的数据
        var cargoodsArr = JSON.parse(localStorage.getItem('cargoods'))
       console.log(cargoodsArr)
        //获取数据
        $.ajax({
            url: '../goods.json',
            type: 'get',
            dataType: 'json',
            success: function (json) {
                var domstr = '';
                $.each(cargoodsArr, function (ind, val) {
                    $.each(json, function (index, item) {
                        //匹配商品编码 
                        console.log(item.code)
                        console.log(val.code)
                        if (item.code === val.code) {
                           
                            var price = item.price.substring(1, item.price.length);
                             
                                    domstr += `
                                    <div class="car-group">
                                        <div class="d d-txt d-car">
                                            <div class="d d-left">
                                                <div class="check">
                                                    <input type="checkbox" name="" id="">
                                                    <a><img src="${item.imgurl1}" alt="" srcset=""></a>
                                                </div>
                                            </div>
                                            <div class="d left d1">
                                                <p class="ms">${item.title}</p>
                                                <p class="xl">${item.describe}<i></i></p>
                                            </div>
                                            <div class="d left d2">
                                                <div class="pric">
                                                    <p>${item.price}</p>
                                                    <p class="red time"> ${item.time}</p>
                    
                                                </div>
                                            </div>
                                            <div class="d d3">
                                                <div class="num">
                    
                                                    <span class="less">-</span>
                                                    <input type="text" value="${val.num}">
                                                    <span class="add">+</span>
                    
                                                </div>
                                            </div>
                                            <div class="d d4">
                                                <p class="jg"><span>￥</span><i>${price}</i></p>
                                            </div>
                                            <div class="d d5">
                                                <div class="move">
                                                    <a href="javascript:;">移入收藏夹</a>
                                                </div>
                                                <a href="javascript:;">删除</a>
                                            </div>
                    
                                        </div>
                                    </div>   
                                  `
                        }
                    })
                })
                $('#goodscar').html(domstr);
                $('.totl').css('display','block')
                $('#hint').css('display','block')
                $('.data').css('display','block')
                

            }
        })







    }else{
        $('.car-empty').css('display',"block")
    }

})
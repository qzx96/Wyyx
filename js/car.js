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
                        // console.log(item.code)
                        // console.log(val.code)
                        if (item.code === val.code) {
                            var price = item.price.substring(1, item.price.length);
                           // console.log(price)
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
                                                <p class="jg"><span>￥</span><i id = "tprice">${Number(price)*val.num}</i></p>
                                            </div>
                                            <div class="d d5">
                                                <div class="move">
                                                    <a href="javascript:;">移入收藏夹</a>
                                                </div>
                                                <em href="javascript:;" class = "del" code="${item.code}">删除</em>
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
                //
               // console.log($('.car-group #tprice'))
               
               // $.each($('.car-group #tprice'),function(){
                    //console.log($(this).html())//价格
                    //console.log($(this))//含有复选款的那一个
                   // var _$this = $(this)//保存this指向
                   // sum += Number($(this).html())
                   // console.log(sum,_$this)
                    //console.log($('.car-group .check input').get(0).checked)
                    $('.car-group .check input').on('click',function(){
                        console.log($(this))
                        var sum = 0;
                        $.each($('.car-group .check input'),function () {
                            
                            //console.log($(this).get(0).checked )
                            if($(this).get(0).checked ){
                                //console.log($(this))
                                //console.log($(this).parent().parent().siblings('.d4').find('#tprice').text())
                                var nprice = Number($(this).parent().parent().siblings('.d4').find('#tprice').text())
                                 sum += nprice;
                                
                            }
                        }) ;
                        //小计部分
                         $('#sumprice').html(sum);
                       //console.log(sum);
                       //商品总额部分内容
                     
                       $('.hj').html(sum);
                        if (sum > 85) {
                            var text = '满300减20，速速下单>>'
                            $('.acco a').text(text)
                        }else{
                            $('.acco a').text('')
                        }
                    })
              
            }
        })
        //商品移除购物车
        console.log($('#goodscar'))
        $('#goodscar').on('click','div em',function(){
            //删除对应商品的组
            //console.log($('em'))
           // console.log($(this).parents('.car-group'))
           $(this).parents('.car-group').remove()

           //更新本地存储中的数据
             //获取要删除商品的编号
             var code = $(this).attr('code')
             //console.log($(this).attr('code'))
            // 删除数组元素
             $.each(cargoodsArr,function (index,item){
                // console.log(index)
                 console.log(item.code);
                 var code1 = item.code;
                 if (code1 === code){
                     
                     cargoodsArr.splice(index,1)
                     return false
                 }
             })
             console.log(cargoodsArr)
            // 判断购物车是否还有数据
            if(cargoodsArr.length > 0){
                localStorage.setItem('cargoods',JSON.stringify(cargoodsArr))
            }else{
                //清空本地数据
                localStorage.removeItem('cargoods')
                $('.car-empty').css('display',"block")

                $('.totl').css('display','none')
                $('#hint').css('display','none')
                $('.data').css('display','none')
            }
           
        })






    }else{
        $('.car-empty').css('display',"block")
    }

})
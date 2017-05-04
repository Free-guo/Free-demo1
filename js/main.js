
$(document).ready(function(){
    
    /*全屏滚动开始*/
	var btn=$('#btn ul li'),
        wH=$(window).height(),
        index=0,
        Time=new Date();
    
    setTimeout(function(){          /*解决刷新bug*/
        $(document).scrollTop(0);
    },30)
    btn.click(function(){       /*侧边按钮点击效果*/
        var index=$(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('html,body').stop(true).animate({
            'scrollTop':index*wH+'px'
        },600)
    })
    $(document).mousewheel(function(ev,dr){ 
        if(new Date()-Time>600){       /*解决动画延迟bug*/
            Time=new Date();
            if(dr<0){                  /*判断滚轮的方向*/
                index++;
                index%=6;
            }else{
                index--;
                if(index<0)index=5;
            }
            btn.eq(index).addClass('on').siblings().removeClass('on');
            $('body').stop(true).animate({
                'scrollTop':index*wH+'px'
            },600)
        }        
    })
    /*全屏滚动结束*/

    /*header开始*/
    var nav=$('#header .h-nav'),
        li=nav.find('li'),
        box=$('#header .h-nav .box');

    li.mouseover(function(){
        var width=$(this).width();
        var left=$(this).position().left;
        box.stop(true).animate({
            left:left-13+'px',
            width:width+24+'px'
        },300)
    })
    li.mouseleave(function(){
        box.stop(true).animate({
            left:-13+'px',
            width:64+'px'
        },300)
    })
    li.click(function(){
        var index=$(this).index();
        var wH=$(window).height();
        btn.eq(index).addClass('on').siblings().removeClass('on');
        $('html,body').animate({
            scrollTop:index*wH
        },500)
    })
    /*header结束*/

    /*box6 start*/
    var pic1=$('.box6 .wrap .pic1'),
        pic2=$('.box6 .wrap .pic2');

    function autoPlay1(){
        pic1.animate({
            "opacity":0,
            "filter":"alpha(opacity=0)"
        },2000)
        pic2.animate({
            "opacity":1,
            "filter":"alpha(opacity=100)"
        },2000)
    }    
    function autoPlay2(){
        pic1.animate({
            "opacity":1,
            "filter":"alpha(opacity=100)"
        },2000)
        pic2.animate({
            "opacity":0,
            "filter":"alpha(opacity=0)"
        },2000)
    }   
    setInterval(function(){
        if(pic1.css("opacity")==0){
            autoPlay2();
        }
        else if(pic1.css("opacity")==1){
            autoPlay1();
        }
    },2000)    
    /*box6 end*/
})
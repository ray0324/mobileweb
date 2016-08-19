require.config({
    paths: {
        "jquery": "js/lib/jquery-3.1.0.min",
        "fastclick": "js/lib/fastclick",
        "swiper":"js/lib/swiper/js/swiper.jquery.umd"
    },
    shim: {
        "Swiper": {　　　　　　
            deps: ["jquery"],
            exports: "Swiper"　
        }
    }
})

require(['jquery','fastclick','swiper'], function ($,FastClick,Swiper){
    FastClick.attach(document.body);//消除点击延迟

    //导航条功能代码
    !function(){
        var $sidebar = $('.sidebar');
        var $toolbar = $('.toolbar');
        var $nav     = $('.nav');

        $toolbar.on('click',function(e){
            e.stopPropagation();

            if(!$(this).hasClass('active')){
                $(this).addClass('active');
                $sidebar.show();
                setTimeout(function(){$sidebar.addClass('active')},0)
            }else{
                $(this).removeClass('active');
                $sidebar.removeClass('active');
                setTimeout(function(){$sidebar.hide()},350)
            }

        })

        $nav.on('click',function(e){
            e.stopPropagation();
        })

        $sidebar.on('click',function(e){
            e.stopPropagation();
            $toolbar.removeClass('active');
            $(this).removeClass('active');
            setTimeout(function(){$(this).hide()}.bind(this),350)
        })
    }()

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 10,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });




    // alert(1)
});

require.config({
    paths: {
        "jquery": "js/lib/jquery-3.1.0.min",
        "fastclick": "js/lib/fastclick",
        "swiper":"js/lib/swiper/js/swiper.jquery.umd",
        "viewer":'js/lib/viewer/viewer.min',
    },



    shim: {
        "swiper": {　　　　　　
            deps: ["jquery"],
            exports: "swiper"　
        },
        "viewer":{
            deps: ["jquery"],
            exports: "viewer"　
        }
    }
})

require(['jquery','fastclick','swiper','viewer'], function ($,FastClick,swiper,viewer){

    FastClick.attach(document.body);

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

    $('.images').viewer({
        navbar:false,
        title:false,
        toolbar:false,
    });



});

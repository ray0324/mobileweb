require.config({paths:{jquery:"vendor/jquery/jquery-3.1.0.min",fastclick:"vendor/fastclick",swiper:"vendor/swiper/js/swiper.jquery.min",viewer:"vendor/viewer/viewer.min"},shim:{swiper:{deps:["jquery"],exports:"swiper"},viewer:{deps:["jquery"],exports:"viewer"}}}),require(["jquery","fastclick","swiper","viewer"],function($,e,i,t){e.attach(document.body),!function(){var e=$(".sidebar"),i=$(".toolbar"),t=$(".nav");i.on("click",function(i){i.stopPropagation(),$(this).hasClass("active")?($(this).removeClass("active"),e.removeClass("active"),setTimeout(function(){e.hide()},350)):($(this).addClass("active"),e.show(),setTimeout(function(){e.addClass("active")},0))}),t.on("click",function(e){e.stopPropagation()}),e.on("click",function(e){e.stopPropagation(),i.removeClass("active"),$(this).removeClass("active"),setTimeout(function(){$(this).hide()}.bind(this),350)})}(),document.querySelectorAll(".swiper-container").length>0&&$(".swiper-container").swiper({pagination:".swiper-pagination",paginationClickable:!0,spaceBetween:10,nextButton:".swiper-button-next",prevButton:".swiper-button-prev"}),document.querySelectorAll(".images").length>0&&$(".images").viewer({navbar:!1,title:!1,toolbar:!1})});
//# sourceMappingURL=maps/app.js.map

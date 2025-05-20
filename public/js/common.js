/*
 *
 * File Name : common.js [use jquery]
 *
 */


$(window).load(function(){
    smoothScroll();
    Showabout();
});


/*********************************************************************************************/
// スルスルスクロール
/*********************************************************************************************/
function smoothScroll(){
	var span   = 600; //スピード
	var effect = 'easeOutExpo'; //アニメーション

	$("a.scroll").click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            $(this).blur();
            var t = navigator.appName.match(/Opera/) ? "html" : "html,body";
            $(t).queue([]).stop();
            var $targetElement = $(this.hash);
            var scrollTo = $targetElement.offset().top;
            if (window.scrollMaxY) {
                var maxScroll = window.scrollMaxY;
            } else {
                var maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            }
            if (scrollTo > maxScroll){
                scrollTo = maxScroll;
            }
            $(t).animate({ scrollTop: scrollTo }, span, effect);
            return false;
        }
	});
}
/*********************************************************************************************/



/*********************************************************************************************/
// プルダウンメニュー
/*********************************************************************************************/
function Showabout(){
    var speed  = 600;
    var easing = 'easeOutExpo';
    var flag = false;
    var ah     = $('#about').outerHeight();
    $('#btnAbout').click(function(){        
        $('#about').stop(true, true).slideToggle(speed, easing);
        
        if(flag == false){
            $('#logo').animate({'top':ah + 125 + 'px'}, speed, easing);
            $('#btnAbout').animate({'top':ah + 28 + 'px'}, speed, easing).addClass('open');
            $('#btnAbout').find('a').text('CLOSE');
            $('#wrapper').animate({'paddingTop':ah + 110 + 'px'}, speed, easing);
            flag = true;
        }
        else {
            $('#logo').animate({'top':'125px'}, speed, easing);
            $('#btnAbout').animate({'top':'28px'}, speed, easing).removeClass('open');
            $('#btnAbout').find('a').text('ABOUT');
            $('#wrapper').animate({'paddingTop':'110px'}, speed, easing);
            flag = false;
        }
        return false;
    });
}
/*********************************************************************************************/



/*********************************************************************************************/
// スクロールにあわせてフェードイン
/*********************************************************************************************/
$('head').append('<style type="text/css">.ch {opacity:0;}</style>');
(function($){
    $.fn.scrollFade = function(config){
        var def = {
            speed    : 1000,
            easing   : 'easeInOutQuart',
            position : 100
        }
        var options = $.extend(def, config);
        return this.each(function(i){
            var box     = $(this);
            var obj     = box.find('.ch');
            var length  = obj.length;
            var pos     = [];

            var k = {
                init : function(){
                    obj.css({'opacity':0});
                    
                    for(var i=0; i<length; i++){
                        var posY = obj.eq(i).offset().top;
                        pos.push(posY);
                    }
                    k.scroll();
                },
                
                scroll : function(){
                    var scrollTop  = $(window).scrollTop();
                    var windowBottom = $(window).height() + $(window).scrollTop() - def.position;
                    
                    for(var i=0; i<obj.length; i++){
                        if(pos[i] <= windowBottom){
                            k.fadeIn(i);
                        }
                    }
                },
                
                fadeIn : function(i){
                    obj.eq(i).animate({'opacity':1}, def.speed, def.easing);
                }
            }
            
            k.init();
            
            $(window).scroll(function(){
                k.scroll();
            });
        });
    };
})(jQuery);
/*********************************************************************************************/







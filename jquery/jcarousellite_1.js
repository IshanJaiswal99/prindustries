// DG_JavaScript Document
(function(e){function t(t,n){return parseInt(e.css(t[0],n))||0}function n(e){return e[0].offsetWidth+t(e,"marginLeft")+t(e,"marginRight")}function r(e){return e[0].offsetHeight+t(e,"marginTop")+t(e,"marginBottom")}e.fn.jCarouselLite=function(t){t=e.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:true,auto:null,hoverPause:false,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,pager:true,beforeStart:null,afterEnd:null},t||{});return this.each(function(){function i(){s();S=setInterval(function(){u(y+t.scroll);if(t.pager!=0){e(".pager a").removeClass("act");var n="."+y;e(n).addClass("act")}},t.auto+t.speed)}function s(){clearInterval(S)}function o(){return m.slice(y).slice(0,v)}function u(n){if(!a){if(t.beforeStart)t.beforeStart.call(this,o());if(t.circular){if(n<0){h.css(f,-((y+d)*b)+"px");y=n+d}else if(n>g-v){h.css(f,-((y-d)*b)+"px");y=n-d}else y=n}else{if(n<0||n>g-v)return;else y=n}a=true;h.animate(f=="left"?{left:-(y*b)}:{top:-(y*b)},t.speed,t.easing,function(){if(t.afterEnd)t.afterEnd.call(this,o());a=false});if(!t.circular){e(t.btnPrev+","+t.btnNext).removeClass("disabled");e(y-t.scroll<0&&t.btnPrev||y+t.scroll>g-v&&t.btnNext||[]).addClass("disabled")}}return false}var a=false,f=t.vertical?"top":"left",l=t.vertical?"height":"width";var c=e(this),h=e("ul",c),p=e("li",h),d=p.size(),v=t.visible;if(t.circular){h.prepend(p.slice(d-v+1).clone()).append(p.slice(0,t.scroll).clone());t.start+=v-1}var m=e("li",h),g=m.size(),y=t.start;c.css("visibility","visible");m.css({overflow:"hidden","float":t.vertical?"none":"left"});h.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var b=t.vertical?r(m):n(m);var w=b*g;var E=b*v;m.css({width:m.width()});h.css(l,w+"px").css(f,-(y*b));c.css(l,E+"px");if(t.btnPrev){e(t.btnPrev).click(function(){return u(y-t.scroll)});if(t.hoverPause){e(t.btnPrev).hover(function(){s()},function(){i()})}}if(t.btnNext){e(t.btnNext).click(function(){return u(y+t.scroll)});if(t.hoverPause){e(t.btnNext).hover(function(){s()},function(){i()})}}if(t.btnGo)e.each(t.btnGo,function(n,r){e(r).click(function(){e(".pager a").removeClass("act");var r="."+(n+1);e(r).addClass("act");return u(t.circular?t.visible+n:n)})});if(t.mouseWheel&&c.mousewheel)c.mousewheel(function(e,n){return n>0?u(y-t.scroll):u(y+t.scroll)});var S;if(t.auto){if(t.hoverPause){c.hover(function(){s()},function(){i()})}i()}})}})(jQuery)
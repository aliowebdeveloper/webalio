var headerHeight=jQuery(".fusion-header-wrapper").height(),vimeoPlayers=jQuery(".flexslider").find("iframe"),player,fusionReanimateSlider=function(a){var b=a.find(".slide-content");jQuery(b).each(function(){jQuery(this).stop(!0,!0),jQuery(this).css("opacity","0"),jQuery(this).css("margin-top","50px"),jQuery(this).animate({opacity:"1","margin-top":"0"},1e3)})};!function(a){"use strict";a(".tfs-slider").each(function(){var b=this;1<=a(b).parents(".post-content").length&&(a(b).data("parallax",0),a(b).data("full_screen",0)),cssua.ua.tablet_pc&&a(b).data("parallax",0),cssua.ua.mobile&&a(b).data("parallax",0)})}(jQuery),jQuery(window).load(function(){jQuery().flexslider&&jQuery(".tfs-slider").each(function(){var a,b,c,d,e,f,g,h,i,j=this,k=jQuery(j).find("li").get(0);"function"==typeof fusionCalculateResponsiveTypeValues&&(fusionSetOriginalTypographyData(),fusionCalculateResponsiveTypeValues(jQuery(this).data("typo_sensitivity"),jQuery(this).data("typo_factor"),800,".tfs-slider h2, .tfs-slider h3")),1<=jQuery(j).parents(".post-content").length&&(jQuery(j).data("parallax",0),jQuery(j).data("full_screen",0)),cssua.ua.tablet_pc&&jQuery(j).data("parallax",0),(cssua.ua.mobile||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)"))&&jQuery(j).data("parallax",0),i=0,1<=jQuery("#wpadminbar").length&&(i=jQuery("#wpadminbar").height()),1<=jQuery(j).parents("#sliders-container").length&&1===jQuery(j).data("parallax")&&jQuery(".fusion-header").addClass("fusion-header-backface"),1==jQuery(j).data("full_screen")?(a=jQuery(window).height(),"above"===avadaFusionSliderVars.slider_position&&(a-=headerHeight+i),0===jQuery(j).data("parallax")&&(a=1==avadaFusionSliderVars.header_transparency||"above"===avadaFusionSliderVars.slider_position?jQuery(window).height()-i:jQuery(window).height()-(headerHeight+i)),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(a="below"===avadaFusionSliderVars.slider_position?jQuery(window).height()-(headerHeight+i):jQuery(window).height()-i),jQuery(".fusion-top-frame").length&&(a=a-jQuery(".fusion-top-frame").height()-jQuery(".fusion-bottom-frame").height()),jQuery(j).find("video").each(function(){var b,c=jQuery(this).width()/jQuery(this).height(),d=c*a,e="-"+(d-jQuery(j).width())/2+"px",f=jQuery(j).parent().parent().parent().width();jQuery(j).parents(".post-content").length&&(f=jQuery(j).width()),f>d?(d="100%",e=0,b="static"):b="absolute",jQuery(this).width(d),jQuery(this).css({left:e,position:b})})):(b=jQuery(j).data("slider_width"),-1!=b.indexOf("%")?(b=jQuery(k).find(".background-image").data("imgwidth"),b||cssua.ua.mobile||(b=jQuery(k).find("video").width()),b||(b=940),jQuery(j).data("first_slide_width",b),b<jQuery(j).data("slider_width")&&(b=jQuery(j).data("slider_width")),!0):b=parseInt(jQuery(j).data("slider_width")),a=parseInt(jQuery(j).data("slider_height")),c=a/b,c<.5&&(c=.5),d=jQuery(j).parent().parent().parent().width(),1<=jQuery(j).parents(".post-content").length&&(d=jQuery(j).width()),a=c*d,a>parseInt(jQuery(j).data("slider_height"))&&(a=parseInt(jQuery(j).data("slider_height"))),a<200&&(a=200)),1==jQuery(j).data("full_screen")&&(jQuery(j).css("max-width","100%"),jQuery(j).find(".slides, .background").css("width","100%")),"Left"!==avadaFusionSliderVars.header_position&&"Right"!==avadaFusionSliderVars.header_position||jQuery(j).hasClass("fixed-width-slider")||1!=jQuery(j).data("parallax")||(jQuery(j).css("max-width",jQuery("#wrapper").width()),jQuery("body").hasClass("side-header-left")?jQuery(j).css("left",jQuery("#side-header").width()):jQuery("body").hasClass("side-header-right")&&jQuery(j).css("right",jQuery("#side-header").width())),jQuery(j).parents(".fusion-slider-container").css("height",a),jQuery(j).css("height",a),jQuery(j).find(".background, .mobile_video_image").css("height",a),1<=jQuery(".layout-boxed-mode").length&&(e=jQuery(".layout-boxed-mode #wrapper").width(),jQuery(j).css("width",e),jQuery(j).css("margin-left","auto"),jQuery(j).css("margin-right","auto"),1!=jQuery(j).data("parallax")||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||(jQuery(j).css("left","50%"),"Left"===avadaFusionSliderVars.header_position||"Right"===avadaFusionSliderVars.header_position?(e=jQuery(".layout-boxed-mode #wrapper").width()-jQuery(".layout-boxed-mode #side-header").width(),"Right"===avadaFusionSliderVars.header_position&&(e=jQuery(".layout-boxed-mode #wrapper").width()+jQuery(".layout-boxed-mode #side-header").width()),jQuery(j).css("margin-left","-"+Math.floor(e/2)+"px")):jQuery(j).css("margin-left","-"+e/2+"px")),jQuery(j).find(".slides, .background").css("width","100%")),cssua.ua.mobile&&(jQuery(j).find(".fusion-button").each(function(){jQuery(this).removeClass("button-xlarge button-large button-medium"),jQuery(this).addClass("button-small")}),jQuery(j).find("li").each(function(){jQuery(this).attr("data-autoplay","no"),jQuery(this).data("autoplay","no")})),jQuery(j).find("a.button").each(function(){jQuery(this).data("old",jQuery(this).attr("class"))}),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.content_break_point+"px)")?jQuery(j).find(".fusion-button").each(function(){jQuery(this).data("old",jQuery(this).attr("class")),jQuery(this).removeClass("button-xlarge button-large button-medium"),jQuery(this).addClass("button-small")}):jQuery(j).find("a.button").each(function(){jQuery(this).attr("class",jQuery(this).data("old"))}),1==jQuery(j).data("parallax")&&(!Modernizr.mq("only screen and (min-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position||(f=jQuery(j).find(".slide-content-container"),jQuery(f).each(function(){jQuery(this).css("padding-top",headerHeight+"px")})),jQuery(window).scroll(function(){jQuery(window).scrollTop()>=jQuery(j).parents("#sliders-container").position().top+jQuery(j).parents("#sliders-container").height()?jQuery(j).css("display","none"):jQuery(j).css("display","block")})),g=jQuery(window).width(),h=jQuery(window).height(),jQuery(window).on("resize",function(){var a,b,c,d,e,f,i,k,l,m,n,o,p;(jQuery(window).width()!=g||jQuery(window).width()!=g&&jQuery(window).height()!=h)&&(a=jQuery(".fusion-header-wrapper").height(),b=0,1<=jQuery("#wpadminbar").length&&(b=jQuery("#wpadminbar").height()),1==jQuery(j).data("full_screen")?(c=jQuery(window).height(),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&jQuery("#side-header").length&&(a=jQuery("#side-header").outerHeight()),"above"===avadaFusionSliderVars.slider_position&&(c-=a+b),0===jQuery(j).data("parallax")&&(c=1==avadaFusionSliderVars.header_transparency||"above"===avadaFusionSliderVars.slider_position?jQuery(window).height()-b:jQuery(window).height()-(a+b)),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(c="below"===avadaFusionSliderVars.slider_position?jQuery(window).height()-(a+b):jQuery(window).height()-b),jQuery(".fusion-top-frame").length&&(c=c-jQuery(".fusion-top-frame").height()-jQuery(".fusion-bottom-frame").height()),e=Math.max.apply(null,jQuery(j).find(".slide-content").map(function(){return jQuery(this).outerHeight()}).get()),e+=40,c<e&&(c=e),setTimeout(function(){jQuery(j).find("video").each(function(){var a,b=jQuery(this).width()/jQuery(this).height(),d=b*c,e="-"+(d-jQuery(j).width())/2+"px",f=jQuery(j).parent().parent().parent().width();jQuery(j).parents(".post-content").length&&(f=jQuery(j).width()),f>d?(d="100%",e=0,a="static"):a="absolute",jQuery(this).width(d),jQuery(this).css({left:e,position:a})})},100)):(d=jQuery(j).data("slider_width"),-1!=d.indexOf("%")?(d=jQuery(j).data("first_slide_width"),d<jQuery(j).data("slider_width")&&(d=jQuery(j).data("slider_width")),f=!0):d=parseInt(jQuery(j).data("slider_width")),c=parseInt(jQuery(j).data("slider_height")),i=c/d,i<.5&&(i=.5),k=jQuery(j).parent().parent().parent().width(),1<=jQuery(j).parents(".post-content").length&&(k=jQuery(j).width(),jQuery(j).parents(".tab-content").length&&(k=jQuery(j).parents(".tab-content").width()-60)),c=i*k,c>parseInt(jQuery(j).data("slider_height"))&&(c=parseInt(jQuery(j).data("slider_height"))),c<200&&(c=200),jQuery(j).find("video").each(function(){var a,b,e=jQuery(this).width()/jQuery(this).height(),g=e*c;g<d&&!jQuery(j).hasClass("full-width-slider")&&(g=d),a="-"+(g-jQuery(j).width())/2+"px",b=jQuery(j).parent().parent().parent().width(),1<=jQuery(j).parents(".post-content").length&&(b=jQuery(j).width()),b>g&&!0===f&&1!=jQuery(j).data("full_screen")&&(g="100%",a=0),jQuery(this).width(g),jQuery(this).css("left",a)})),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.content_break_point+"px)")?jQuery(j).find(".fusion-button").each(function(){void 0===jQuery(this).data("old")&&jQuery(this).data("old",jQuery(this).attr("class")),jQuery(this).removeClass("button-xlarge button-large button-medium"),jQuery(this).addClass("button-small")}):jQuery(j).find(".fusion-button").each(function(){jQuery(this).attr("class",jQuery(this).data("old"))}),1==jQuery(j).data("full_screen")&&"fade"===jQuery(j).data("animation")&&(jQuery(j).css("max-width","100%"),jQuery(j).find(".slides, .background").css("width","100%")),"Left"!==avadaFusionSliderVars.header_position&&"Right"!==avadaFusionSliderVars.header_position||jQuery(j).hasClass("fixed-width-slider")||1!=jQuery(j).data("parallax")||(jQuery(j).css("max-width",jQuery("#wrapper").width()),jQuery("body").hasClass("side-header-left")?jQuery(j).css("left",jQuery("#side-header").width()):jQuery("body").hasClass("side-header-right")&&jQuery(j).css("right",jQuery("#side-header").width())),jQuery(j).parents(".fusion-slider-container").css("height",c),jQuery(j).parents(".fusion-slider-container").css("max-height",c),jQuery(j).css("height",c),jQuery(j).find(".background, .mobile_video_image").css("height",c),1<=jQuery(".layout-boxed-mode").length&&0===jQuery(j).parents(".post-content").length&&(l=jQuery(".layout-boxed-mode #wrapper").width(),jQuery(j).css("width",l),jQuery(j).css("margin-left","auto"),jQuery(j).css("margin-right","auto"),1!=jQuery(j).data("parallax")||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||(jQuery(j).css("left","50%"),"Left"===avadaFusionSliderVars.header_position||"Right"===avadaFusionSliderVars.header_position?(l=jQuery(".layout-boxed-mode #wrapper").width()-jQuery(".layout-boxed-mode #side-header").width(),"Right"===avadaFusionSliderVars.header_position&&(l=jQuery(".layout-boxed-mode #wrapper").width()+jQuery(".layout-boxed-mode #side-header").width()),jQuery(j).css("margin-left","-"+Math.floor(l/2)+"px")):jQuery(j).css("margin-left","-"+l/2+"px")),"slide"!==jQuery(j).data("animation")&&jQuery(j).find(".slides").css("width","100%"),jQuery(j).find(".background").css("width","100%")),1!==jQuery(j).data("parallax")||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")?1==jQuery(j).data("parallax")&&Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(jQuery(j).css("position","relative"),jQuery(j).css("left","0"),jQuery(j).css("margin-left","0"),"absolute"!==jQuery(".fusion-header-wrapper").css("position")&&jQuery(".fusion-header-wrapper").css("position","relative"),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("position","relative"),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("z-index","3"),jQuery(".fusion-header-wrapper").css("z-index","5"),jQuery(".fusion-header-wrapper").css("height","auto"),jQuery(j).parents(".fusion-slider-container").css("margin-top",""),jQuery(j).find(".flex-direction-nav li a").css("-webkit-transform","translate(0, 0)"),jQuery(j).find(".flex-direction-nav li a").css("-ms-transform","translate(0, 0)"),jQuery(j).find(".flex-direction-nav li a").css("-o-transform","translate(0, 0)"),jQuery(j).find(".flex-direction-nav li a").css("-moz-transform","translate(0, 0)"),jQuery(j).find(".flex-direction-nav li a").css("transform","translate(0, 0)"),jQuery(j).find(".flex-control-nav").css("bottom",0),0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position||(o=jQuery(j).find(".slide-content-container"),jQuery(o).each(function(){jQuery(this).css("padding-top","")}))):(jQuery(j).css("position","fixed"),"absolute"!==jQuery(".fusion-header-wrapper").css("position")?(jQuery(".fusion-header-wrapper").css("position","relative"),p="translate(0, "+a/2+"px)","below"===avadaFusionSliderVars.slider_position&&jQuery(j).parents(".fusion-slider-container").css("margin-top","-"+a+"px")):p="translate(0, 0)",jQuery(j).find(".flex-direction-nav li a").css("-webkit-transform",p),jQuery(j).find(".flex-direction-nav li a").css("-ms-transform",p),jQuery(j).find(".flex-direction-nav li a").css("-o-transform",p),jQuery(j).find(".flex-direction-nav li a").css("-moz-transform",p),jQuery(j).find(".flex-direction-nav li a").css("transform",p),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("position","relative"),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("z-index","3"),jQuery(".fusion-header-wrapper").css("z-index","5"),jQuery(".fusion-header-wrapper").css("height",a),jQuery(j).hasClass("fixed-width-slider")&&("Left"===avadaFusionSliderVars.header_position||"Right"===avadaFusionSliderVars.header_position?(m=jQuery(j).parents("#sliders-container").length?jQuery("#sliders-container"):jQuery("#main"),m.width()<parseFloat(jQuery(j).parent().css("max-width"))?jQuery(j).css("max-width",m.width()):jQuery(j).css("max-width",jQuery(j).parent().css("max-width")),m.width()<parseFloat(jQuery(j).parent().css("max-width"))?jQuery(j).css("max-width",m.width()):jQuery(j).css("max-width",jQuery(j).parent().css("max-width")),-1*(n="Left"===avadaFusionSliderVars.header_position?"-"+(jQuery(j).width()-jQuery("#side-header").width())/2+"px":"-"+(jQuery(j).width()+jQuery("#side-header").width())/2+"px")>jQuery(j).width()&&(n=-1*jQuery(j).width())):n="-"+jQuery(j).width()/2+"px",jQuery(j).css("left","50%"),jQuery(j).css("margin-left",n)),jQuery(j).find(".flex-control-nav").css("bottom",a/2),0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position||(o=jQuery(j).find(".slide-content-container"),jQuery(o).each(function(){jQuery(this).css("padding-top",a+"px")}))),Modernizr.mq("only screen and (max-width: 640px)")?(jQuery(j).parents(".fusion-slider-container").css("height",c),jQuery(j).css("height",c),jQuery(j).find(".background, .mobile_video_image").css("height",c)):(Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)"),jQuery(j).parents(".fusion-slider-container").css("height",c),jQuery(j).css("height",c),jQuery(j).find(".background, .mobile_video_image").css("height",c)),o=jQuery(j).find(".slide-content-container"),1<=jQuery(j).parents(".post-content").length&&(jQuery(j).parents(".fusion-slider-container").css("height","auto"),jQuery(j).css("height","auto"),jQuery(j).parents(".fusion-slider-container").css("max-height","none"),jQuery(j).find(".mobile_video_image").each(function(){var a,b,d=jQuery(".mobile_video_image").css("background-image").replace("url(","").replace(")","");d&&(a=new Image,a.name=d,a.src=d,a.onload=function(){var a=this.height/this.width,d=jQuery(j).parent().parent().parent().width();1<=jQuery(j).parents(".post-content").length&&(d=jQuery(j).width()),(b=a*d)<c&&(jQuery(j).find(".mobile_video_image").css("height",b),jQuery(j).css("height",b))})})),"Left"!==avadaFusionSliderVars.header_position&&"Right"!==avadaFusionSliderVars.header_position||jQuery(j).parents("#sliders-container").length>=1&&(o=jQuery(j).parents("#sliders-container").find(".slide-content-container"),jQuery(o).each(function(){Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")?(jQuery(this).find(".slide-content").css("margin-left",""),jQuery(this).find(".slide-content").css("margin-right","")):jQuery(this).hasClass("slide-content-right")?jQuery(this).find(".slide-content").css("margin-right","100px"):jQuery(this).hasClass("slide-content-left")&&jQuery(this).find(".slide-content").css("margin-left","100px")})),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&jQuery(".fusion-header-wrapper").css("height",""),g=jQuery(window).width(),h=jQuery(window).height())}),1<=jQuery(j).parents(".post-content").length&&(jQuery(j).css("max-width","100%"),"slide"!==jQuery(j).data("animation")&&jQuery(j).find(".slides").css("max-width","100%")),jQuery(j).find("video").each(function(){"function"==typeof jQuery(this)[0].pause&&jQuery(this)[0].pause()}),jQuery(j).flexslider({animation:jQuery(j).data("animation"),slideshow:jQuery(j).data("autoplay"),slideshowSpeed:jQuery(j).data("slideshow_speed"),animationSpeed:jQuery(j).data("animation_speed"),controlNav:Boolean(Number(jQuery(j).data("pagination_circles"))),directionNav:Boolean(Number(jQuery(j).data("nav_arrows"))),animationLoop:Boolean(Number(jQuery(j).data("loop"))),smoothHeight:!0,pauseOnHover:!1,useCSS:!0,video:!0,touch:!0,prevText:"&#xe61e;",nextText:"&#xe620;",start:function(a){var b,d,e,g,h,i,l,m,n=0;jQuery(j).parent().find(".fusion-slider-loading").remove(),1<=jQuery("#wpadminbar").length&&(n=jQuery("#wpadminbar").height()),jQuery(a.slides.eq(a.currentSlide)).find(".slide-content-container").show(),"function"==typeof fusion_responsive_title_shortcode&&jQuery(a.slides.eq(a.currentSlide)).find(".fusion-title").fusion_responsive_title_shortcode(),b=Math.max.apply(null,jQuery(j).find(".slide-content").map(function(){return jQuery(this).outerHeight()}).get()),b+=40,1==jQuery(j).data("full_screen")?(d=jQuery(window).height(),"above"===avadaFusionSliderVars.slider_position&&(d-=headerHeight+n),0===jQuery(j).data("parallax")&&(d=1==avadaFusionSliderVars.header_transparency||"above"===avadaFusionSliderVars.slider_position?jQuery(window).height()-n:jQuery(window).height()-(headerHeight+n)),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(d="below"===avadaFusionSliderVars.slider_position?jQuery("#side-header").length?jQuery(window).height()-(jQuery("#side-header").outerHeight()+n):jQuery(window).height()-(headerHeight+n):jQuery(window).height()-n),d<b&&(d=b),jQuery(".fusion-top-frame").length&&(d=d-jQuery(".fusion-top-frame").height()-jQuery(".fusion-bottom-frame").height()),jQuery(j).find("video").each(function(){var a=jQuery(this).width()/jQuery(this).height(),b=a*d,c="-"+(b-jQuery(j).width())/2+"px";h=jQuery(j).parent().parent().parent().width(),1<=jQuery(j).parents(".post-content").length&&(h=jQuery(j).width()),h>b&&(b="100%",c=0),jQuery(this).width(b),jQuery(this).css("left",c)})):(e=jQuery(j).data("slider_width"),-1!=e.indexOf("%")?(e=jQuery(k).find(".background-image").data("imgwidth"),e||cssua.ua.mobile||(e=jQuery(k).find("video").width()),e||(e=940),jQuery(j).data("first_slide_width",e),e<jQuery(j).data("slider_width")&&(e=jQuery(j).data("slider_width")),g=!0):e=parseInt(jQuery(j).data("slider_width")),d=parseInt(jQuery(j).data("slider_height")),c=d/e,c<.5&&(c=.5),h=jQuery(j).parent().parent().parent().width(),1<=jQuery(j).parents(".post-content").length&&(h=jQuery(j).width(),jQuery(j).parents(".tab-content").length&&(h=jQuery(j).parents(".tab-content").width()-60)),d=c*h,d>parseInt(jQuery(j).data("slider_height"))&&(d=parseInt(jQuery(j).data("slider_height"))),d<200&&(d=200),d<b&&(d=b),jQuery(j).find("video").each(function(){var a,b,c=jQuery(this).width()/jQuery(this).height(),f=c*d;f<e&&!jQuery(j).hasClass("full-width-slider")&&(f=e),a="-"+(f-jQuery(j).width())/2+"px",b=jQuery(j).parent().parent().parent().width(),jQuery(j).parents(".post-content").length>=1&&(b=jQuery(j).width()),b>f&&!0===g&&1!=jQuery(j).data("full_screen")&&(f="100%",a=0),jQuery(this).width(f),jQuery(this).css("left",a)})),jQuery(j).parents(".fusion-slider-container").css("max-height",d),jQuery(j).parents(".fusion-slider-container").css("height",d),jQuery(j).css("height",d),jQuery(j).find(".background, .mobile_video_image").css("height",d),1!==jQuery(j).data("parallax")||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")?1==jQuery(j).data("parallax")&&Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(jQuery(j).css("position","relative"),jQuery(j).css("left","0"),jQuery(j).css("margin-left","0"),"absolute"!==jQuery(".fusion-header-wrapper").css("position")&&jQuery(".fusion-header-wrapper").css("position","relative"),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("position","relative"),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("z-index","3"),jQuery(".fusion-header-wrapper").css("z-index","5"),jQuery(".fusion-header-wrapper").css("height","auto"),jQuery(j).parents(".fusion-slider-container").css("margin-top",""),jQuery(j).find(".flex-direction-nav li a").css("-webkit-transform","translate(0, 0)"),jQuery(j).find(".flex-direction-nav li a").css("-ms-transform","translate(0, 0)"),jQuery(j).find(".flex-direction-nav li a").css("-o-transform","translate(0, 0)"),jQuery(j).find(".flex-direction-nav li a").css("-moz-transform","translate(0, 0)"),jQuery(j).find(".flex-direction-nav li a").css("transform","translate(0, 0)"),jQuery(j).find(".flex-control-nav").css("bottom",0),0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position||(f=jQuery(j).find(".slide-content-container"),jQuery(f).each(function(){jQuery(this).css("padding-top","")}))):(jQuery(j).css("position","fixed"),"absolute"!=jQuery(".fusion-header-wrapper").css("position")?(jQuery(".fusion-header-wrapper").css("position","relative"),m="translate(0, "+headerHeight/2+"px)","below"===avadaFusionSliderVars.slider_position&&jQuery(j).parents(".fusion-slider-container").css("margin-top","-"+headerHeight+"px")):m="translate(0, 0)",jQuery(j).find(".flex-direction-nav li a").css("-webkit-transform",m),jQuery(j).find(".flex-direction-nav li a").css("-ms-transform",m),jQuery(j).find(".flex-direction-nav li a").css("-o-transform",m),jQuery(j).find(".flex-direction-nav li a").css("-moz-transform",m),jQuery(j).find(".flex-direction-nav li a").css("transform",m),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("position","relative"),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("z-index","3"),jQuery(".fusion-header-wrapper").css("z-index","5"),jQuery(".fusion-header-wrapper").css("height",headerHeight),1==jQuery(j).data("full_screen")?jQuery(a).find(".flex-control-nav").css("bottom",headerHeight/2):jQuery(a).find(".flex-control-nav").css("bottom",0),jQuery(j).hasClass("fixed-width-slider")&&("Left"===avadaFusionSliderVars.header_position||"Right"===avadaFusionSliderVars.header_position?(i=jQuery(j).parents("#sliders-container").length?jQuery("#sliders-container"):jQuery("#main"),i.width()<parseFloat(jQuery(j).parent().css("max-width"))?jQuery(j).css("max-width",i.width()):jQuery(j).css("max-width",jQuery(j).parent().css("max-width")),-1*(l="Left"===avadaFusionSliderVars.header_position?"-"+(jQuery(j).width()-jQuery("#side-header").width())/2+"px":"-"+(jQuery(j).width()+jQuery("#side-header").width())/2+"px")>jQuery(j).width()&&(l=-1*jQuery(j).width())):l="-"+jQuery(j).width()/2+"px",jQuery(j).css("left","50%"),jQuery(j).css("margin-left",l)),0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position||(f=jQuery(j).find(".slide-content-container"),jQuery(f).each(function(){jQuery(this).css("padding-top",headerHeight+"px")}))),f=jQuery(j).find(".slide-content-container"),jQuery(a.slides.eq(a.currentSlide)).find("video").each(function(){"yes"===jQuery(this).parents("li").attr("data-autoplay")&&"function"==typeof jQuery(this)[0].play&&jQuery(this)[0].play()}),"Left"!==avadaFusionSliderVars.header_position&&"Right"!==avadaFusionSliderVars.header_position||jQuery(j).parents("#sliders-container").length>=1&&(f=jQuery(j).parents("#sliders-container").find(".slide-content-container"),jQuery(f).each(function(){Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||(jQuery(this).hasClass("slide-content-right")?jQuery(this).find(".slide-content").css("margin-right","100px"):jQuery(this).hasClass("slide-content-left")&&jQuery(this).find(".slide-content").css("margin-left","100px"))})),fusionReanimateSlider(f),void 0!==a.slides&&0!==a.slides.eq(a.currentSlide).find("iframe").length&&(Number(avadaFusionSliderVars.status_vimeo)&&($f(a.slides.eq(a.currentSlide).find("iframe")[0]).api("pause"),"yes"===jQuery(a.slides.eq(a.currentSlide)).data("autoplay")&&$f(a.slides.eq(a.currentSlide).find("iframe")[0]).api("play"),"yes"===jQuery(a.slides.eq(a.currentSlide)).data("mute")&&$f(a.slides.eq(a.currentSlide).find("iframe")[0]).api("setVolume",0)),playVideoAndPauseOthers(a)),jQuery(j).find(".overlay-link").hide(),jQuery(a.slides.eq(a.currentSlide)).find(".overlay-link").show(),jQuery(j).find("[data-youtube-video-id], [data-vimeo-video-id]").each(function(){var a=jQuery(this);setTimeout(function(){resizeVideo(a)},500)}),jQuery.waypoints("viewportHeight"),jQuery.waypoints("refresh")},before:function(a){jQuery(j).find(".slide-content-container").hide(),0!==a.slides.eq(a.currentSlide).find("iframe").length&&Number(avadaFusionSliderVars.status_vimeo)&&(jQuery(j).find("iframe").each(function(){$f(jQuery(this)[0]).api("pause")}),"yes"===jQuery(a.slides.eq(a.currentSlide)).data("autoplay")&&$f(a.slides.eq(a.currentSlide).find("iframe")[0]).api("play"),"yes"===jQuery(a.slides.eq(a.currentSlide)).data("mute")&&$f(a.slides.eq(a.currentSlide).find("iframe")[0]).api("setVolume",0)),playVideoAndPauseOthers(a)},after:function(a){jQuery(a.slides.eq(a.currentSlide)).find(".slide-content-container").show(),"function"==typeof fusion_responsive_title_shortcode&&jQuery(a.slides.eq(a.currentSlide)).find(".fusion-title").fusion_responsive_title_shortcode(),f=jQuery(j).find(".slide-content-container"),fusionReanimateSlider(f),0!==a.slides.eq(a.currentSlide).find("iframe").length&&Number(avadaFusionSliderVars.status_vimeo)&&(jQuery(j).find("iframe").each(function(){$f(jQuery(this)[0]).api("pause")}),"yes"===jQuery(a.slides.eq(a.currentSlide)).data("autoplay")&&$f(a.slides.eq(a.currentSlide).find("iframe")[0]).api("play"),"yes"===jQuery(a.slides.eq(a.currentSlide)).data("mute")&&$f(a.slides.eq(a.currentSlide).find("iframe")[0]).api("setVolume",0)),jQuery(j).find(".overlay-link").hide(),jQuery(a.slides.eq(a.currentSlide)).find(".overlay-link").show(),jQuery(a.slides.eq(a.currentSlide)).find("[data-youtube-video-id], [data-vimeo-video-id]").each(function(){resizeVideo(jQuery(this))}),playVideoAndPauseOthers(a),jQuery('[data-spy="scroll"]').each(function(){jQuery(this).scrollspy("refresh")})}})})});
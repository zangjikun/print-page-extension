(function(){var b="boxify";$.fn[b]=function a(){var c=arguments[0]===false?false:true;var d=arguments[1]||((typeof arguments[0]==="object")&&arguments[0])||{};d=$.extend(true,$.fn[b].options,d);return $(this).map(function(){var f=$(this);var e=$(this).data(d.className);if(c===false){e&&$(this).window().eq(0).unbind("resize",e.setPosition);f.removeDataset(d.className).removeData(d.className);if(f.data(d.className)){$.console.error(f)}return e&&e.remove().get(0)}f.dataset(d.className,"true");if(e){if(e.parent().size()==0){e.appendTo(f.getContainer()).data("source",this)}return e.show().setPosition()}e=f.createElement("div").css(d.style).attr("class",d.className).dataset([b,"tag"].join($.sf.options.separator),this.tagName).appendTo(f.getContainer());e.data("source",this);e.setPosition=$.proxy(function(){var h=$(this).data("source");if(!h){return false}var g=$(h).realOuterDimension();return this.css($.extend({},d.style,{left:g.left+"px",top:g.top+"px",width:g.width+"px",height:g.height+"px"})).get(0)},e);e.data("options",d);e.onClick=e.click($.proxy(function(i){var g=this.data("options");var h=this.data("source");if(g.hideOnClick){this.hide()}if($.isFunction(g.callback.click)){g.callback.click(i,h)}},e));$(this).data(d.className,e);$(this).window().eq(0).resize(e.setPosition);return e.setPosition()})};$.fn[b].options={className:[b].join($.sf.options.separator),dataset:{visibility:[b,"visibility"].join($.sf.options.separator)},style:{position:"absolute",backgroundColor:"red",zIndex:$.sf.options.style.zIndex,opacity:0.5},hideOnClick:false,callback:{}}})();
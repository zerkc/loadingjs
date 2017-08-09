/**
 * Created by clases on 25/03/2017.
 */
(function($){


    $.fn.loading = function(options){

        var isShow ="show";
        var defaults = {
            message:"Loading",
            background:"rgba(255,255,255,0.75)",
            textcolor:"#000000",
            overlay:true,
            configLoading:[
                {
                    width:150,
                    border:"3px",
                    color:"#3498db",
                    effect:"spin",
                    time:"1.5s"
                },
                {
                    width:130,
                    border:"3px",
                    color:"#e74c3c",
                    effect:"spinR",
                    time:"1.5s"
                },
                {
                    width:110,
                    border:"3px",
                    color:"#f9c922",
                    effect:"spin",
                    time:"1s"
                }
            ],
            custom:[]
        };
        if(options === 'stop'){
            isShow = 'stop';
        }

        defaults = $.extend({},defaults,options);
        return $(this).each(function(i,o){
            $(o).css("position","relative");
            if ($(o).find("#loader-wrapper").length === 0) {
                _createLoading(o);
            }
            if (isShow === "show") {

                if ($(o).hasClass("loaded")) {
                    $(o).removeClass("loaded");
                }
            } else if(isShow === 'stop'){
                _destroyLoading(o);
            }
            return this;
        });

        function _createLoading(o){
            var div = $('<div id="loader-wrapper"></div>');
            var divload = $('<div id="loader"></div>');
            var divmessage = $('<div class="messageDialog"></div>');
            if(defaults.overlay) {
                var divleft = $('<div class="loader-section section-left"></div>');
                var divRight = $('<div class="loader-section section-right"></div>');
            }
            $(divmessage).append(defaults.message);
            $(divleft).css("background",defaults.background);
            $(divRight).css("background",defaults.background);
            $(divmessage).css("color",defaults.textcolor);
            $(divmessage).css("color",defaults.textcolor);
            $.each(defaults.configLoading,function(i,e){
                var line = $("<div>");
                line.css({
                    display: "block",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: e.width+"px",
                    height: e.width+"px",
                    margin: "-"+(e.width/2)+"px 0 0 -"+(e.width/2)+"px",
                    "border-radius": "50%",
                    border: e.border+" solid transparent",
                    "border-top-color": e.color,
                    "z-index": "7500",
                    "-webkit-animation": e.effect+" "+e.time+" linear infinite", /* Chrome, Opera 15+, Safari 5+ */
                    "animation": e.effect+" "+e.time+" linear infinite"
                });
                $(div).append(line);
            });
            $.each(defaults.custom,function(i,e){
                $(div).append($("<div>").css(e));
            });

            $(div).append(divmessage);
            $(div).append(divleft);
            $(div).append(divRight);
            $(o).append(div);
        }

        function _destroyLoading(o){
            $(o).addClass("loaded");
            setTimeout(function(){
                $(o).find("#loader-wrapper").remove();
                $(o).removeClass("loaded");
            },1180);
        }
    }

})(jQuery);
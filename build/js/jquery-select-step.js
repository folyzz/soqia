!function(o){o.fn.selectStep=function(d){function e(s,u){!function(e,l){var t=Object.assign;d=t({},{onChange:null,incrementLabel:"+",decrementLabel:"-"},d);var i=[],r=o(e).find("option");r.each(function(e,t){var n=o(this).text(),a=o(this).attr("value"),c=o(this).is(":selected");i=i.concat([{name:n,value:a,selected:c}]),e===r.length-1&&l(d,i)})}(s,function(e,t){if(t.length){jQuery(s).addClass("select-step");var n=e.incrementLabel,a=e.decrementLabel,c=[];t.map(function(e,t){return e.selected&&(c=c.concat([{key:t,name:e.name,value:e.value}])),!1});var l=c.length?c[0].name:null,i='<div class="jquery-select-step-element">\n                  <div class="decrementStep">'+a+'</div>\n                  <div class="selectStepValue" data-key="'+(c.length?c[0].key:null)+'" data-value="'+(c.length?c[0].value:null)+'">\n                    '+l+'\n                  </div>\n                  <div class="incrementStep">'+n+"</div>\n                </div>",r=o(s).wrap('<div class="jquery-select-step"></div>').parent();r.append(i),u(e,t,r)}})}function a(e,t,n,a){var c=o(e).find(".selectStepValue"),l=parseInt(o(c).attr("data-key")),i=t.onChange;if(!("decrement"===a&&l<=0||"increment"===a&&l>=n.length-1)){var r="decrement"===a?l-1:l+1,s=n[r],u=s.name,d=s.value;c.text(u),c.attr("data-key",r),c.attr("data-value",d),jQuery(e).find(".select-step option").removeAttr("selected"),jQuery(e).find(".select-step option:eq("+r+")").attr("selected",!0),null!==i&&function(e){return e&&"[object Function]"==={}.toString.call(e)}(i)&&i({key:r,name:u,value:d})}}return e(this,function(e,t,n){o(n).on("click",".decrementStep",function(){a(n,e,t,"decrement")}),o(n).on("click",".incrementStep",function(){a(n,e,t,"increment")})}),this}}(jQuery);
if(Function.prototype.bind==null){Function.prototype.bind=function(b){var a=this;return function(){return a.apply(b,arguments)}}}if(typeof(Wicket)=="undefined"){Wicket={}}if(typeof(Wicket.Browser)=="undefined"){Wicket.Browser={isKHTML:function(){return/Konqueror|KHTML/.test(navigator.userAgent)&&!/Apple/.test(navigator.userAgent)},isSafari:function(){return/KHTML/.test(navigator.userAgent)&&/Apple/.test(navigator.userAgent)},isOpera:function(){return !Wicket.Browser.isSafari()&&typeof(window.opera)!="undefined"},isIE:function(){return !Wicket.Browser.isSafari()&&typeof(document.all)!="undefined"&&typeof(window.opera)=="undefined"},isIEQuirks:function(){return Wicket.Browser.isIE()&&document.documentElement.clientHeight==0},isIELessThan7:function(){var b=navigator.userAgent.indexOf("MSIE");var a=parseFloat(navigator.userAgent.substring(b+5));return Wicket.Browser.isIE()&&a<7},isIE7:function(){var b=navigator.userAgent.indexOf("MSIE");var a=parseFloat(navigator.userAgent.substring(b+5));return Wicket.Browser.isIE()&&a>=7},isGecko:function(){return/Gecko/.test(navigator.userAgent)&&!Wicket.Browser.isSafari()}}}if(typeof(Wicket.Event)=="undefined"){Wicket.Event={idCounter:0,getId:function(a){var b=a.getAttribute("id");if(typeof(b)=="string"&&b.length>0){return b}else{b="wicket-generated-id-"+Wicket.Event.idCounter++;a.setAttribute("id",b);return b}},handler:function(){var c=this[0];var b=this[1];var a=Wicket.$(c);b.bind(a)()},fire:function(a,b){if(document.createEvent){var c=document.createEvent("Event");c.initEvent(b,true,true);return a.dispatchEvent(c)}else{return a.fireEvent("on"+b)}},add:function(a,c,b){if(a==window&&c=="domready"){Wicket.Event.addDomReadyEvent(b)}else{if(a.addEventListener){a.addEventListener((c=="mousewheel"&&Wicket.Browser.isGecko())?"DOMMouseScroll":c,b,false)}else{if(a==window||a==document){b=b.bind(a)}else{b=Wicket.Event.handler.bind([Wicket.Event.getId(a),b])}a.attachEvent("on"+c,b)}}return a},domReadyHandlers:new Array(),fireDomReadyHandlers:function(){var a=Wicket.Event.domReadyHandlers;while(a.length>0){var b=a.shift();b()}Wicket.Event.domReadyHandlers=null},addDomReadyEvent:function(c){if(window.loaded){c()}else{if(!window.events||!window.events.domready){Wicket.Event.domReadyHandlers.push(c);var b=function(){if(window.loaded){return}window.loaded=true;Wicket.Event.fireDomReadyHandlers()}.bind(this);if(document.readyState&&(Wicket.Browser.isKHTML()||Wicket.Browser.isSafari())){var a=function(){if(document.readyState=="loaded"||document.readyState=="complete"){b()}else{window.setTimeout(a,10)}};window.setTimeout(a,10)}else{if(document.readyState&&Wicket.Browser.isIE()){if(document.getElementById("ie_ready")==null){var d=(window.location.protocol=="https:")?"//:":"javascript:void(0)";document.write('<script id="ie_ready" defer src="'+d+'"><\/script>');document.getElementById("ie_ready").onreadystatechange=function(){if(this.readyState=="complete"){b()}}}}else{Wicket.Event.add(document,"DOMContentLoaded",b)}}}else{window.addEventListener("domready",c,false)}}}}};	
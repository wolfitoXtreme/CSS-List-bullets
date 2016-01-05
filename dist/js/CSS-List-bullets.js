/**@license Copyright (c) 2015 Cesar Candela
* www.cssguy4hire.com 
*/
var debug=!1;if($(document).ready(function(){var e,n=$("#changeBtt"),o=$("#fontSizes"),t=$("main > ul");$(n).on({click:function(n){n.preventDefault,e=$("option",o).eq($(o).prop("selectedIndex")).attr("value"),$(t).css({"font-size":e})}})}),debug)var console_log=void 0;else console_log=function(){};
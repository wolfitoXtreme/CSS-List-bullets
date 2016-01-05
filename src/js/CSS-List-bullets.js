/**@license Copyright (c) 2015 Cesar Candela
* www.cssguy4hire.com 
*/

var debug = false;

$(document).ready(function () {

    var changeBtt = $('#changeBtt'),
        fSizeValues = $('#fontSizes'),
        targetArea = $('main > ul'),
        newFsize
    ;
    
    $(changeBtt).on({

        'click' : function(event){
            event.preventDefault;

            newFsize = $('option', fSizeValues).eq($(fSizeValues).prop('selectedIndex')).attr('value');

            $(targetArea).css({
                'font-size' : newFsize
            })

            // console_log(newFsize);
        }

    });
    
    
});



///////////////////////////////////////////////////
//TEST VARS
///////////////////////////////////////////////////
    


//LOG
if (debug) {
    var console_log = console.log.bind(window.console);
}
else {
    console_log = function(){}
}

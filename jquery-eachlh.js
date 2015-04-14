(function($) {
	$.fn.eachLh = function (cl) {
	    //number of elements per column (put argument)
	    var columns = cl;
	    //get li elms 
	    var liLen = $('.each_height_adjust').length;
	    //get number of line
	    var lineLen = Math.ceil(liLen / columns);
	    //array of height of each <li>
	    var liHiArr = [];
	    //array of height of each line
	    var lineHiArr = [];

	    //store <li> heights. if it is the heighest in the line, putted into lineHiArr[].
	    for (i = 0; i <= liLen; i++) {
	        liHiArr[i] = $('.each_height_adjust').eq(i).height();
	        if (lineHiArr.length <= Math.floor(i / columns) 
	            || lineHiArr[Math.floor(i / columns)] < liHiArr[i]) 
	        {
	            lineHiArr[Math.floor(i / columns)] = liHiArr[i];
	        }
	    }
	    
	    //modify each <li> height by ".each" method
	    $('.each_height_adjust').each(function(i){
	        $(this).css('height',lineHiArr[Math.floor(i / columns)] + 'px');
	    });

	};
})(jQuery);
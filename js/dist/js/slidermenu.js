$(function() {
    
                    var month2 = new Date();
                    var month2Array = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                    document.getElementById("month2").innerHTML = month2Array[month2.getMonth()];
                    
                    var day2 = new Date();
                    document.getElementById("day2").innerHTML = day2.getDate();
                    
                    var years2 = new Date();
                    document.getElementById("years2").innerHTML = years2.getFullYear();
    
        $('nav#menu').mmenu({
                extensions	: [ 'effect-slide', 'pageshadow' ],
                header		: true,
                searchfield	: true,
                counters	: true,
                footer		: {
                        add			: false,
                        content		: '<p><span id="month2"></span> <span id="day2"></span>, <span id="years2"></span></p>'
                }
        });
});






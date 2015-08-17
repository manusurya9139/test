$(document).ready(function(){
    activaTab('weather');
});
    
function activaTab(tab){
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};

$(".dropdown-menu li a").click(function(){
    var selText   = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});
    
$("#btnWeather").click(function(){
    alert($('.btn-select').text()+", "+$('.btn-select2').text());
});
 
$(document).ready(function(){  
    $("#btnWeather").click(function(){
        $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('.btn-select').text(),
                dataType: "json",
                success: function(result){
                   $(".output").html("<p>SPEED : " + result.wind.speed +"<br></p><p>DEG : " + result.wind.deg +"<br></p>");
                },
                error: function (e) {
                  alert(e); 
                }  
            });
        });
    });

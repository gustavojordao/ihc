$(document).ready(function() {
    $("#btn1").click(function(evt) {
        $("#zoome").zoomTo({targetsize:0.75, duration:600});
        $(".background_class").click(function(evt2){
          $(".background_class").zoomTo({targetsize:1, duration:600});
          evt2.stopPropagation();
        });
        evt.stopPropagation();
    });
});

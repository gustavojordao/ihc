$(document).ready(function() {
    $("#btn1").click(function(evt) {
        $("#zoome").zoomTo({targetsize:0.75, duration:600});
        $(".relative").click(function(evt2){
          $(".relative").zoomTo({targetsize:0.65, duration:600});
          evt2.stopPropagation();
        });
        evt.stopPropagation();
    });
});

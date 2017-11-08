$(document).ready(function() {
    $("#btn1").click(function(evt) {
        $("#zoome").zoomTo({targetsize:0.75, duration:600, closeclick:true});
        evt.stopPropagation();
    });
});
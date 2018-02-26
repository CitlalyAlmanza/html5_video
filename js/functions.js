
$(function() {
    $(document).on("click", "li video", function() { 
        $("#videoarea").attr({
            "src": $(this).attr("src"),
            "poster": $(this).attr("poster")
        })
    })    
})
/*
function clic(){
	$("ul li").on("click", values())
}

function() values() {
	$("video").attr({
	"src": $(this).attr("movieurl"),
	"poster": $(this).attr("moviesposter"),
	"autoplay": "autoplay",
	"mute": "mute"
	});
}
*/

/*
$(function() {
    $("#playlist li").on("click", function() {
        $("#videoarea").attr({
            src: $("#playlist li").attr("movieurl"),
            poster: $("#playlist li").attr("moviesposter"),
            muted: "muted"
        })
    })
})
*/
$(function() {
    $("li video").on("click", function() {
        $("#videoarea").attr({
            "src": $(this).attr("src"),
            "poster": $(this).attr("poster")
        })
    })
    
    $("#videoarea").attr({
        "src": $("li video").eq(0).attr("src"),
        "poster": $("li video").eq(0).attr("poster")
    })
})
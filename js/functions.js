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
$(function() {
    $("#playlist li").on("click", function() {
        $("#videoarea").attr({
            src: $("#playlist li").attr("movieurl"),
            poster: $("#playlist li").attr("moviesposter"),
            muted: "muted"
        })
    })
})
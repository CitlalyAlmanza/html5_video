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
    $("#playlist li").on("click", function() {
        $("#videoarea").attr({
            "src": $(this).attr("movieurl"),
            "poster": $(this).attr("moviesposter")
        })
    })
    $("#videoarea").attr({
        "src": $("#playlist li").eq(0).attr("movieurl"),
        "poster": $("#playlist li").eq(0).attr("moviesposter")
    })
})
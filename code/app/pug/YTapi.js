var player,
	tag = document.createElement('script'),
	firstScriptTag = document.getElementsByTagName('script')[0];

	tag.src = "https://www.youtube.com/iframe_api";
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
	player = new YT.Player('c-player', {
		videoId: 'chizr_7kRfk'
	});
}

$('.c-video-player__pause').click(function(event) {

	var index = $( this ).data( 'c-video-player-number' );

	if ( index == 1 ) {

		player.pauseVideo();

	} else if ( index == 2 ) {

		player2.pauseVideo();

	}
});
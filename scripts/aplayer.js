let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        height: '405',
        width: '660',
        videoId: '0keDwGnKNfk',
        playerVars: {
            controls: 0,
            showinfo: 0,
            rel: 0,
            aotoplay: 0,
            modesbranding: 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

$('.player__progress').on('click', e => {
    const bar = $(e.currentTarget);
    const newBtnPosition = e.originalEvent.layerX;
    const clickedPersent = (newBtnPosition / bar.width()) * 100;
    const newPlayerTime = (player.getDuration() / 100) * clickedPersent;

    player.seekTo(newPlayerTime);
})

$('.player__splash').on('click', e => {
    player.playVideo();
})

function onPlayerReady(event) {
    let interval;
    const durationTime = player.getDuration();
    clearInterval(interval);
    updateTimerDisplay();

    interval = setInterval(() => {
        const completedTime = player.getCurrentTime();
        const persent = (completedTime / durationTime) * 100;
        $('.player__progress-runner').css({
            left: `${persent}%`
        })
        updateTimerDisplay();
    }, 1000);
}

function onPlayerStateChange(event) {
    const btn = $('.player__button-play');

    switch (event.data) {
        case 1:
            btn.addClass('paused');
            $('.player').addClass('active')
            break;
        case 2:
            btn.removeClass('paused');
            $('.player').removeClass('active')
            break;
    }
}

$('.player__volume-button_icon').on('click', e => {       
    const btnMute = $('.mute');
    let mute_toggle = $(this);


    if (player.isMuted()) {
        player.unMute();
        btnMute.removeClass('active-mute');
        mute_toggle.text('volume_up');

    } else {
        player.mute();
        btnMute.addClass('active-mute');
        mute_toggle.text('volume_off');
    }
})

$('.player__volume-volume').on('change', function () {
    
        player.setVolume($(this).val());
    
    });
    


function updateTimerDisplay() {
    $('.player__duration-estimate').text(formatTime(player.getDuration()));
    $('.player__duration-completed').text(formatTime(player.getCurrentTime()));
}

$('.player__button-play').on('click', () => {
    const playerState = player.getPlayerState(); // 0-ended, 1-played, 2-paused...

    if (playerState !== 1) {
        player.playVideo();
    } else {
        player.pauseVideo();
    }
})

function formatTime(time) {
    const roundTime = Math.round(time);
    const minutes = Math.floor(roundTime / 60);
    const seconds = roundTime - minutes * 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${formattedSeconds}`;

}

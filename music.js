const Audio = document.querySelector('audio');
const Music_Play_Button = document.querySelector('#Play_Button');
const Music_Play_Button_Icon = document.querySelector('i');

function Music_Play_Or_Pause() {
    if (Audio.paused === true) {
        Audio.play();
        Music_Play_Button_Icon.className = "fa fa-pause"
    }
    else {
        Audio.pause();
        Music_Play_Button_Icon.className = "fa fa-play"
    }
}

Music_Play_Button.addEventListener('click', Music_Play_Or_Pause)

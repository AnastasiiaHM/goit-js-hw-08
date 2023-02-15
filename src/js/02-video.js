import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOKALSTOR = 'videoplayer-current-time';

function saveCurrentTimeVideo({ seconds }) {
  localStorage.setItem(LOKALSTOR, seconds);
}
player.on('timeupdate', throttle(saveCurrentTimeVideo, 1000));

const currentTime = localStorage.getItem(LOKALSTOR);
if (currentTime) {
  player.setCurrentTime(currentTime);
}


import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';
    

function playerTime() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem(STORAGE_KEY, seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
}

player.on('timeupdate', throttle(playerTime, 1000));

const currentTime = localStorage.getItem(STORAGE_KEY);

player.setCurrentTime(currentTime).catch(function (error) {
  console.log(error);
});


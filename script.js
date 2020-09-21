

const container = document.getElementById('container');
const text = document.getElementById('text');


const totalTime = 30000;
const breatheTime = (totalTime / 3);
const holdTime = (totalTime / 6);

breathAnimation();
backgroundImage();

function breathAnimation() {
  text.innerText = 'Breathe In';
  container.className = 'container grow';

  setTimeout (() => {
    text.innerText = 'Hold';

      setTimeout (() => {
        text.innerText = 'Breathe Out';
        container.className = 'container shrink';
          setTimeout (() => {
            text.innerText = 'Hold';
          }, breatheTime);
      }, holdTime);
    }, breatheTime);
  }

  setInterval(breathAnimation, totalTime);


function backgroundImage() {

  let bg = '#224941 url("./images/' + (Math.floor(Math.random() * 6) + 1) + '.jpg") no-repeat center center/cover';
  document.body.style.background = bg;
}

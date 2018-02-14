/*annotations are important for remembering thought process when viewing code months later*/
//listen for a keypress; if we press the right key, then find the matching audio file and play it, if the key doesnt show up on the keyboard, the script shouldnt do anything

(()=> {
console.log('Phil Collins album loaded!');

function removeHighlight(e) {
  console.log(e);
  if (e.propertyName !== 'transform') {
    return;
  } else {
    e.target.classList.remove('playing');
  }
}

//this should fire every time a key is punshed; do something interesting inside this function
/* logMessage() {
  console.log('I can feel it calling in the air tonight!');
}
window.addEventListener('keydown', logMessage);

function logMessage2() {
  console.log('I can feel it...');
}
window.addEventListener('click', logMessage2);*/

function playSound(e) {
//debugger;//
console.log(e.keyCode);
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
key.classList.add('playing');
//nothing happens if theres no corresponding audio file to the key
if (!audio) { return; }
//rewind the audio if button is pressed again
audio.currentTime = 0;
audio.play();
//debugger;
}

window.addEventListener('keydown', playSound);

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transtionend', removeHighlight));

})();

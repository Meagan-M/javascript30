function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // if no audio associated with key, stop function from running
    if(!audio) return; 
    // currentTime rewinds the audio sound to the start each time a keydown event happens
    audio.currentTime = 0;
    // plays audio associated with keyCode
    audio.play();
    // assigns CSS class .playing to key.Important to add a box shadow when keydown event happens
    key.classList.add('playing');
}  
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// selecting all keys so that when they are pressed the box shadow will be removed after a short time
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


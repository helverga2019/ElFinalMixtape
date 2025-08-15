const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPause');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');

// Play/Pause
playPauseBtn.addEventListener('click', () => {
  if(audio.paused){
    audio.play();
    playPauseBtn.textContent = '⏸';
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶';
  }
});

// Actualizar barra de progreso
audio.addEventListener('timeupdate', () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

// Cambiar posición de audio al mover la barra
progress.addEventListener('input', () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// Control de volumen
volume.addEventListener('input', () => {
  audio.volume = volume.value / 100;
});

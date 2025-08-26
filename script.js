// Control de musica

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "▶️ Reproducir música";
  } else {
    music.play();
    musicBtn.textContent = "⏸️ Pausar música";
  }
  isPlaying = !isPlaying;
});

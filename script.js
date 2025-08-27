// --- BLOQUE 2: Cuenta regresiva ---
const eventDate = new Date("Sep 21, 2025 21:00:00").getTime();
const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "<h3>¡Ya comenzó la fiesta! 🎉</h3>";
        clearInterval(timer);
        return;
    }

    document.getElementById("days").innerText = Math.floor(distance / (1000*60*60*24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000*60*60)) / (1000*60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000*60)) / 1000);
}, 1000);

// --- BLOQUE 3: Música de fondo ---
const track = document.getElementById("track");
const controlBtn = document.getElementById("play-pause");

controlBtn.addEventListener("click", () => {
    if(track.paused){
        track.play();
        controlBtn.classList.add("pause");
    } else {
        track.pause();
        controlBtn.classList.remove("pause");
    }
});

// --- BLOQUE 4: Formulario canciones ---
document.getElementById("sendMusicFrm").addEventListener("click", (e)=>{
    e.preventDefault();
    const form = document.getElementById("musicForm");
    const name = form.name.value.trim();
    const author = form.author.value.trim();
    if(!name || !author){
        document.getElementById("musicFormMessage").innerText = "Ingrese los campos requeridos";
        return;
    }
    document.getElementById("musicFormMessage").innerText = "¡Gracias por tu sugerencia!";
    form.reset();
});

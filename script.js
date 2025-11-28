const lightBtn = document.getElementById("light-btn");
const giftBtn = document.getElementById("gift-btn");
const memoryBtn = document.getElementById("memory-btn");

const bgAudio = document.getElementById("bg-music");

const memoryOverlay = document.getElementById("memoryOverlay");
const memoryClose = document.getElementById("memoryClose");
const memoryVideo = document.getElementById("memoryVideo");

// LIGHTS
lightBtn.addEventListener("click", () => {
    document.body.classList.toggle("lights-on");
});

// MEMORY BOX
memoryBtn.addEventListener("click", () => {
    memoryOverlay.classList.add("show");
    memoryOverlay.setAttribute("aria-hidden", "false");
    bgAudio.pause();
    memoryVideo.play().catch(() => {});
});

memoryClose.addEventListener("click", closeMemoryBox);

function closeMemoryBox() {
    memoryOverlay.classList.remove("show");
    memoryOverlay.setAttribute("aria-hidden", "true");
    bgAudio.play().catch(() => {});
}

// FIREWORKS
const fireworkContainer = document.createElement("div");
fireworkContainer.className = "fireworks-container";
document.body.appendChild(fireworkContainer);

function createFirework() {
    const fw = document.createElement("div");
    fw.className = "firework";
    fw.style.left = Math.random() * 100 + "vw";
    fw.style.top = Math.random() * 100 + "vh";
    fireworkContainer.appendChild(fw);
    setTimeout(() => fw.remove(), 1000);
}
setInterval(createFirework, 500);

// FIREFLIES
const fireflyContainer = document.createElement("div");
fireflyContainer.className = "fireflies";
document.body.appendChild(fireflyContainer);

function createFirefly() {
    const f = document.createElement("div");
    f.className = "firefly";
    f.style.left = Math.random() * 100 + "vw";
    f.style.animationDuration = 3 + Math.random() * 4 + "s";
    fireflyContainer.appendChild(f);
    setTimeout(() => f.remove(), 7000);
}
setInterval(createFirefly, 800);

// END PHOTO
const endPhoto = document.createElement("img");
endPhoto.src = "kisstea.jpg";
endPhoto.className = "end-photo";
document.body.appendChild(endPhoto);

setTimeout(() => {
    endPhoto.style.opacity = "1";
}, 5000);

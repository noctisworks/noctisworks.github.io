const headlines = [
    "BUILDING THE SILENT GUARDIANS.",
    "PROTECTING WITHOUT SPOTLIGHT.",
    "SYSTEMS FOR THOSE WHO STAND WATCH.",
    "PRECISION FOR THE UNSEEN DEFENDER.",
    "WHERE TECHNOLOGY MEETS DUTY.",
    "EMPOWERING EVERY QUIET VIGIL.",
    "INVISIBLE STRENGTH. UNMATCHED PERFORMANCE.",
    "ALWAYS WATCHING. ALWAYS READY."
];

let currentHeadline = 0;
const headlineElement = document.getElementById("hero-headline");

function rotateHeadline() {
    headlineElement.style.opacity = 0;
    setTimeout(() => {
        currentHeadline = (currentHeadline + 1) % headlines.length;
        headlineElement.textContent = headlines[currentHeadline];
        headlineElement.style.opacity = 1;
    }, 800);
}

setInterval(rotateHeadline, 5000); 
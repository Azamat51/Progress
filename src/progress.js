function animateProgress(barId, percentId, target) {
    let bar = document.getElementById(barId);
    let percentText = document.getElementById(percentId);

    let current = 0;

    let progress = setInterval(() => {
        if (current >= target) {
            clearInterval(progress);
        } 
        else {
            current++;
            bar.style.width = current + "%";
            percentText.textContent = current + "%";
        }
    }, 18); // tezlik (kichik bo‘lsa tezroq)
}
let skills = {
    html: 80,
    css: 70,
    js: 65,
    python: 85
};

function increase(skill) {
    if (skills[skill] < 100) {
        skills[skill]++;

        // Progress barni yangilash
        document.getElementById(skill + "-bar").style.width = skills[skill] + "%";

        // Raqamni yangilash
        document.getElementById(skill + "-percent").textContent = skills[skill] + "%";
    }
    else {
        skills[skill] = 0;
    }
}


// Sahifa yuklanganda animatsiya boshlangan bo‘lsin
window.onload = () => {
    animateProgress("html-bar", "html-percent", 80);
    animateProgress("css-bar", "css-percent", 70);
    animateProgress("python-bar", "python-percent", 85);
    animateProgress("js-bar", "js-percent", 65);
};

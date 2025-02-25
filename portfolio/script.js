// " Your Scientists Were So Preoccupied With Whether Or Not They Could, They Didn’t Stop To Think If They Should "

const tileTitles = [
    "My Pet", "SubForest", "Minesweeper",
    "FFmpeg-GUI", "Personal Website"
];

const tileImages = [
    "../assets/website.png", 
    "../assets/website.png",
    "../assets/website.png", 
    "../assets/website.png", 
    "../assets/website.png"
];

const tileText = [
    "Simple Tamagotchi-like game made to be accesible and fun for kids. Built in a team of 5 people using Java, JavaFX.",
    "A subreddit visualizer utilizing React-Three-Fiber (React renderer for Three.js), a Flask REST API and Reddit's PRAW API.",
    "A version of the classic game Minesweeper developed using C++ and Qt.",
    "A GUI built to make FFmpeg simpler to use, developed using Python and Tkinter.",
    "This website, developed using standard HTML/CSS and Javascript"
]

const tileTech = [
    "Java, JavaFX, Gradle, UI",
    "Javascript, Python, React, Three.js, Flask, Web development",
    "C++, Qt, GUI",
    "Python, Tkinter, GUI",
    "HTML/CSS, Javascript, Web Development",
]

const tileLinks = [
    "https://github.com/BotLed/MyPet",
    "https://github.com/BotLed/Scrapey",
    "https://github.com/BotLed/Minesweeper",
    "https://github.com/BotLed/ffmpeg-gui",
    "https://github.com/BotLed/botled.github.io"
]

document.addEventListener("DOMContentLoaded", function () {
    let container = document.querySelector(".row");
    for (let i = 0; i < tileTitles.length; i++) {
        let tileDiv = document.createElement("div");
        tileDiv.className = "w-100";
        
        tileDiv.innerHTML = `
            <a href="${tileLinks[i]}" target="_blank"">
            <div class="tile tile${i + 1}"');">
                <span class="tile-title">${tileTitles[i]}</span>
                <span class="tile-text">${tileText[i]}</span>
                <span class="tile-tech">${tileTech[i]}</span>
                <div class ="tile-image-box">
                    <img src="${tileImages[i]}" alt="${tileTitles[i]}" />
                </div>
            </div>
            </a>`;
        
        container.appendChild(tileDiv);
    }
});

setTimeout(() => {
    document.getElementById('welcome-screen').classList.add('hide');
}, 200);
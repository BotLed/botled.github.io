// " Your Scientists Were So Preoccupied With Whether Or Not They Could, They Didn’t Stop To Think If They Should "

const tileTitles = [
    "My Pet", "Scrapey", "Minesweeper",
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada iaculis ultrices.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada iaculis ultrices.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada iaculis ultrices.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada iaculis ultrices.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada iaculis ultrices."
]

const tileTech = [
    "Python C (Toolkit) WebSockets Rails Material UI Redis",
    "React Redux (Toolkit) WebSockets Rails Material UI Redis",
    "React Redux (Toolkit) WebSockets Rails Material UI Redis",
    "React Redux (Toolkit) WebSockets Rails Material UI Redis",
    "React Redux (Toolkit) WebSockets Rails Material UI Redis",
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
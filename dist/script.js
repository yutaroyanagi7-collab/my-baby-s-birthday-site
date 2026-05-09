const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveButton() {

// ← 逃げ始めた瞬間だけ自由移動化
noBtn.style.position = "fixed";

const padding = 20;

const buttonWidth = noBtn.offsetWidth;
const buttonHeight = noBtn.offsetHeight;

const maxX =
window.innerWidth - buttonWidth - padding;

const maxY =
window.innerHeight - buttonHeight - padding;

const randomX =
Math.random() * maxX;

const randomY =
Math.random() * maxY;

noBtn.style.left =
Math.max(padding, randomX) + "px";

noBtn.style.top =
Math.max(padding, randomY) + "px";
}

// PC
noBtn.addEventListener(
"mouseenter",
moveButton
);

// iPhone
noBtn.addEventListener(
"touchstart",
(e) => {

e.preventDefault();

moveButton();

},
{ passive: false }
);

// YESボタン演出
yesBtn.addEventListener("click", () => {

const emojis = [
"✨",
"💖",
"🥳",
"💕",
"🎊"
];

for (let i = 0; i < 120; i++) {

createFallingEmoji(emojis);
}
});

// NOを押せた時の演出
noBtn.addEventListener("click", () => {

const sadEmojis = [
"😢",
"😭",
"🥺",
"😨",
"😣",
"😔",
"😞",
"😩",
"😑"
];

for (let i = 0; i < 120; i++) {

createFallingEmoji(sadEmojis);
}
});

function createFallingEmoji(emojis) {

const emoji =
document.createElement("div");

emoji.classList.add("confetti");

emoji.innerText =
emojis[
Math.floor(
Math.random() * emojis.length
)
];

emoji.style.left =
Math.random() * 100 + "vw";

emoji.style.animationDuration =
(2 + Math.random() * 3) + "s";

document.body.appendChild(emoji);

setTimeout(() => {

emoji.remove();

}, 5000);
}
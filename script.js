const marriageDate = new Date("2006-06-19");

const today = new Date();

const diffTime = today - marriageDate;

const days = Math.floor(
    diffTime / (1000 * 60 * 60 * 24)
);

document.getElementById("daysTogether")
.innerHTML =
`💖 Together for ${days} Days 💖`;

function playMusic(){
    document.getElementById("bgMusic").play();
}
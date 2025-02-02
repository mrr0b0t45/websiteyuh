const messages = [
    "Bist du dir sicha?",
    "sicha sicha?",
    "siiiiiiiiiiicccccccchhhhhhhhhaaaaaaaa?",
    "....pookie??",
    "hmmmm überleg dir nochmal",
    "ig du hast nd überlegt oda?",
    "doch? nana ich glaub nd..",
    "aba aba...",
    "oky ich hör auf :(",
    "spassss, drück auf yuh für mein Geheimnis hihi"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html"
}
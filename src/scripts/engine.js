const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites: {
        avatar: document.getElementById("card_image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    actions: {
        button: document.getElementById("next-duel"),
    },
    playerSides: {
        player1: "player-cards",
        player1Box: document.querySelector("#player-cards"),
        computer: "computer-cards",
        computerBox: document.querySelector("#computer-cards"),
    },
};

const pathImages = "./src/assets/icons/";

const cardData = [
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        winOf: ["Rock"],
        loseOf: ["Scissors"], 
    },
    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        winOf: ["Scissors"],
        loseOf: ["Paper"],
    },
    {
        id: 2, 
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        winOf: ["Paper"],
        loseOf: ["Paper"],
    },
    {
        id: 3,
        name: "Hercules Beetle",
        type: "Paper",
        img: `${pathImages}hercules.png`,
        winOf: ["Rock"],
        loseOf: ["Scissors"],
    },
    {
        id: 4,
        name: "Ressurrection",
        type: "Scissors",
        img: `${pathImages}ressurreicao.png`,
        winOf: ["Paper"],
        loseOf: ["Rock"],
    },
    {
        id: 5,
        name: "Harpia Lady",
        type: "Rock",
        img: `${pathImages}harpiaLadySanshimi.png`,
        winOf: ["Scissors"],
        loseOf: ["Paper"],
    },
    {
        id: 6,
        name: "Needle Ball",
        type: "Paper",
        img: `${pathImages}bolaAgulha.png`,
        winOf: ["Rock"],
        loseOf: ["Scissors"],
    },
    {
        id: 7,
        name: "Red-Eyes",
        type: "Scissors",
        img: `${pathImages}dragaoNegroOlhosVermelhos.png`,
        winOf: ["Paper"],
        loseOf: ["Rock"],
    },
    {
        id: 8,
        name: "Leviata",
        type: "Rock",
        img: `${pathImages}leviata.png`,
        winOf: ["Scissors"],
        loseOf: ["Paper"],
    },
    {
        id: 9,
        name: "Magician of black chaos",
        type: "Scissors",
        img: `${pathImages}magoCaosNegro.png`,
        winOf: ["Paper"],
        loseOf: ["Rock"],
    },
    {
        id: 10,
        name: "Mammoth",
        type: "Rock",
        img: `${pathImages}mammoth.png`,
        winOf: ["Scissors"],
        loseOf: ["Paper"],
    },
    {
        id: 11,
        name: "Mask of shine & Dark",
        type: "Paper",
        img: `${pathImages}mascaraTrevasLuz.png`,
        winOf: ["Rock"],
        loseOf: ["Scissors"],
    }
];

function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

function createCardImage(IdCard, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", `${pathImages}card-back.png`);
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");

    if (fieldSide === state.playerSides.player1) {
        cardImage.addEventListener("mouseover", () => {
            drawSelectCard(IdCard);
        });
        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        });
    }

    return cardImage;
}

function drawSelectCard(index) {
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Attribute: " + cardData[index].type;
}

async function setCardsField(cardId) {
    await removeAllCards();

    let computerCardId = getRandomCardId();


    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";

    await hiddencardDetails();

    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;

    let duelResults = await checkDuelResults(cardId, computerCardId);
    await updateScore();
    await drawButton(duelResults);
}
async function  showHiddenCardFieldsImages(value) {
    if(value === true){
        state.fieldCards
    }    
}

async function hiddencardDetails(){
    state.cardSprites.avatar.src = "";
    state.cardSprites.name.innerText = "";
    state.cardSprites.type.innerText = "";
}

async function checkDuelResults(playerCardId, computerCardId) {
    let duelResults = "Draw";

    let playerCard = cardData[playerCardId];
    let computerCard = cardData[computerCardId];

    if (playerCard.winOf.includes(computerCard.type)) {
        duelResults = "win";
        state.score.playerScore++;
    } else if (playerCard.loseOf.includes(computerCard.type)) {
        duelResults = "lose";
        state.score.computerScore++;
    }    

    await playAudio(duelResults);
    return duelResults;
}

async function drawButton(text) {
        state.actions.button.innerText = text; 
        state.actions.button.style.display = "block";
}    


async function updateScore() {
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
}


function removeAllCards() {
    let cards = state.playerSides.computerBox;
    let imgElements = cards.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    cards = state.playerSides.player1Box;
    imgElements = cards.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
}

function drawCards(cardNumbers, fieldSide) {
    for (let i = 0; i < cardNumbers; i++) {
        const randomIdCard = getRandomCardId();
        const cardImage = createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

async function resetDuel(){
    state.cardSprites.avatar.src = "";
    state.actions.button.style.display = "none";

    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";


    init();
}
async function playAudio(checkDuelResults) {
    const audio = new Audio(`src/assets/audios/${checkDuelResults}.wav`);
    audio.play();
    try{
        audio.play();
    }catch{}
}

function init() {
    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";

    drawCards(5, state.playerSides.player1);
    drawCards(5, state.playerSides.computer);

    const bgm =document.getElementById("bgm");
    bgm.play();
}

init();

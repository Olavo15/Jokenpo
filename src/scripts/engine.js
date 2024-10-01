const state ={
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points")
    },
    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards:{
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    actions:{
    button: document.getElementById("next-duel")
    },
};

const playerSides = {
    player1: " player-field-card",
    computer: " computer-field-card",
}

const pathImages = ".src/assets/icons/"


const cardData = [
    {
        id:0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        winOf:["Rock"],
        LoseOf: ["Scissors"],
    },
    {
        id:1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        winOf:["Scissors"],
        LoseOf: ["Paper"],
    },
    {
        id:1,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        winOf:["Paper"],
        LoseOf: ["Paper"],
    },
    {
        id:3,
        nome: "HErcules Beetle",
        type: "Paper",
        img: `${pathImages}Hercules.png`,
        winOf:["Rock"],
        LoseOf: ["Scissors"],
    },
    {
        id:4,
        name: "Ressurrection",
        type: "Scissors",
        img: `${pathImages}ressurrection.png`,
        winOf:["Paper"],
        LoseOf: ["Rock"],
    },
    {
        id:5,
        name: "Harpia Lady",
        type: "Rock",
        img: `${pathImages}harpiaLadySanshimi.png`,
        winOf:["Scissors"],
        LoseOf: ["Paper"],
    },
];

async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

async function createcardImage(IdCard, fieldSide){
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height","100px");
    cardImage.setAttribute("src","./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id","IdCard");
    cardImage.classList.add("card");



    if(fieldSide === playerSides.player1){
        cardImage.addEventListener("click", ()=> {
            setCardsField(cardImage.getAttribute("data-id"));
        });
    }

    cardImage.addEventListener("mouseover", ()=> {
        drawSelectCard(IdCard);
    });

    return cardImage;

}

async function drawCards(cardNumbers, fieldSide){
    for(let i = 0; i < cardNumbers; i++){
        const randomIdCard = await getRandomCardId();
        const cardImage = await createcardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

function init(){
    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);
    
}

init();

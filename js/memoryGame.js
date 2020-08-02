document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'fries',
            img: 'img/fries.png'
        },
        {
            name: 'fries',
            img: 'img/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'img/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'img/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'img/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'img/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'img/pizza.png'
        },
        {
            name: 'pizza',
            img: 'img/pizza.png'
        }
    ];

    //Randomly sort cardsArray
    cardArray.sort(() => 0.5 - Math.random());

    const gameGrid = document.querySelector('#game-grid');
    const score = document.querySelector('#score');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //Create the game board
    function createBoard() {
        for(let i=0;i<cardArray.length;i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'img/blank.png');
            card.setAttribute('card-id', i);
            card.addEventListener('click', flipCard);
            gameGrid.appendChild(card);
        }
    }

    //Flip Cards
    function flipCard() {
        let cardId = this.getAttribute('card-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    //When two cards have been chosen, check to see if they match
    //Set card images to white if correct or back to blank if incorrect
    //Update score
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'img/white.png');
            cards[optionTwoId].setAttribute('src', 'img/white.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'img/blank.png');
            cards[optionTwoId].setAttribute('src', 'img/blank.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        if (cardsWon.length === cardArray.length / 2) {
            score.textContent = 'Congratulations, you won!';
        } else {
            score.textContent = cardsWon.length;
        }
    }

    createBoard();

});
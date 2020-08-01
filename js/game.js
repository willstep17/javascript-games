document.addEventListener('DOMContentLoaded', () => {

    let cardsChosen = [];
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

    const gameGrid = document.querySelector('#game-grid');

    //Create the game board
    function createBoard() {
        for(let i=0;i<cardArray.length;i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'img/blank.png');
            card.setAttribute('card-id', i);
            // card.addEventListener('click', flipCard);
            gameGrid.appendChild(card);
        }
    }

    //Flip Cards
    function flipCard() {
        let cardId = this.getAttribute('card-id');

    }

    createBoard();

});
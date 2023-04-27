window.onload = () => {
    let size, i;
    let numBox = 7;

    for (i = 0; i < numBox; i++) {

        let newSquare = document.createElement('div');
        newSquare.className = 'card';
        newSquare.id = 'card-' + i;

        size = 80 + i * 20;
        newSquare.style.width = size + 'px';
        newSquare.style.height = size + 'px';


        document.getElementById('game-board').appendChild(newSquare);
        console.log("w" + size)
    }

    document.getElementById('sq-layout3').addEventListener('click', function () {
        numBox = + 3;
        console.log("c" + size)
        for (let j = 0; j < numBox; j++) {

            let newSquare = document.createElement('div');
            newSquare.className = 'card';

            size = 80 + i * 20;
            newSquare.style.width = size + 'px';
            newSquare.style.height = size + 'px';
            i++

            document.getElementById('game-board').appendChild(newSquare);

        }
    });

    let firstCard = null;
    let secondCard = null;
    let canClick = true;
    const letters = ['A', 'B', 'C'];

    const shuffledLetters = shuffle(letters.concat(letters));

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click', onCardClick));

    function onCardClick() {
        if (!canClick || this.classList.contains('matched') || this.classList.contains('clicked')) {
            return;
        }

        this.classList.add('clicked');
        this.textContent = shuffledLetters[parseInt(this.id.slice(5))]; // Display the corresponding letter

        if (!firstCard) {
            firstCard = this;
        } else if (!secondCard) {
            secondCard = this;
            canClick = false;

            if (firstCard.textContent === secondCard.textContent) {
                setTimeout(() => {
                    firstCard.classList.remove('clicked');
                    secondCard.classList.remove('clicked');
                    firstCard.classList.add('matched');
                    secondCard.classList.add('matched');
                    firstCard = null;
                    secondCard = null;
                    canClick = true;
                }, 1000);
            } else {
                setTimeout(() => {
                    firstCard.textContent = '';
                    secondCard.textContent = '';
                    firstCard.classList.remove('clicked');
                    secondCard.classList.remove('clicked');
                    firstCard = null;
                    secondCard = null;
                    canClick = true;
                }, 1000);
            }
        }
    }

    function shuffle(array) {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


}
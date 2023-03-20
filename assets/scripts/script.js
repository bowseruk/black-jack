class Card {
    constructor(card, suit) {
        this.card = card;
    }
    set card(number) {
        switch(number){
        case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10:
            this.name = number;
            this.value = number;
            break;
        case 11:
            this.name = "Jack"
            this.value = 10;
            break;
        case 12:
            this.name = "Queen"
            this.value = 10;
            break;
        case 13:
            this.name = "King"
            this.value = 10;
            break;
        case 1: case 14:
            this.name = "Ace"
            this.value = 11;
    }
}

}
// This is the deck
var deck = [];
// These are the suites we are playing with
var suits = ["Clubs", "Diamonds", "Hearts", "Spades", ]
// Deck Generator
function deckGenerator(numberOfPacks, suits) {
    for (i = 0; i < numberOfPacks; i++) {
        for (j = 2; j < 15; j++) {
            let card = [];
            switch (j) {
                case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10:
                    card = [`${j}`, j];
                    break;
                case 11:
                    card = ["Jack", 10];
                    break;
                case 12:
                    card = ["Queen", 10];
                    break;
                case 13:
                    card = ["King", 10];
                    break;
                case 14:
                    card = ["Ace", 11];
            };
            for (k = 0; k < suits.length; k++) {
                let input = [suits[k], card[0], card[1]];
                deck.push(input);
            };
        };
    };
};

// CSM Shuufle -- continous shuffle - 

// Hand Shuffle -- Shuffle at set distance through shoe

// ASM Shuffle -- shuffle at end of shoe

function game() {
    // Player draws a card
    var player = drawCard();
    alert(`Player's first draw scores ${player}`);
    // Player draws second card
    player += drawCard();
    alert(`Player's second draw brings their score to ${player}`);
    // Dealer draws a card
    var dealer = drawCard();
    alert(`Dealer's first draw scores ${dealer}`);
    // Player sticks or twists
    while (player < 21) {
        if (!confirm("Do you want to hit?")) {
            alert(`Player is sticking`);
            break;
        }
        // Player draws second card
        player += drawCard();
        alert(`Player's draw brings their score to ${player}`);
    }
    if (player > 21) {
        alert(`Player is bust with a score of ${player}`);
        return
    }
    while (dealer < 17) {
        // Dealer draws a card
        dealer += drawCard();
        alert(`Dealer's draw brings their score to ${dealer}`);
    }
    if (dealer > 21) {
        alert(`Dealer is bust with a score of ${dealer}`);
        return
    }
    if (player > dealer) {
        alert(`Player has won with a score of ${player} over the dealer's ${dealer}`);
        return
    } else {
        alert(`Player has lost with a score of ${player} under the dealer's ${dealer}`);
        return
    }
}

deckGenerator(4, suits)
console.log(deck)
// game()

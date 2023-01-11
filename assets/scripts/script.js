// Random Number Generator
function generateNumber(min, max) {
    // Times the random generator by the range of values needed and add the minimum
    return Math.floor(Math.random() * (max - min) + min)
}

// Random Card Generator
function drawCard() {
    // The card has higher probability of being ten due to the number of face cards
    card = generateNumber(2, 14);
    // If the card is a face card, change the value to 10
    if (card >= 11 && card < 14) {
        card = 10;
    } else if (card == 14) {
        // Change the ace to an 11 value
        card = 11;
    }
    return card;
}

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

game()
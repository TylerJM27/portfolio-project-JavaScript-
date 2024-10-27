function rollDice() {
    let points = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1; 
        alert('You rolled a '+ roll + '.');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if (roll === 4 || roll === 6) {
            continue;
        }
        alert('Congratulations, you win ' + roll + ' points!');
        points += roll;
    }
    alert('You have won a total of ' + points + ' points!')
}
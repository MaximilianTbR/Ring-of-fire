export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public currentCard: string = '';
    public pickCardAnimation: boolean = false;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push(i + '_of_spades.png')
            this.stack.push(i + '_of_clubs.png')
            this.stack.push(i + '_of_diamonds.png')
            this.stack.push(i + '_of_hearts.png')
        }
        shuffle(this.stack);
    }

    public toJSON() {
        return {
            players: this.players,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            currentCard: this.currentCard,
            pickCardAnimation: this.pickCardAnimation
        }
    }
}

function shuffle(array: any) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element...
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
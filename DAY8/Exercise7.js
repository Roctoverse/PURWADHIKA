class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        let choice = [0,10]
        const health = choice[Math.round(Math.random() * 1)] 
        const power = choice[Math.round(Math.random() * 1)] 
        return { health : health, power: power}
    }
    start() {
        let counter = 1
        while(this.player1.health <= 0 || this.player2.health <= 0){
            console.log(`\n`);
            console.log(` ===TURN ${counter} ===`)
            console.log("-- status");
            console.log(this.player1);
            console.log(this.player2);
            console.log("--- get item ---");
            let randomItem1 = this.getRandomItem();
            this.player1.useItem(randomItem1);
            console.log("player 1 get item => ", randomItem1);
            let randomItem2 = this.getRandomItem();
            this.player2.useItem(randomItem2);
            console.log("player 2 get item =>", randomItem2);
            console.log("--- start shoot---");
            this.player2.health = this.player2.health - this.player1.hit();
            this.player1.health = this.player1.health - this.player2.hit()

            console.log("--- aftermate ---");


            console.log("--- End Turn---");
            counter++;
        }
    }

    
}

class Player {
    name = " ";
    health = 0;
    power = 0;

    constructor(name) {
        this.name = name;
        this.health = health
    }

    hit(power, player) {
        player.health = player.health - power;
    }

    useItem(item) {
        this.health = this.health + item.health;
        this.power = this.power + item.power;
    }

    showStatus() {
        return this;
    }
}

let player1 = new Player("Aries")
let player2 = new Player("Roland")



export class Roller extends Phaser.GameObjects.Container {

    constructor() {
        super();

        let wheel = new Wheel();
    }
}

export class Wheel {

    constructor(scene, x, y) {
        // super();
        this.scene = scene;
        let box = this.add.Container(x,y);

        let symArray = [];
        for (let i = 0; i < 6; i++) {
            symArray.push(this.addSymbol(1 + Math.floor(Math.random()*9)));
            symArray[i].scale.set(0.5);
            symArray[i].y = i*50;
        }
    }

    addSymbol = (card) => {
        if (typeof card === 'number') {
            this.add.sprite(0,0,'mario' + card);
        }
    }
}
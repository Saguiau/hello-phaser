class Wheel extends PIXI.Container {

    constructor() {
        super();

        let mask = new PIXI.Graphics();
        mask.beginFill(0xff0000, 0.5);
        mask.drawRect(0,0, 215,215);
        mask.endFill();
        this.addChild(mask);
        mask.y = 305;
        this.mask = mask;

        let symArray = [];
        for (let i = 0; i < 6; i++) {
            symArray.push(this.addSymbol(1 + Math.floor(Math.random()*9)));
            symArray[i].scale.set(0.5);
            symArray[i].y = i*215;
        }
    }

    addSymbol = (card) => {
        if (typeof card === 'number') {
            let sym = this.addChild(PIXI.Sprite.fromImage('assets/mario' + card + '.png'));
            return sym;
        }
    }
}
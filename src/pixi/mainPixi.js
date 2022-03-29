
/**
 * PIXI 
 */

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



class Main {

    constructor(width,height) {
        
        let app = new PIXI.Application({width: width, height: height});
        document.body.appendChild(app.view);

        let container = new PIXI.Container(); //創建容器
        let bg = new PIXI.Sprite.fromImage('assets/bgOne.png'); //載入圖片
        bg.scale.set(0.5);
        app.stage.addChild(container);
        container.addChild(bg);

        let wheel = new Wheel();
        wheel.x = 370;
        container.addChild(wheel);
        
    }
}

new Main(1920,1080);

 
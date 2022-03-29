/**
 * Phaser canvas
 */

class Example extends Phaser.Scene {

    
    preload ()
    {
        this.load.image('bg', 'assets/bgOne.png');
        for (let i = 1; i < 10; i++) {
            this.load.image('mario'+i, 'assets/mario' + i + '.png');
        }
    }
    
    create ()
    {
        this.DISTANCE = 400;

        console.log(game);
        let bg = this.add.sprite(0, 0, 'bg').setOrigin(0, 0);
        bg.setScale(0.5);
        // bg.setPosition(bg.width*bg.scaleX/2,bg.height*bg.scaleY/2);
        console.log(bg);
    
        this.wheel = this.add.container();
        console.log(this.wheel);
        for (let i = 0; i < 3; i++) {
            let sym = this.add.sprite(0, this.DISTANCE*i, 'mario' + (i+1));//Math.ceil(Math.random()*9));
            this.wheel.add(sym);
        }
        let sym = this.add.sprite(0, this.DISTANCE*3, 'mario1');
        this.wheel.add(sym);

        this.wheel.setPosition(480, -200);
        this.wheel.setScale(0.5);
    
        let shape = this.make.graphics();
        shape.beginPath();
        shape.fillStyle(0xff0000, 0.5);
        shape.fillRect(480 - 215/2, 305, 215, 205);
        shape.closePath();
    
        let mask = shape.createGeometryMask();
        this.wheel.setMask(mask);
    
        // this.input.on('pointerup', roller = ()=>{
        this.tween = this.tweens.add({
            targets: this.wheel,
            y: 400,
            duration: 300,
            yoyo: false,
            repeat: -1,
            paused:true
        })
        this.input.on('pointerdown', ()=> {
            if (!this._click) {
                this._click = true;
                this.tween.resume();
                this._card = Math.ceil(Math.random()*3);
                console.log('CARD = ' + this._card);
            }
            else {
                this.tween.pause();
                // this._click = false;
                this.slowDown();
            }
        });
        // })
    }
    slowDown() {
        console.log('start slow');
        this.tween.updateTo('duration', 500, true);
        this.tween.updateTo('repeat', 1, true);
        let Y = (this._card -1)*this.DISTANCE;
        if (!this.tween.isPlaying()) {
            
            console.log('slow end');
            this.tweens.add({
                targets: this.wheel,
                y: Y,
                duration: 800
            });
            this._click = false;
        }

    }

    update() {
        if (this._click && !this.tween.isPlaying()) {

            // console.log(this.wheel.list[0].y);
            // console.log(this.wheel.list[1].y);
            // console.log(this.wheel.list[2].y);
        }
    }
}

const myCustomCanvas = document.createElement('canvas');
myCustomCanvas.id = 'myCustomCanvas';
// myCustomCanvas.style = 'border: 8px solid red';
// document.body.appendChild(myCustomCanvas);

const config = {
    type: Phaser.CANVAS,
    width: 1920,
    height: 1080,
    canvas: document.getElementById('myCustomCanvas'),
    scene: [ Example ],
    scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	}
};

const game = new Phaser.Game(config);




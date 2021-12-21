class Brick {
    constructor(game, position) {
        this.game = game
        this.brickImg = document.getElementById('brick');
        
        this.position = {
            x: position.x,
            y: position.y
        }

        this.width = 80,
        this.height = 30

        this.isCollision = false;
    }

    update(dt) {
        if(detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.isCollision = true;
        }
    }

    draw(ctx) {
            ctx.drawImage(this.brickImg, this.position.x, this.position.y, this.width, this.height);
    }
}
class Ball {
    constructor (game) {
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.ballImg = document.getElementById('ball');

        this.ballSize = {
            width: 20,
            height: 20
        }

        this.speed = {
            x: 5,
            y: 5
        }

        this.reset();
    }

    draw(ctx) {
        ctx.drawImage(this.ballImg, this.position.x, this.position.y, this.ballSize.width, this.ballSize.height);
    }

    reset() {
        this.position = {
            x: this.game.paddle.position.x + this.game.paddle.width/2,
            y: this.game.paddle.position.y
        };
    }

    update(dt) {
        // if (!dt) return;

        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // ball collision to left & right side of the wall
        if (this.position.x + this.ballSize.width > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        // ball collision to top & bottom side of the wall
        if (this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }

        // ball hit the
        if (this.position.y + this.ballSize.height > this.gameHeight) {
            this.game.gameLives--;
            this.reset();
        }

        // ball collision
        if (detectCollision(this, game.paddle)) {
                this.speed.y = -this.speed.y;
                this.position.y = this.game.paddle.position.y - this.ballSize.height;
            }
    }
} 
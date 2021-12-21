const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEXTLEVEL: 4,
    GAMECOMPLETED: 5
}

class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameLives = 3;

        this.currentLevel = 0;
        this.gameObjects = [];
        this.bricks = [];
        this.levels = [level_1, level_2]
        this.gameState = GAMESTATE.MENU;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        new InputHandler(this.paddle, this);
    }

    start() {
        if (this.gameState != GAMESTATE.MENU && this.gameState != GAMESTATE.NEXTLEVEL) return;

        if (this.currentLevel == this.levels.length) {
            this.currentLevel = 0;
            this.gameState = GAMESTATE.GAMECOMPLETED;
            return;
        }

        this.level = new Level(this);
        this.bricks = this.level.genrateLevels(this.levels[this.currentLevel])


        this.gameObjects = [
            this.paddle,
            this.ball
        ];

        this.gameState = GAMESTATE.RUNNING;
        this.ball.reset();
    }

    update(dt) {
        if (this.gameState == GAMESTATE.PAUSED || this.gameState == GAMESTATE.MENU || this.gameState == GAMESTATE.GAMEOVER || this.gameState == GAMESTATE.GAMECOMPLETED) return
        if (this.gameLives == 0) {
            this.gameState = GAMESTATE.GAMEOVER;
        }

        if (this.bricks.length == 0) {
            this.currentLevel++;
            this.gameState = GAMESTATE.NEXTLEVEL;
            this.start();
        }

        [...this.gameObjects, ...this.bricks].forEach(obj => obj.update(dt));
        this.bricks = this.bricks.filter(brick => !brick.isCollision);
    }

    draw(ctx) {
        [...this.gameObjects, ...this.bricks].forEach(obj => obj.draw(ctx));

        // GAME STATES
        // PAUSED
        if (this.gameState == GAMESTATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = 'center';
            ctx.fillText('Paused!', this.gameWidth / 2, this.gameHeight / 2);
        }

        // GAME MENU
        if (this.gameState == GAMESTATE.MENU) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = 'center';
            ctx.fillText('PRESS ENTER! TO START', this.gameWidth / 2, this.gameHeight / 2);
        }

        // GAME OVER
        if (this.gameState == GAMESTATE.GAMEOVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = 'center';
            ctx.fillText('GAME OVER', this.gameWidth / 2, this.gameHeight / 2);
        }

        // GAME COMPLETED
        if (this.gameState == GAMESTATE.GAMECOMPLETED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = 'center';
            ctx.fillText('WON!!!', this.gameWidth / 2, this.gameHeight / 2);
        }
    }

    togglePause() {
        if (this.gameState == GAMESTATE.MENU) return;
        if (this.gameState == GAMESTATE.PAUSED) {
            this.gameState = GAMESTATE.RUNNING;
        } else {
            this.gameState = GAMESTATE.PAUSED;
        }
    }
}
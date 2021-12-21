let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const canvasSize = {
    width: 1000,
    height: 800
}

let game = new Game(canvasSize.width, canvasSize.height);
// game.start();

let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp/lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0,0,canvasSize.width, canvasSize.height);

    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)
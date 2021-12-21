class InputHandler {
    constructor(paddle, game) {
        document.addEventListener('keydown', e => {
            let keyCode = e.keyCode
            switch(keyCode) {
                case 37: {
                    //  left
                    paddle.moveLeft();
                    break;
                }
                case 39: {
                    // right
                    paddle.moveRight();
                    break;
                }
                case 32: {
                    // toggle pause
                    game.togglePause();
                    break;
                }
                case 13: {
                    // game menu
                    game.start();
                }
            }
        })

        document.addEventListener('keyup', e => {
            let keyCode = e.keyCode
            switch(keyCode) {
                case 37: {
                    //  left
                    if (paddle.speed < 0)
                    paddle.stop();
                    break;
                }
                case 39: {
                    // right
                    if (paddle.speed > 0)
                    paddle.stop();
                    break;
                }
            }
        })
    }
}
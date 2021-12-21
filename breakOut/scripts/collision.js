function detectCollision(ball, gameObj) {
    // ball dimensions
    let topOfBall = ball.position.y;
    let bottomOfBall = ball.position.y + ball.ballSize.height;
    let leftOfBall = ball.position.x;
    let rigthOfBall = ball.position.x + ball.ballSize.width;

    // object dimensions
    let topOfObj = gameObj.position.y;
    let bottomOfObj = gameObj.position.y + gameObj.height;
    let leftOfObj = gameObj.position.x;
    let rightOfObj = gameObj.position.x + gameObj.width;


    // check for Collisions
    if (
        topOfBall <= bottomOfObj &&
        bottomOfBall >= topOfObj &&
        leftOfBall >= leftOfObj &&
        rigthOfBall <= rightOfObj
    ) {
        return true;
    } else {
        return false;
    }
}
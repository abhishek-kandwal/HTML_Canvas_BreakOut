class Level {
    constructor(game) {
        this.game = game;
    }
    
    genrateLevels (level) {
        let bricks = []
        level.forEach((row, rowIndex) => {

            row.forEach((brick, index) => {
                let position = {
                    x: 80 * index,
                    y: 90 + 30 * rowIndex
                }

                if (brick == 1) {
                    bricks.push(new Brick(this.game, position));
                }
            })
        })
    
        return bricks;
    }
}

let level_1 = [
    [0,1,0,1,0,1,0,0,1],
    [1,1,1,1,0,1,1,1,1],
    [0,1,0,1,0,1,0,0,1],
    [0,0,0,0,0,0,0,0,1]
];

let level_2 = [
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,0,1,1,1,1],
    [0,1,0,1,0,1,0,0,1],
    [0,1,0,0,0,0,0,0,0]
];

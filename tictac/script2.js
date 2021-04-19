let board = {
    game: undefined,
    x: 0,
    y: 30,
    width: 300, // min 260
    height: 300,
    rows: 3,
    cols: 3,
    numInRowToWin: 3,
    autoRestart: 1,
    players: {
        1: {
            name: 'Player 1',
            score: 0,
            ai: 0
        },
        2: {
            name: 'Player 2',
            score: 0,
            ai: 0
        }
    },
    pause: false,
    gamesPlayed: 0
};
let statusBar = {
    x: 0,
    y: 0,
    width: board.width,
    height: 30,
    text: '',
    getScore: function() { return board.players[1].score + ' - ' + board.players[2].score; },
    getGamesPlayed: function() { return board.gamesPlayed; }
};
let settingsBar = {
    x: 0,
    y: board.y + board.height,
    width: board.width,
    height: 150,
    sliders: {
        width: {
            slider: undefined,
            min: 260,
            getMax: function() { return windowWidth; },
            value: 300,
            step: 10,
            label: 'Width',
            position: {
                getX: function() { return settingsBar.x + 2; },
                getY: function() { return settingsBar.y + 15; },
            },
            style: {
                getWidth: function() { return (settingsBar.width / 2) - 4; }
            }
        },
        height: {
            slider: undefined,
            min: 260,
            getMax: function() { return windowHeight - statusBar.height - settingsBar.height; },
            value: 300,
            step: 10,
            label: 'Height',
            position: {
                getX: function() { return settingsBar.x + 2; },
                getY: function() { return settingsBar.y + 45; }, // 30 more than width-slider since this slider sits below the width slider.
            },
            style: {
                getWidth: function() { return (settingsBar.width / 2) - 4; }
            }
        },
        rows: {
            slider: undefined,
            min: 2,
            max: 100,
            value: 3,
            step: 1,
            label: 'Rows',
            position: {
                getX: function() { return settingsBar.x + 2; },
                getY: function() { return settingsBar.y + 75; }, // 30 more than height-slider since this slider sits below the width slider.
            },
            style: {
                getWidth: function() { return (settingsBar.width / 2) - 4; }
            }
        },
        cols: {
            slider: undefined,
            min: 2,
            max: 100,
            value: 3,
            step: 1,
            label: 'Cols',
            position: {
                getX: function() { return settingsBar.x + 2; },
                getY: function() { return settingsBar.y + 105; }, // 30 more than rows-slider since this slider sits below the width slider.
            },
            style: {
                getWidth: function() { return (settingsBar.width / 2) - 4; }
            }
        },
        numInRowToWin: {
            slider: undefined,
            min: 2,
            getMax: function() { return settingsBar.sliders.rows.max >= settingsBar.sliders.cols.max ? settingsBar.sliders.rows.max : settingsBar.sliders.cols.max; },
            value: 3,
            step: 1,
            label: 'Num in row to win',
            position: {
                getX: function() { return settingsBar.x + settingsBar.sliders.width.style.getWidth() + 4; },
                getY: function() { return settingsBar.y + 15; },
            },
            style: {
                getWidth: function() { return (settingsBar.width / 2) - 6; }
            }
        },
        player1AI: {
            slider: undefined,
            min: 0,
            max: 1,
            value: 0,
            step: 1,
            label: 'Player 1',
            position: {
                getX: function() { return settingsBar.x + settingsBar.sliders.width.style.getWidth() + 4; },
                getY: function() { return settingsBar.y + 45; }, // 30 more than numInRowToWin-slider since this slider sits below the width slider.
            },
            style: {
                getWidth: function() { return (settingsBar.width / 2) - 6; }
            }
        },
        player2AI: {
            slider: undefined,
            min: 0,
            max: 1,
            value: 0,
            step: 1,
            label: 'Player 2',
            position: {
                getX: function() { return settingsBar.x + settingsBar.sliders.width.style.getWidth() + 4; },
                getY: function() { return settingsBar.y + 75; }, // 30 more than player1AI-slider since this slider sits below the width slider.
            },
            style: {
                getWidth: function() { return (settingsBar.width / 2) - 6; }
            }
        },
        autoRestart: {
            slider: undefined,
            min: 0,
            max: 1,
            value: 1,
            step: 1,
            label: 'Auto restart',
            position: {
                getX: function() { return settingsBar.x + settingsBar.sliders.width.style.getWidth() + 4; },
                getY: function() { return settingsBar.y + 105; }, // 30 more than player2AI-slider since this slider sits below the width slider.
            },
            style: {
                getWidth: function() { return (settingsBar.width / 2) - 6; }
            }
        }
    },
    resetButton: {
        getX: function() { return settingsBar.x; },
        getY: function() { return settingsBar.y + 125 },
        getWidth: function() { return settingsBar.width },
        height: 25,
        label: 'Reset'
    }
};
let colors = {
    bg: [237,106,90],
    bars: [39,48,67],
    squares: [236,191,192],
    resetButton: [221,4,38],
    // stroke: [145,151,174],
    stroke: [237,106,90],
    winnerLine: [71,137,120,230]
};
let fonts = {
    base: 'Courier New'
};

function newGame(callback = undefined) {
    board.game = new Game(board.x, board.y, board.width, board.height, board.rows, board.cols, board.numInRowToWin, board.autoRestart);
    board.pause = false;
    if (callback) { callback(); }
}

function initializePositions(callback = undefined) {
    statusBar.x = (windowWidth / 2) - (board.width / 2);
    statusBar.width = board.width;
    board.x = (windowWidth / 2) - (board.width / 2);
    board.y = statusBar.y + statusBar.height;
    settingsBar.x = (windowWidth / 2) - (board.width / 2);
    settingsBar.y = board.y + board.height;
    settingsBar.width = board.width;
    if (callback) { callback(); }
}

function initializeSettingsSliders(callback = undefined) {
    // width-slider
    settingsBar.sliders.width.slider = createSlider(settingsBar.sliders.width.min, settingsBar.sliders.width.getMax(), settingsBar.sliders.width.value, settingsBar.sliders.width.step);
    settingsBar.sliders.width.slider.position(settingsBar.sliders.width.position.getX(), settingsBar.sliders.width.position.getY());
    settingsBar.sliders.width.slider.style('width', settingsBar.sliders.width.style.getWidth().toString() + 'px');
    // heigth-slider
    settingsBar.sliders.height.slider = createSlider(settingsBar.sliders.height.min, settingsBar.sliders.height.getMax(), settingsBar.sliders.height.value, settingsBar.sliders.height.step);
    settingsBar.sliders.height.slider.position(settingsBar.sliders.height.position.getX(), settingsBar.sliders.height.position.getY());
    settingsBar.sliders.height.slider.style('width', settingsBar.sliders.height.style.getWidth().toString() + 'px');
    // rows-slider
    settingsBar.sliders.rows.slider = createSlider(settingsBar.sliders.rows.min, settingsBar.sliders.rows.max, settingsBar.sliders.rows.value, settingsBar.sliders.rows.step);
    settingsBar.sliders.rows.slider.position(settingsBar.sliders.rows.position.getX(), settingsBar.sliders.rows.position.getY());
    settingsBar.sliders.rows.slider.style('width', settingsBar.sliders.rows.style.getWidth().toString() + 'px');
    // cols-slider
    settingsBar.sliders.cols.slider = createSlider(settingsBar.sliders.cols.min, settingsBar.sliders.cols.max, settingsBar.sliders.cols.value, settingsBar.sliders.cols.step);
    settingsBar.sliders.cols.slider.position(settingsBar.sliders.cols.position.getX(), settingsBar.sliders.cols.position.getY());
    settingsBar.sliders.cols.slider.style('width', settingsBar.sliders.cols.style.getWidth().toString() + 'px');
    // numInRowToWin-slider
    settingsBar.sliders.numInRowToWin.slider = createSlider(settingsBar.sliders.numInRowToWin.min, settingsBar.sliders.numInRowToWin.getMax(), settingsBar.sliders.numInRowToWin.value, settingsBar.sliders.numInRowToWin.step);
    settingsBar.sliders.numInRowToWin.slider.position(settingsBar.sliders.numInRowToWin.position.getX(), settingsBar.sliders.numInRowToWin.position.getY());
    settingsBar.sliders.numInRowToWin.slider.style('width', settingsBar.sliders.numInRowToWin.style.getWidth().toString() + 'px');
    // player1AI-slider
    settingsBar.sliders.player1AI.slider = createSlider(settingsBar.sliders.player1AI.min, settingsBar.sliders.player1AI.max, settingsBar.sliders.player1AI.value, settingsBar.sliders.player1AI.step);
    settingsBar.sliders.player1AI.slider.position(settingsBar.sliders.player1AI.position.getX(), settingsBar.sliders.player1AI.position.getY());
    settingsBar.sliders.player1AI.slider.style('width', settingsBar.sliders.player1AI.style.getWidth().toString() + 'px');
    settingsBar.sliders.player1AI.slider.attribute('disabled', 'disabled');
    // player2AI-slider
    settingsBar.sliders.player2AI.slider = createSlider(settingsBar.sliders.player2AI.min, settingsBar.sliders.player2AI.max, settingsBar.sliders.player2AI.value, settingsBar.sliders.player2AI.step);
    settingsBar.sliders.player2AI.slider.position(settingsBar.sliders.player2AI.position.getX(), settingsBar.sliders.player2AI.position.getY());
    settingsBar.sliders.player2AI.slider.style('width', settingsBar.sliders.player2AI.style.getWidth().toString() + 'px');
    settingsBar.sliders.player2AI.slider.attribute('disabled', 'disabled');
    // autoRestart-slider
    settingsBar.sliders.autoRestart.slider = createSlider(settingsBar.sliders.autoRestart.min, settingsBar.sliders.autoRestart.max, settingsBar.sliders.autoRestart.value, settingsBar.sliders.autoRestart.step);
    settingsBar.sliders.autoRestart.slider.position(settingsBar.sliders.autoRestart.position.getX(), settingsBar.sliders.autoRestart.position.getY());
    settingsBar.sliders.autoRestart.slider.style('width', settingsBar.sliders.autoRestart.style.getWidth().toString() + 'px');
    if (callback) { callback(); }
}

function initialize(callback = undefined) {
    push();
    fill(colors.bg);
    noStroke();
    rect(0,0,windowWidth,windowHeight);
    pop();
    initializePositions(function(){
        initializeSettingsSliders(function(){
            if (callback) { newGame(callback); }
            else { newGame(); }
        });
    });
}

function drawStatusBar() {
    if (board.game.winner && Array.isArray(board.game.winner)) {
        statusBar.text = board.players[board.game.winner[0].player].name + ' Wins!';
    } else if (board.game.winner && typeof board.game.winner === 'string' && board.game.winner === 'tie') {
        statusBar.text = 'TIE';
    } else {
        statusBar.text = board.players[board.game.currentPlayer].name + '\'s turn';
    }
    push();
    textFont(fonts.base);
    fill(colors.bars);
    stroke(colors.stroke);
    strokeWeight(4);
    rect(statusBar.x, statusBar.y, statusBar.width, statusBar.height, 20, 20, 0, 0);
    // status text
    strokeWeight(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(15);
    text(statusBar.text, statusBar.x, statusBar.y, statusBar.width, statusBar.height);
    // score
    if (board.autoRestart === 1) {
        textAlign(RIGHT, CENTER);
        text(statusBar.getScore(), statusBar.x + (statusBar.width / 2), statusBar.y, (statusBar.width / 2) - 10, statusBar.height);
        textAlign(LEFT, CENTER);
        text(statusBar.getGamesPlayed(), statusBar.x + 10, statusBar.y, (statusBar.width / 2) - 10, statusBar.height);
    }
    pop();
}

function drawBoard() {
    push();
    textFont(fonts.base);
    fill(colors.squares);
    stroke(colors.stroke);
    strokeWeight(4);
    // board
    rect(board.x, board.y, board.width, board.height);
    // divider lines between squares
    for (let lineNum = 0;lineNum < board.game.dividers.length;lineNum++) {
        line(board.game.dividers[lineNum].x1, board.game.dividers[lineNum].y1, board.game.dividers[lineNum].x2, board.game.dividers[lineNum].y2);
    }
    // x's and o's
    strokeWeight(8);
    for (let row = 0;row < board.game.squares.length;row++) {
        for (let col = 0;col < board.game.squares[row].length;col++) {
            if (board.game.squares[row][col].player) {
                if (board.game.squares[row][col].player === 1) {
                    // draw x
                    let x1 = board.game.squares[row][col].x + (0.1 * board.game.squares[row][col].width);
                    let y1 = board.game.squares[row][col].y + (0.1 * board.game.squares[row][col].height);
                    let x2 = board.game.squares[row][col].x - (0.1 * board.game.squares[row][col].width) + board.game.squares[row][col].width;
                    let y2 = board.game.squares[row][col].y - (0.1 * board.game.squares[row][col].height) + board.game.squares[row][col].height;
                    line(x1, y1, x2, y2);
                    x1 = board.game.squares[row][col].x - (0.1 * board.game.squares[row][col].width) + board.game.squares[row][col].width;
                    y1 = board.game.squares[row][col].y + (0.1 * board.game.squares[row][col].height);
                    x2 = board.game.squares[row][col].x + (0.1 * board.game.squares[row][col].width);
                    y2 = board.game.squares[row][col].y - (0.1 * board.game.squares[row][col].height) + board.game.squares[row][col].height;
                    line(x1, y1, x2, y2);
                }
                if (board.game.squares[row][col].player === 2) {
                    // draw o
                    let x = board.game.squares[row][col].x + (0.1 * board.game.squares[row][col].width);
                    let y = board.game.squares[row][col].y + (0.1 * board.game.squares[row][col].height);
                    let width = board.game.squares[row][col].width - (0.2 * board.game.squares[row][col].width);
                    let height = board.game.squares[row][col].height - (0.2 * board.game.squares[row][col].height);
                    ellipseMode(CORNER);
                    ellipse(x, y, width, height);
                }
            }
        }
    }
    // winner line
    if (board.game.winner && Array.isArray(board.game.winner)) {
        x1 = board.game.winner[0].middle.x;
        y1 = board.game.winner[0].middle.y;
        x2 = board.game.winner[board.game.winner.length - 1].middle.x;
        y2 = board.game.winner[board.game.winner.length - 1].middle.y;
        stroke(colors.winnerLine);
        strokeWeight(12);
        line(x1, y1, x2, y2);
    }
    pop();
}

function drawSettingsBar() {
    push();
    textFont(fonts.base);
    // bar
    fill(colors.bars);
    stroke(colors.stroke);
    strokeWeight(4);
    rect(settingsBar.x,settingsBar.y,settingsBar.width,settingsBar.height, 0, 0, 20, 20);
    strokeWeight(0);
    // sliders
    fill(255);
    textSize(11);
    textAlign(LEFT, BASELINE);
    let textXOffset = settingsBar.width * 0.01;
    // width-slider
    text(settingsBar.sliders.width.label + ': ' + settingsBar.sliders.width.slider.value(), settingsBar.sliders.width.position.getX() + textXOffset, settingsBar.sliders.width.position.getY());
    // height-slider
    text(settingsBar.sliders.height.label + ': ' + settingsBar.sliders.height.slider.value(), settingsBar.sliders.height.position.getX() + textXOffset, settingsBar.sliders.height.position.getY());
    // rows-slider
    text(settingsBar.sliders.rows.label + ': ' + settingsBar.sliders.rows.slider.value(), settingsBar.sliders.rows.position.getX() + textXOffset, settingsBar.sliders.rows.position.getY());
    // cols-slider
    text(settingsBar.sliders.cols.label + ': ' + settingsBar.sliders.cols.slider.value(), settingsBar.sliders.cols.position.getX() + textXOffset, settingsBar.sliders.cols.position.getY());
    // numInRowToWin-slider
    text(settingsBar.sliders.numInRowToWin.label + ': ' + settingsBar.sliders.numInRowToWin.slider.value(), settingsBar.sliders.numInRowToWin.position.getX() + textXOffset, settingsBar.sliders.numInRowToWin.position.getY());
    // player1AI-slider
    let translatePlayer1AISettingValue = settingsBar.sliders.player1AI.slider.value() === 0 ? 'Human' : 'AI';
    text(settingsBar.sliders.player1AI.label + ': ' + translatePlayer1AISettingValue, settingsBar.sliders.player1AI.position.getX() + textXOffset, settingsBar.sliders.player1AI.position.getY());
    // player2AI-slider
    let translatePlayer2AISettingValue = settingsBar.sliders.player2AI.slider.value() === 0 ? 'Human' : 'AI';
    text(settingsBar.sliders.player2AI.label + ': ' + translatePlayer2AISettingValue, settingsBar.sliders.player2AI.position.getX() + textXOffset, settingsBar.sliders.player2AI.position.getY());
    // player2AI-slider
    let translateAutoRestartSettingValue = settingsBar.sliders.autoRestart.slider.value() === 0 ? 'No' : 'Yes';
    text(settingsBar.sliders.autoRestart.label + ': ' + translateAutoRestartSettingValue, settingsBar.sliders.autoRestart.position.getX() + textXOffset, settingsBar.sliders.autoRestart.position.getY());
    // resetButton
    fill(colors.resetButton);
    stroke(colors.stroke);
    strokeWeight(4);
    rect(settingsBar.resetButton.getX(),settingsBar.resetButton.getY(),settingsBar.resetButton.getWidth(),settingsBar.resetButton.height, 0, 0, 20, 20);
    strokeWeight(0);
    fill(255);
    textSize(15);
    textAlign(CENTER, CENTER);
    text(settingsBar.resetButton.label, settingsBar.resetButton.getX(), settingsBar.resetButton.getY(), settingsBar.resetButton.getWidth(), settingsBar.resetButton.height);
    pop();
}

function resetSketch(callback = undefined) {
    // update the settings
    board.width = settingsBar.sliders.width.slider.value();
    board.height = settingsBar.sliders.height.slider.value();
    board.rows = settingsBar.sliders.rows.slider.value();
    board.cols = settingsBar.sliders.cols.slider.value();
    board.numInRowToWin = settingsBar.sliders.numInRowToWin.slider.value();
    board.players[1].ai = settingsBar.sliders.player1AI.slider.value();
    board.players[2].ai = settingsBar.sliders.player2AI.slider.value();
    board.autoRestart = settingsBar.sliders.autoRestart.slider.value();
    // reflect the updated settings in the sliders
    settingsBar.sliders.width.value = settingsBar.sliders.width.slider.value();
    settingsBar.sliders.height.value = settingsBar.sliders.height.slider.value();
    settingsBar.sliders.rows.value = settingsBar.sliders.rows.slider.value();
    settingsBar.sliders.cols.value = settingsBar.sliders.cols.slider.value();
    settingsBar.sliders.numInRowToWin.value = settingsBar.sliders.numInRowToWin.slider.value();
    settingsBar.sliders.player1AI.value = settingsBar.sliders.player1AI.slider.value();
    settingsBar.sliders.player2AI.value = settingsBar.sliders.player2AI.slider.value();
    settingsBar.sliders.autoRestart.value = settingsBar.sliders.autoRestart.slider.value();
    // clear the statusBar text
    statusBar.text = '';
    // reset score
    board.players[1].score = 0;
    board.players[2].score = 0;
    // reset games played
    board.gamesPlayed = 0;
    // remove the sliders (as these will not be removed by the resetting of the game)
    settingsBar.sliders.width.slider.remove();
    settingsBar.sliders.height.slider.remove();
    settingsBar.sliders.rows.slider.remove();
    settingsBar.sliders.cols.slider.remove();
    settingsBar.sliders.numInRowToWin.slider.remove();
    settingsBar.sliders.player1AI.slider.remove();
    settingsBar.sliders.player2AI.slider.remove();
    settingsBar.sliders.autoRestart.slider.remove();
    initialize(callback);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    initialize();
}

function draw() {
    if (!board.pause) {
        drawBoard();
        if (board.game.winner) {
            board.pause = true;
            if (Array.isArray(board.game.winner)) {
                board.players[board.game.winner[0].player].score++;
            }
            // start new game if applicable
            if (board.autoRestart === 1) {
                setTimeout(newGame, 1500);
                board.gamesPlayed++;
            }
        }
    }
    drawStatusBar();
    drawSettingsBar();
}

function mousePressed() {
    // clicked on resetButton
    if (mouseX > settingsBar.resetButton.getX() && mouseX < settingsBar.resetButton.getX() + settingsBar.resetButton.getWidth() && mouseY > settingsBar.resetButton.getY() && mouseY < settingsBar.resetButton.getY() + settingsBar.resetButton.height) {
        // pause the game
        board.pause = true;
        // stop drawing
        noLoop();
        // little nasty to use a timeout here but even with the callbacks, the mouse click used to click the reset
        // button is also registered as a click on the board (if the board height has been increased). This caused
        // clicking the reset button to also click a square at the same time. Delaying the reset for even a ms helps :).
        setTimeout(function(){
            // reset the game, start drawing again
            resetSketch(loop);
        }, 1);
    }
    // click on the board
    if (!board.pause && mouseX > board.x && mouseX < board.x + board.width && mouseY > board.y && mouseY < board.y + board.height) {
        // stop drawing
        noLoop();
        let row = floor((mouseY - board.y) / (board.height / board.rows));
        let col = floor((mouseX - board.x) / (board.width / board.cols));
        let nextPlayer = board.game.currentPlayer + 1 > Object.keys(board.players).length ? 1 : 2;
        let Square = board.game.squares[row][col];
        // update the game with the move made and start drawing again
        board.game.update(board.game.currentPlayer, nextPlayer, Square, loop);
    }
}
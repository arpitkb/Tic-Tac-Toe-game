let squares, message;
let currSign, isGameOver, isDraw, moves;
let stbtn;

function getElements() {
    squares = document.querySelectorAll('.sqbox');
    message = document.querySelector('.message');
    stbtn = document.querySelector('.btn')
    isGameOver = false
    isDraw = false
    moves = 0;
}

function setMessage(msg) {
    message.innerText = msg;
}


function setEvents() {

    stbtn.addEventListener('click', () => {
        reset();
    });

    for (let square of squares) {
        square.addEventListener('click', () => {
            if (isGameOver || isDraw) return;
            if (square.innerText == "") {
                square.innerText = currSign;
                move++;
                if (isWinner(currSign)) {
                    setMessage(`${currSign} won`);
                    isGameOver = true;
                    message.classList.add('green');
                    return;
                }
                if (move == 9) {
                    setMessage(`DRAW`);
                    isDraw = true;
                    message.classList.add('red');
                    return;
                }
                currSign = revSign(currSign);
                setMessage(`${currSign}'s chance`);
            }
            else {
                setMessage(`Can't fill here , ${currSign}'s chance`);
            }

        })
    }
}


function isWinner(sign) {
    if (iswinn(1, 2, 3, sign) ||
        iswinn(4, 5, 6, sign) ||
        iswinn(7, 8, 9, sign) ||
        iswinn(1, 4, 7, sign) ||
        iswinn(2, 5, 8, sign) ||
        iswinn(3, 6, 9, sign) ||
        iswinn(1, 5, 9, sign) ||
        iswinn(7, 5, 3, sign)) return true;

    return false;

}

function iswinn(a, b, c, sign) {
    if (getBoxvalue(a) == sign && getBoxvalue(b) == sign && getBoxvalue(c) == sign)
        return true;
    return false;
}

function getBoxvalue(num) {
    return document.querySelector("#b" + num).innerText;
}

function revSign(sign) {
    if (sign == 'X') return 'O';
    else return 'X';
}

function reset() {
    for (let square of squares) {
        square.innerText = "";
    }

    currSign = "X";
    setMessage(`${currSign}'s chance`);
    isGameOver = false;
    isDraw = false;
    move = 0;
    message.classList.remove('red');
    message.classList.remove('green');
}


function loadGame() {
    getElements();
    reset();
    setEvents();

}

loadGame();
const board = document.querySelector(".grid");
const boxes = document.querySelectorAll(".frame");
const reset = document.querySelector(".reset-button");

//Game Variables
let playerOne = "X";
let playerTwo = "O";

let xGo = true;

let turns = 0


//Event Handlers
const actionReset = (a) => {
    console.log(a);

};



const actionBoxClick = (a) => {

    const classList = a.target.classList;
    const location = classList[0];
    // console.log("location", location);

    if(classList[1] === 'X' || classList[1] === 'O') {
        return;
    }


    if (xGo) {
        classList.add('X');
        checkStatus();
        xGo = !xGo;
    } else {
        classList.add('O');
        checkStatus();
        xGo = !xGo;
    }
};

//Event Listeners
reset.addEventListener('click', actionReset);

for (const box of boxes) {
    box.addEventListener('click', actionBoxClick)

};

let victoryBoxes = [
    [boxes[0], boxes[1], boxes[2]],
    [boxes[3], boxes[4], boxes[5]],
    [boxes[6], boxes[7], boxes[8]],
    [boxes[0], boxes[3], boxes[6]],
    [boxes[1], boxes[4], boxes[7]],
    [boxes[2], boxes[5], boxes[8]],
    [boxes[0], boxes[4], boxes[8]],
    [boxes[2], boxes[4], boxes[6]],
    
];



//functions
const checkStatus = () => {
    const frame0 = boxes[0].classList[1];
    const frame1 = boxes[1].classList[1];
    const frame2 = boxes[2].classList[1];
    const frame3 = boxes[3].classList[1];
    const frame4 = boxes[4].classList[1];
    const frame5 = boxes[5].classList[1];
    const frame6 = boxes[6].classList[1];
    const frame7 = boxes[7].classList[1];
    const frame8 = boxes[8].classList[1];
    console.log()
};


    
// a winner 
// function victory()
//     for (let i = 0; i < victoryBoxes.length; i++) {
//         if (victoryBoxes === true); {
//             return; victory()
//         }
//

//WINNER

if (frame0 && frame0 === frame1 && frame0 === frame2);



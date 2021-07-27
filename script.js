// create array of 76 elements
function bingoArray() {
  let length = 76;
  let i = 0;

  let bingoArray = [];
  while (i < 76) {
    let randNum = Math.round(Math.random() * 76) + 1;
    bingoArray.push(randNum);
    i++;
  }
  return bingoArray;
}
let bingoArr = bingoArray();
// function create bingo elements
function createBingoElements() {
  console.log(bingoArr);
  for (let num = 0; num < bingoArr.length; num++) {
    const bingoBoard = document.getElementsByClassName("bingo-main_board")[0];
    const divNode = document.createElement("div");

    divNode.classList.add("bingo-tile");
    divNode.style.transform = `rotate(${
      Math.floor(Math.random() * 10) * (Math.round(Math.random()) ? 1 : -1)
    }deg)`;
    divNode.textContent = bingoArr[num].toString();
    bingoBoard.append(divNode);
  }
}

function addMatchClass(arr, className, content) {
  for (let div of arr) {
    div.classList.remove(className);
    if (div.textContent === content.toString()) {
      div.classList.add(className);
    }
  }
}

// random pick from array
function randomNumb() {
  let randomBtn = document.querySelector(".bingo-number");
  const bingoBoard = document.getElementsByClassName("bingo-tile");
  let randNumField = document.querySelector(".bingo-number>h4");
  const userBoards = document.getElementsByClassName("bingo-user_board");

  console.log(bingoBoard);
  randomBtn.addEventListener("click", function () {
    let randNum = bingoArr[Math.floor(Math.random() * bingoArr.length)];
    let random = bingoArr.splice(randNum, 1)[0];
    console.log(bingoArr);
    randNumField.textContent = random;
    addMatchClass(bingoBoard, "match", random);
    addMatchClass(userBoards, "match", random);
  });
}
// generate user board
function generateUserboard() {
  const generateBoardsBtn = document.getElementById("user-board-generator");
  generateBoardsBtn.addEventListener("click", function () {
    const amount = document.querySelector(
      ".bingo-user_board_input input[type='number']"
    ).value;
    let userDivContainer = document.querySelector(
      ".bingo-user_board-container"
    );
    userDivContainer.innerHTML = "";
    for (let i = 0; i < amount; i++) {
      let userBoardNode = document.createElement("div");
      userBoardNode.classList.add("bingo-user_board");
      userDivContainer.appendChild(userBoardNode);
      for (let j = 0; j < 25; j++) {
        let randNum = Math.round(Math.random() * 76) + 1;
        let userTile = document.createElement("div");
        userTile.classList.add("bingo-tile");
        userTile.innerText = randNum.toString();
        userBoardNode.appendChild(userTile);
      }
    }
    console.log(amount);
  });
}
generateUserboard();
window.onload = function () {
  createBingoElements();

  generateUserboard();
  randomNumb();
  //randomizeNumberOnClick()
};

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

// random pick from array
function randomNumb() {
  let randomBtn = document.querySelector(".bingo-number");
  const bingoBoard = document.getElementsByClassName("bingo-tile");
  let randNumField = document.querySelector(".bingo-number>h4");

  console.log(bingoBoard);
  randomBtn.addEventListener("click", function () {
    let randNum = bingoArr[Math.floor(Math.random() * bingoArr.length)];
    randNumField.textContent = randNum;
    for (let div of bingoBoard) {
      div.classList.remove("match");
      if (div.textContent === randNum.toString()) {
        div.classList.add("match");
      }
    }
  });
}

window.onload = function () {
  createBingoElements();
  randomNumb();
  //randomizeNumberOnClick()
};

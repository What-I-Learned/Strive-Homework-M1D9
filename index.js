
//-- select items



//--create random number
function randNum(){
    let randNum = Math.floor(Math.random()*76)+1
    return randNum
}

//-- create randomNumber array
function randNumberArray(){
    let randNumberArray=[]
    for(let i=0;i<76;i++){
        randNumberArray[i] = randNum()
    }
    
    return randNumberArray
}
//console.log(randNumberArray());

//-- create Ui bingo element
function createBingoElement(){
    let bingoNumbers = randNumberArray()

    for(let b=0;b<bingoNumbers.length;b++){
        //-- get the container
        const bingoBoard = document.getElementById("bingo__main")
        
        //-- main bingo item div
        const divNode = document.createElement("div")
        divNode.classList.add('bingo-item')
        console.log(divNode);

        //-- number inside
        const h4node = document.createElement('h4')
        h4node.classList.add("bingo-number")
        h4node.textContent = bingoNumbers[b].toString();
        divNode.append(h4node)

        //-- append days
        bingoBoard.appendChild(divNode)

    }
}











//-- load all the functions
window.onload=function(){
    createBingoElement()

}
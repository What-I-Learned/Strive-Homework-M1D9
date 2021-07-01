
//-- select items
const bingoBoard = document.getElementById("bingo__main")


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
console.log(randNumberArray());

//-- create Ui bingo element
function createBingoElement(){
    let bingoNumbers = randNumberArray()

    for()

}











//-- load all the functions
window.onload=function(){

}
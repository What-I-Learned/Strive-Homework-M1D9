
//-- select items



//--create random number
function randNum(){
    let randNum = Math.floor(Math.random()*76)+1
    return randNum
}

//-- create randomNumber array

let randNumbersArray=[]
function randNumberArray(maxN){
    
    let n =0;
    // for(let i=0;i<76;i++){
        
    let random = randNum()
    random =Number(random)

        if(!randNumbersArray.includes(random)){
            randNumbersArray.push(random)
            return random
        }else{
            if(randNumberArray.length<maxN){
                n++
                console.log(n);
                return randNumberArray()
            }else{
                console.log('no moew numbers available');
                return false
            }
        }
        

        // randNumberArray.push(random)
        //     if(randNumberArray.includes(random)){
        //         n++
        //     }


        // if(n>3){
        //     console.log("Oh yeah");
            
        // }


        //-- make sure that
        //-- there are no more than 3 of the same numbers



    }
    // console.log(randNumberArray,n);
    
    // return randNumberArray
// }

for(i=0;i<76;i++){
    randNumberArray(76);
}

let arr = [];
let sameNarr=[]
let same=0
while(arr.length < 10){
    console.log(same);
    let r = Math.floor(Math.random() * 11) + 1;
    if(arr.includes(r) == false) {
    arr.push(r);
    }else if(arr.includes(r)== true && same<4){
        same++
        arr.push(r);
        sameNarr.push(r)
    }
}
console.log(arr);
console.log("Same number array ",sameNarr );
console.log("same ",same);


console.log(randNumbersArray);

//-- create Ui bingo elements
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

//-- randomizeNumbers on click
// function randomizeNumberOnClick(){
//     let randomizeBtn = document.getElementById('randomize')
//     let numbersOnClick = []
//     randomizeBtn.addEventListener('click',function(){
//        let numberOnClick =  randNum();  
//         numbersOnClick.push(numberOnClick)
//         console.log(numbersOnClick);
//     })
    
// }

//console.log(randomizeNumberOnClick());










//-- load all the functions
window.onload=function(){
    createBingoElement()
    //randomizeNumberOnClick()
    

}
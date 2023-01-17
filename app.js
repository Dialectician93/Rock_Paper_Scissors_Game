const yourChoice = document.getElementById("your-choice")
const pcChoice = document.getElementById("pc-choice")
const select = document.querySelector(".select")
let userSelect ;  //bizim seçimimiz
let pcRandom; //pc nin seçimi



//score yazabilmek için

const scoreYou = document.getElementById("you")
const scorePc = document.getElementById("pc")
const domTopScore = document.querySelector(".top-score")



const resultDiv = document.querySelector(".result-msg");
const containerEl = document.querySelector(".container");
const modalEl = document.querySelector(".modal-container");
const modalBtn = document.querySelector("#modal-ok");


const final = document.getElementById("final")

select.addEventListener("click",(e)=>{
    if(e.target.getAttribute("alt")){

    userSelect = e.target.getAttribute("alt")
    yourChoice.innerHTML = `<img src="images/${userSelect}.png"></img>`;
    pc()
    }

})


const pcArr = ["tas", "kagit", "makas"];

function pc(){
    pcRandom = pcArr[Math.floor(Math.random()*3)]
    console.log(pcRandom);
    pcChoice.innerHTML = `<img src="images/${pcRandom}.png"></img>`;
    result();

}

function result(){
    switch (userSelect) {
        case "tas":
            if (pcRandom=="kagit") {
               lost()
            } else if(pcRandom == "makas"){
                win()    
            }
            break;

            case "kagit":
                if (pcRandom=="makas") {
                    lost()
                } else if(pcRandom == "tas"){
                    win()
                }

            case "makas":
                if (pcRandom=="tas") {
                    lost()
                } else if(pcRandom == "kagit"){
                    win()
                }
    
        default:
            break;
    }


    //beraberlik durumu
    if (userSelect == pcRandom){
        resultDiv.classList.add("active")
        resultDiv.innerHTML = "It's a draw"
        containerEl.style.boxShadow = "3px 3px 10px 1px #FFC538";
        resultDiv.style.backgroundColor = "#FFC538";
    
    }

    if(scoreYou.innerText ==10){
        final.innerHTML = `💃 You Win🕺`
        document.querySelector(".modal").style.backgroundColor = "#5AB7AC"
        modalBtn.style.color = "#5AB7AC"
        topScoreCheck()

    }
    if(scorePc.innerText == '10' || scoreYou.innerText == '10'){
        modal()

    }

}


function lost(){
    resultDiv.classList.add("active")
    resultDiv.innerHTML = "You Lost!"
    containerEl.style.boxShadow = "3px 3px 10px 1px #fb778b";
    resultDiv.style.backgroundColor = "#fb778b";
    scorePc.innerText++;
}

function win(){
    resultDiv.classList.add("active")
    resultDiv.innerHTML = "You Win!"
    containerEl.style.boxShadow = "3px 3px 10px 1px #5AB7AC";
    resultDiv.style.backgroundColor = "#5AB7AC";
    scoreYou.innerText++;
}


function modal(){
    modalEl.classList.add("show");
}

modalBtn.addEventListener("click",()=>{
    modalEl.style.display = "none";
    window.location.reload()  //satfatı yenile anlamında built in function
})

let storagedScore = localStorage.getItem("highScore")

let topScore;

if(storagedScore){
    topScore = `10 - ${storagedScore}`
}else{
    topScore = "0 - 0"
}

domTopScore.innerText = topScore;

function topScoreCheck(){
    storagedScore || localStorage.setItem("highScore", +scorePc.innerText)
    if(storagedScore >= scorePc.innerText){
        localStorage.setItem("highScore",+scorePc.innerText);
    }

}









////////////////!Best Practice olmayan bir yöntem///////
// const tasImage = document.querySelector(".tas") 
// const kagitImage = document.querySelector(".kagit") 
// const makasImage = document.querySelector(".makas") 

// tasImage.addEventListener('click',(e)=>{
//     console.log(e);
//     yourChoice.innerHTML = `<img src="images\tas.png"></img>`
// })
// kagitImage.addEventListener('click',(e)=>{
//     console.log(e);
//     yourChoice.innerHTML = `<img src="images\kagit.png"></img>`
// })
// makasImage.addEventListener('click',(e)=>{
//     console.log(e);
//     yourChoice.innerHTML = `<img src="images\makas.png"></img>`
// })
////////////////////////! //////////////////////
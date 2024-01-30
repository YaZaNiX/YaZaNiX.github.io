let nameList = []
let initList = []
let index = 0

let nbplayer = 0

let defaultPrepTimer = 60
let prepTimerMax = defaultPrepTimer
let prepTimer = prepTimerMax
let defaultExecTimer = 30
let execTimerMax = defaultExecTimer
let execTimer = execTimerMax

let timer = undefined
let isTimerOn = false


// touches 
document.addEventListener("DOMContentLoaded", function(){
    document.addEventListener("keydown", function(event){

        let body = document.getElementsByTagName("body")[0]
        let nameDisplay = document.getElementById("player-display")
        let timerDisplay = document.getElementById("timer-display")

        if (event.target == body){
            if (event.code == "Space") {
                isTimerOn = !isTimerOn
                if (isTimerOn){
                    if (prepTimer > 0){
                        nameDisplay.style = "background-color: darkgreen"
                    }
                    else{
                        nameDisplay.style = "background-color: darkred"
                    }
                }
                else{
                    nameDisplay.style = "background-color: grey"
                }
            }

            if (event.code == "ArrowLeft"){
                index--
                if (index < 0){
                    index += nbplayer
                }
                nameDisplay.innerHTML = nameList[index%nameList.length]
                prepTimer = prepTimerMax
                execTimer = execTimerMax
                timerDisplay.innerHTML = prepTimer
                nameDisplay.style = "background-color: darkgreen"
            } 
            if (event.code == "ArrowRight"){
                index++
                if (index < 0){
                    index += nbplayer
                }
                nameDisplay.innerHTML = nameList[index%nameList.length]
                prepTimer = prepTimerMax
                execTimer = execTimerMax
                timerDisplay.innerHTML = prepTimer
                nameDisplay.style = "background-color: darkgreen"
            }
        }
    })
})
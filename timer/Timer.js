function timerFunc(timerDisplay, nameDisplay){
    console.log(prepTimer)
    if (prepTimer > 0){
        prepTimer--
        timerDisplay.innerText = prepTimer
        nameDisplay.style = "background-color: darkgreen"
    }
    else{
        if (execTimer > 0){
            execTimer--
            timerDisplay.innerText = execTimer
            nameDisplay.style = "background-color: darkred"
        }
        else{
            prepTimer = 60
            execTimer = 30

        }
    }
}

document.addEventListener("DOMContentLoaded", function(){

    let timerDisplay = document.getElementById("timer-display")
    let nameDisplay = document.getElementById("player-display")

    timer = window.setInterval(function(){
        if (prepTimer > 0){
            prepTimer--
            timerDisplay.innerText = prepTimer
            nameDisplay.style = "background-color: darkgreen"
        }
        else{
            if (execTimer > 0){
                execTimer--
                timerDisplay.innerText = execTimer
                nameDisplay.style = "background-color: darkred"
            }
            else{
                prepTimer = prepTimerMax
                execTimer = execTimerMax
                index++
                nameDisplay.innerHTML = nameList[index%nameList.length]
                timerDisplay.innerText = prepTimer
                nameDisplay.style = "background-color: darkgreen"
            }
        }
    }, 1000)
})
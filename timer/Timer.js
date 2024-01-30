document.addEventListener("DOMContentLoaded", function(){

    let timerDisplay = document.getElementById("timer-display")
    let nameDisplay = document.getElementById("player-display")

    timer = window.setInterval(function(){
        if (isTimerOn){
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
        }
    }, 1000)
})
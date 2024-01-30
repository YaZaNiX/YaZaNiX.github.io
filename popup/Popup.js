document.addEventListener("DOMContentLoaded", function(){

    let popup = document.getElementById("popup")
    let button = document.getElementById("options-button")
    button.addEventListener("click", function(){
        popup.classList.add("active")
    })

    let closeButton = document.getElementById("popup-exit")
    closeButton.addEventListener("click", function(){
        popup.classList.remove("active")
    })

    let confirmButton = document.getElementById("confirm-button")
    confirmButton.addEventListener("click", function(){
        let reflexionTime = document.getElementById("reflexion-time").value
        if(reflexionTime != ''){
            reflexionTime = parseInt(reflexionTime)
        }
        else {
            reflexionTime = defaultPrepTimer
        }

        let executeTime = document.getElementById("execute-time").value
        if(executeTime != ''){
            executeTime = parseInt(executeTime)
        }
        else {
            executeTime = defaultExecTimer
        }
        
        prepTimerMax = reflexionTime
        execTimerMax = executeTime

        let index = 0
        let playerNameDisplay = document.getElementById("player-display")
        playerNameDisplay.innerHTML = nameList[index]
        playerNameDisplay.style = "{background-color: darkgreen}"
        let timerDisplay = document.getElementById("timer-display")
        timerDisplay.innerHTML = prepTimer
        
        // reset le timer
        prepTimer = prepTimerMax
        execTimer = execTimerMax
        isTimerOn = true
    })
})
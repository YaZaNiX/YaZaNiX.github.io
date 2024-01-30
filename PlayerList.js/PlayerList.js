function sortList(nameList, initList){
    
    for (let i = 0; i < initList.length; i++){
        if (initList[i] == ''){
            initList[i] = '0'
        }
    }

    for (let i = 0; i < initList.length; i++){
        for (let j = i+1; j < initList.length; j++){

            if (parseInt(initList[i]) < parseInt(initList[j])){
                let tmp = initList[i]
                initList[i] = initList[j]
                initList[j] = tmp
                tmp = nameList[i]
                nameList[i] = nameList[j]
                nameList[j] = tmp
            }
        }
    }

}

document.addEventListener("DOMContentLoaded", function(){
    
    let button = document.getElementById("validate-button")
    button.addEventListener("click", function(){

        // recuperation des informations 
        let nameInputList = document.getElementsByClassName("name-input")
        let initInputList = document.getElementsByClassName("init-input")
        
        nameList = []
        initList = []
        for (let i = 0; i < nameInputList.length; i++){
            nameList.push(nameInputList[i].value)
            initList.push(initInputList[i].value)
        }

        sortList(nameList, initList)
        
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
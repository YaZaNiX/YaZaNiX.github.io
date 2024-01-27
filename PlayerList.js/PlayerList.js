document.addEventListener("DOMContentLoaded", function(){
    
    let button = document.getElementById("validate-button")
    button.addEventListener("click", function(){
        let nameInputList = document.getElementsByClassName("name-input")
        let initInputList = document.getElementsByClassName("init-input")
        
        for (let i = 0; i < nameInputList.length; i++){
            nameList.push(nameInputList[i].value)
            initList.push(initInputList[i].value)
        }

        console.log(nameList)
        
        let index = 0
        let playerNameDisplay = document.getElementById("player-display")
        playerNameDisplay.innerHTML = nameList[index]
        document.addEventListener("keydown", function(){
            index++
            playerNameDisplay.innerHTML = nameList[index%nameList.length]
        })

        // reset le timer
        prepTimer = prepTimerMax
        execTimer = execTimerMax
    })
})
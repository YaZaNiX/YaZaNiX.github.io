document.addEventListener("DOMContentLoaded", function(){

    let addButton = document.getElementById('add-a-player')
    addButton.addEventListener("click", function(){

        // liste des joueur.se.s
        let playerList = document.getElementById("player-list")

        // creation de l'element du joueur.se
        let playerElem = document.createElement("div")
        playerElem.classList.add("player-element")

        // bouton de suppression
        let suppButton = document.createElement("button")
        suppButton.classList.add("supp-button")
        suppButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>'
        suppButton.addEventListener("click", function(){
            playerList.removeChild(playerElem)
        })
        playerElem.appendChild(suppButton, playerList.firstChild)

        // texte : 'nom :'
        let nameSpan = document.createElement("span")
        nameSpan.innerHTML = " nom : "
        nameSpan.classList.add("player-span")
        playerElem.appendChild(nameSpan)

        // champ de texte du nom du joueur.se
        let nameInput = document.createElement("input")
        nameInput.type = "text"
        nameInput.placeholder = "nom du joueur.se"
        nameInput.style = "width: 120px;"
        nameInput.classList.add("name-input")
        playerElem.appendChild(nameInput)

        // texte : 'initiative :'
        let initSpan = document.createElement("span")
        initSpan.innerHTML = " initiative : "
        initSpan.classList.add("player-span")
        playerElem.appendChild(initSpan)

        // champ de text du jet d'initiative
        let initInput = document.createElement("input")
        initInput.type = "text"
        initInput.placeholder = "15"
        initInput.style = "width: 15px;"
        initInput.classList.add("init-input")
        playerElem.appendChild(initInput)

        // ajout de l'element dans la liste
        playerList.appendChild(playerElem)

        nbplayer++
        document.getElementById("validate-button").innerHTML = "valider les " + nbplayer + " joueur.se.s"
    })
})
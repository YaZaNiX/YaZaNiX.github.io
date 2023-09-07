function addImage() {
    var img = document.getElementById('urlimg').value;
    listeImages.push(img);
    length += 1
    document.getElementById("select").innerHTML = index + 1 + "/" + length
}


const listeImages = ['image/anduril.jpg', 'image/trone.jpg', "image/nimbus_2000.jpg", "image/cdm.jpg", "image/sabre_laser.jpg"]
var index = 0
var length = listeImages.length
document.getElementById('img').src = listeImages[index]

function nextImage() {
    if (index < (length - 1)) {
        index += 1
        document.getElementById("img").src = listeImages[index]
        document.getElementById("select").innerHTML = index + 1 + "/" + length
    }
}

function previousImage() {
    if (index > 0) {
        index += -1
        document.getElementById("img").src = listeImages[index]
        document.getElementById("select").innerHTML = index + 1 + "/" + length
    }
}


document.getElementById("select").innerHTML = index + 1 + "/" + length
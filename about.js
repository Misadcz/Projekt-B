
function openPhoto(imageSrc) {
    var photo = document.getElementById("openedPhoto");
    var openImage = document.getElementById("openImage");

    photo.style.display = "block";
    openImage.src = imageSrc;
}

function closePhoto() {
    var photo = document.getElementById("openedPhoto");
    photo.style.display = "none";
}




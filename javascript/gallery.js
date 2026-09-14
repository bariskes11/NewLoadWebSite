let fullImgBox = document.getElementById("fullimgbox");
let imageId = document.getElementById("fullimgitem");

function openPopup(srcpath) {

    fullImgBox.style.display = "flex";
    imageId.src=srcpath;


}

function closePopUp()
{
    fullImgBox.style.display = "none";
}
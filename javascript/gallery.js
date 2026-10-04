let fullImgBox = document.getElementById("fullimgbox");
let imageId = document.getElementById("fullimgitem");
const basePath = "../image/loanAssets/";
function openPopup(thumbSrc) {
    
    const name = thumbSrc.split("/").pop().replace("_thumb.jpeg", "");
    document.getElementById("fullimg-desktop").src = basePath + name + ".jpeg";
    document.getElementById("fullimg-tablet").src = basePath + "tablet/" + name + "_tablet.jpeg";
    document.getElementById("fullimg-mobile").src = basePath + "mobile/" + name + "_mobile.jpeg";
    document.getElementById("fullimgbox").classList.add("open");
    fullImgBox.style.display = "flex";
}


function closePopUp()
{
    fullImgBox.style.display = "none";
}
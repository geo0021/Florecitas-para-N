window.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("loveBtn");
    const modal = document.getElementById("letterModal");

    console.log(btn);
    console.log(modal);

    if (btn && modal) {
        btn.addEventListener("click", () => {
            console.log("CLICK DETECTADO");
            modal.style.display = "flex"; 
        });
    }

});

function closeLetter(){
    const modal = document.getElementById("letterModal");
    if (modal) {
        modal.style.display = "none";
    }
}
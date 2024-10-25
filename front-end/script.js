let modal = document.getElementById("modalWindow");
let modalBack = document.getElementsByClassName("modal-content")[0];
let end = document.getElementById("endRees");

function openModal() {
    modal.style.display = "flex";
}
function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event){
    if(event.target == modal || event.target == modalBack || event.target == end) {
        closeModal()
    }
    
}
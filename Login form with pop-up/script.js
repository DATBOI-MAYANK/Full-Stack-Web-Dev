const modal = document.getElementById("modal");
const open = document.getElementById("butn");
const close = document.getElementById("close");



open.addEventListener("click", ()=>{
    modal.showModal();
})

close.addEventListener("click", ()=>{
    modal.close();
});

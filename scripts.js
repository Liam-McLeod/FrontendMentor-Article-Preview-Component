const share_btn = document.querySelector(".share-btn");
const share_btn_icon = document.querySelector(".share-btn i");
const share_menu = document.querySelector(".share-menu");


share_btn.addEventListener("click", (e) => {

    const hidden = document.querySelector(".hidden");

    if(!hidden) {
        share_menu.classList.add("hidden");
        share_btn.classList.remove("checked");
        share_btn_icon.style.color = "black";
        return
    }

    share_menu.classList.remove("hidden");
    share_btn.classList.add("checked");
    share_btn_icon.style.color = 'white';
});
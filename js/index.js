document.addEventListener("DOMContentLoaded", () => {
    // window.scrollTo(0, document.getElementsByClassName("topbar")[0].scrollHeight);
});
const dropdownMenu = document.querySelectorAll(".dropdown-menu");
const dropdownToggle = document.querySelectorAll(".dropdown-toggle");
const dropdownLink = document.querySelectorAll(".dropdown");
const btn_load_more = document.querySelector(".btn-load_more");
const more_images = document.querySelector(".more_images");

(function toggleDropdown() {
    for (let i = 0; i < dropdownLink.length; i++) {
        // Event listeners
        dropdownLink[i].addEventListener("mouseover", () => {
            dropdownMenu[i].classList.add("show");
            dropdownMenu[i].classList.add("dropdown-menu-show");
            dropdownToggle[i].classList.add("show");
            dropdownToggle[i].getAttribute("aria-expanded", "true");
            dropdownMenu[i].setAttribute("data-bs-toggle", "none");
        });
        dropdownLink[i].addEventListener("mouseout", () => {
            dropdownMenu[i].classList.remove("show");
            dropdownToggle[i].classList.remove("show");
            dropdownToggle[i].getAttribute("aria-expanded", "false");
            dropdownMenu[i].removeAttribute("data-bs-popover");
        });
    }
})();

btn_load_more.addEventListener("click", () => {
    btn_load_more.classList.add("d-none");
    more_images.classList.remove("d-none");

}, false);
let hamburger = document.querySelector(".navbar__hamburger");
let sidebar = document.querySelector(".sidebar");
let sidebarToggle = document.querySelector(".sidebar__toggle");


hamburger.addEventListener("click", () =>{
    sidebar.classList.toggle("show-sidebar");
})

sidebarToggle.addEventListener("click", () =>{
    sidebar.classList.toggle("show-sidebar");
})

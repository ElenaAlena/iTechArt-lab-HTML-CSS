const toggleBtn = document.getElementById("navbar-toggle");
toggleBtn.addEventListener("click", (e) => {
  const menu = document.getElementById("navbar-menu");
  if (!menu.classList.contains("slide-in")) {
    menu.classList.add("slide-in");
    menu.classList.remove("slide-out");
    toggleBtn.classList.add("open");
    document.body.classList.add("modal");
  } else {
    menu.classList.remove("slide-in");
    menu.classList.add("slide-out");
    toggleBtn.classList.remove("open");
    document.body.classList.remove("modal");
  }
});
window.addEventListener("resize", ()=>{
    const menu = document.getElementById("navbar-menu");
    document.body.classList.remove("modal");
    menu.classList.remove("slide-in");
    menu.classList.remove("slide-out");
}, false);

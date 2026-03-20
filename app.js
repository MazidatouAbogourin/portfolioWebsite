function toggleMenue(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
   menu.classList.toggle("open");
   icon.classList.toggle("open");
}
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
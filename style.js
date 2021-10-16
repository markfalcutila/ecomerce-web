const toTop = document.querySelector(".to-top");

window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
});


const nav = document.querySelector("..navbar-fixed");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    nav.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});
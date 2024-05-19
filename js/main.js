const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");
const menuShadow = document.querySelector(".menu--close");
menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu__list--open");
  menuShadow.classList.toggle("menu--open");
});
menuClose.addEventListener("click", () => {
  menuList.classList.remove("menu__list--open");
  menuShadow.classList.remove("menu--open");
});

// переключение темы
document.querySelector('.change-theme').addEventListener('click',function(){
  const currentTheme = document.body.className
  if(currentTheme === 'light-theme'){
    document.body.className = 'dark-theme'
  } else {
    document.body.className = 'light-theme'
  }
});
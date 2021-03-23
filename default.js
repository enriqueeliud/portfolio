const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const navLOgo = document.querySelector('#navbar_logo')
//display mobile menu

const mobileMenu = () =>{
 menu.classList.toggle('is-active')
 menuLinks.classList.toggle('active')
}

menu.addEventListener('click',mobileMenu);

//show active menu when scrolling

const highlightMenu = () =>{
 const elem = document.querySelector('.higlight')
 const homeMenu = document.querySelector('#home-page')
 const aboutMenu = document.querySelector('#about-page')
 const servicesMenu = document.querySelector('#services-page')
 const portMenu = document.querySelector('#port-page')
 const contactMenu = document.querySelector('#contact-me')

 let scrollPos = window.scrollY
 console.log(scrollPos)

 if(window.innerWidth > 960 && scrollPos < 600){
  homeMenu.classList.add('highlight')
  aboutMenu.classList.remove('highlight')
  portMenu.classList.remove('highlight')
  return
 } else if(window.innerWidth > 960 && scrollPos <1400){
  aboutMenu.classList.add('highlight')
  homeMenu.classList.remove('highlight')
  servicesMenu.classList.remove('highlight')
  return
 } else if(window.innerWidth > 960 && scrollPos <2345){
  servicesMenu.classList.add('highlight')
  aboutMenu.classList.remove('highlight')
  return
  }  else if(window.innerWidth > 960 && scrollPos <3500){
  portMenu.classList.add('highlight')
  servicesMenu.classList.remove('highlight')
  return
 
 if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
  elem.classList.remove('highlight')
 }
 };
}

 window.addEventListener('scroll', highlightMenu);
 window.addEventListener('click', highlightMenu);

 const hideMobileMenu = () =>{
  const menuBars = document.querySelector('.is-active')
  if(window.innerWidth < 768 && menuBars){
   menu.classList.toggle('is-active')
   menuLinks.classList.remove('active')
  }
 }

 menuLinks.addEventListener('click', hideMobileMenu)
 navLOgo.addEventListener('click', hideMobileMenu)
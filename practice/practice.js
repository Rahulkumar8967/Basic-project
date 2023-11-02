let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.Onclick = () =>{
 menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');
}
menu.Onclick = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
   }
   document.querySelector('#search-icon').Onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');

   }
   document.querySelector('#close').Onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
    
   }
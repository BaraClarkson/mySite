
/* toggle menu */
var menu=document.querySelector('#menu-bar');
var nav = document.querySelector('.nav-bar');
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active'); 
}
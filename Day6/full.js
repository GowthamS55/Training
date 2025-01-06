
var navbar = document.getElementById('head');
window.addEventListener('scroll', () =>{
if(window.scrollY > 150){
  navbar.classList.add('header-fixed');
}else{
  navbar.classList.remove('header-fixed');
}
})
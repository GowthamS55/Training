const btnadd = document.querySelector('#btnAdd')
const btnremove = document.querySelector('#btnRemove')
const btntoggle = document.querySelector('#btnToggle')
const box = document.querySelector('.box')


btnadd.addEventListener('click',function(){
    box.classList.add('new-color')
})

btnRemove.addEventListener('click',function(){
    box.classList.remove('new-color')
})

btnToggle.addEventListener('click',function(){
    box.classList.toggle('new-color')
})

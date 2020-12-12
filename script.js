const sidebar = document.querySelector('.sidebar');
const showButton = document.querySelector('.show-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const arrows = document.querySelectorAll('.menu-arrow')

showButton.addEventListener('click',()=>{
    sidebar.classList.add('show-sidebar');
    modal.classList.add('show-modal');
})

modal.addEventListener('click',()=>{
    sidebar.classList.remove('show-sidebar');
    modal.classList.remove('show-modal');
})
close.addEventListener('click',()=>{
    sidebar.classList.remove('show-sidebar');
    modal.classList.remove('show-modal');
})
arrows.forEach(arrow=>{
    arrow.addEventListener('click',()=>{
        arrow.classList.toggle('rotate-arrow');
    })
})
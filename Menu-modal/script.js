const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

//Toggle nav

toggle.addEventListener('click', ()=>
    document.body.classList.toggle('show-nav')
);

//Show Modal

open.addEventListener('click', ()=>
    modal.classList.add('show-modal')
);

// Hide Modal
close.addEventListener('click', ()=>{
    modal.classList.remove('show-modal');
    clearInterval(mostrarModal);
});

//hide modal on outside click

window.addEventListener('click', e =>{
    e.target == modal ? modal.classList.remove('show-modal'):false;
    clearInterval(mostrarModal);
});


//accionar modal
const showModal= ()=>{
    modal.classList.add('show-modal')
}


const mostrarModal = setInterval(showModal, 2000);
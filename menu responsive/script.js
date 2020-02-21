function abrirSideMenu(){
    document.getElementById('side-menu').style.width= '250px';
    document.getElementById('main').style.marginLeft= '250px';
}

function cerrarSideMenu(){
    document.getElementById('side-menu').style.width= '0';
    document.getElementById('main').style.marginLeft= '0';
}

const nav = document.getElementById('navbar');
const topOfNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY > topOfNav){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');    
    }
}

window.addEventListener('scroll', fixNav);
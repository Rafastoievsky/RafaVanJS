const vp = document.getElementById('villaplatzi');
const papel = vp.getContext("2d");
const mapa = "img/tile.png";

const fondo = new Image();
fondo.src= mapa;
fondo.addEventListener('load', dibujarfondo);

const cerdo = new Image();
cerdo.src= 'img/cerdo.png';
cerdo.addEventListener('load', dibujarcerdo);

const pollo = new Image();
pollo.src= 'img/pollo.png';
pollo.addEventListener('load', dibujarpollo);

const vaca = new Image();
vaca.src= 'img/vaca.png';
vaca.addEventListener('load', dibujarvaca);

function dibujarfondo(){
    papel.drawImage(fondo, 0,0);
}

function dibujarcerdo(){
    papel.drawImage(cerdo, 0,0);
}

function dibujarpollo(){
    papel.drawImage(pollo, 0,0);
}

function dibujarvaca(){
    papel.drawImage(vaca, 0,0);
}


function aleatorio (min, maxi){

    const numero = Math.floor(Math.random() * (maxi - min +1) + min);

    return numero;
}



const d = document.getElementById("dibujito");
const lienzo = d.getContext("2d");


const qtyLines = document.getElementById('lineasQty');
const btnEnviar = document.getElementById('btnEnviar');


const dibujarLinea =(color, iniX, iniY, finX, finY)=>{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(iniX, iniY);
    lienzo.lineTo(finX,finY);
    lienzo.stroke();
    lienzo.closePath();
}






const enviar = ()=>{
    const cant = parseInt(qtyLines.value);
    
    const qtyL = cant;
    const ancho = d.width;
    console.log(ancho);
    const divisor = ancho/qtyL;
    for (let l = 0; l < qtyL; l++) {
        yi = l*divisor;
        xf = l*divisor;
        xi = 300 - xf;
        yf = 300 - yi;
    
        dibujarLinea("red", 0, yi, xf, ancho);

    }
};

btnEnviar.addEventListener('click', enviar);

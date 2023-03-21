var imgs;
function setDatos(imgs){
    localStorage.setItem('arrayImg', imgs);
}

function getDatos(){
    imgs=localStorage.getItem("arrayImg");
    console.log(imgs);
}
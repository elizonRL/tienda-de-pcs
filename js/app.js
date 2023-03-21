var imgProducto;
var itemImg; 
var arrayItem = [];
var avatarCont;
var content;
function moviendoImg(event){
    itemImg = event.target;
    arrayItem.push(itemImg.src);
    setDatos(arrayItem);
    console.log(arrayItem);
}

function cambiarImg(event){
  
  content.innerHTML = " ";
    for(let itenArray of arrayItem){
      content.innerHTML += `<img src='${itenArray}'>`
    }
}

function domCargado(){
  imgProducto = document.getElementsByClassName("avatarImgItem");
  content=document.getElementById("content");
  for(let item of imgProducto){
    item.addEventListener("dragstart", moviendoImg);
  }
  avatarCont=document.getElementById("dragable");
  avatarCont.addEventListener("dragover", e=>{e.preventDefault()})
  avatarCont.addEventListener("drop", cambiarImg)
  
}

document.addEventListener("DOMContentLoaded", domCargado)

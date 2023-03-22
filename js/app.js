var imgProducto;
var itemImg; 
var arrayItem = [];
var avatarCont;
var content;
var btn;
function moviendoImg(event){
    itemImg = event.target;
    arrayItem.push(itemImg.src);
    setDatos(arrayItem);
    //console.log(arrayItem);
}

function cambiarImg(event){
  
  content.innerHTML = " ";
    for(let itenArray of arrayItem){
      content.innerHTML += `<img src='${itenArray}'>`
    }
}

function borrarcarrito(event){
    arrayItem.splice(0, arrayItem.length)
    cambiarImg();
    console.log(arrayItem);
  
 event.preventDefault();
 
}

function domCargado(){
  imgProducto = document.getElementsByClassName("avatarImgItem");
  btn = document.getElementById("btn");
  form = document.getElementById("form");
  content=document.getElementById("content");
  for(let item of imgProducto){
    item.addEventListener("dragstart", moviendoImg);
  }
  avatarCont=document.getElementById("dragable");
  avatarCont.addEventListener("dragover", e=>{e.preventDefault()});
  avatarCont.addEventListener("drop", cambiarImg);
  form.addEventListener('submit', borrarcarrito);
}

document.addEventListener("DOMContentLoaded", domCargado)

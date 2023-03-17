var imgProducto;
var itemImg; 
var avatarCont;
function moviendoImg(event){
    itemImg = event.target;
    console.log(itemImg);
}
function cambiarImg(event){
    avatarCont.src= itemImg.src;
    console.log(avatarCont);
}
function domCargado(){
  imgProducto = document.getElementsByClassName("avatarImgItem");
  for(let item of imgProducto){
    item.addEventListener("dragstart", moviendoImg);
  }
  avatarCont=document.getElementById("carritoImg");
  avatarCont.addEventListener("dragover", e=>{e.preventDefault()})
  avatarCont.addEventListener("drop", cambiarImg)

}

document.addEventListener("DOMContentLoaded", domCargado)
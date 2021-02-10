
if (typeof dabox === 'undefined') {
  var dabox = document.getElementById("bluebox");
  setHover(dabox);
}
else{
  dabox = document.getElementById("bluebox");
  setHover(dabox);
}
function setHover(element){
  element.onmouseover = () => { element.style.backgroundImage = "url('dd-rect.jpg')"; }
  element.onmouseout = () => { element.style.backgroundImage = "none"; }
}




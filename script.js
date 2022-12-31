let myNodelist = document.getElementsByClassName("li");
/*let k;
for (k = 0; k < myNodelist.length; k++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[k].appendChild(span);
}
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
} */
var button = document.getElementsByClassName("dropbtn");
var menu = document.getElementsByClassName("Entrée");

button.onclick= function() {
  menu.style.display = "block";
};
var button = document.getElementsByClassName("dropbtn");
var menuu = document.getElementsByClassName("Menuprinci");

button.onclick= function() {
  menuu.style.display = "block";
};
var button = document.getElementsByClassName("dropbtn");
var menuuu = document.getElementsByClassName("Dessert");

button.onclick= function() {
  menuuu.style.display = "block";
};











/*function newTask() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("Delete");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }*/
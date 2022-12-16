let myNodelist = document.getElementsByClassName("li");

let list = document.querySelector('.header');
list.addEventListener('click', (ev)=> {
  if (ev.target.ClassName === 'li') {
    console.log("nfar ")
    ev.target.classList.toggle('checked');
  }})




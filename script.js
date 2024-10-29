const btn = document.getElementById("click-me");
const cont = document.getElementsByClassName("container")[0];
// generate random color
function getRandomColor(){
const  r = Math.floor(Math.random()*256);
const  g = Math.floor(Math.random()*256);
const  b = Math.floor(Math.random()*256);
return `rgb(${r},${g},${b})`;
}


btn.addEventListener('click', function myfunc() {
    cont.style.backgroundColor=getRandomColor();
});

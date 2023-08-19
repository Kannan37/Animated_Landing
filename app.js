document.getElementById("yellow").addEventListener("click", yellow);
document.getElementById("blue").addEventListener("click", blue);
document.getElementById("red").addEventListener("click", red);
document.getElementById("transparent").addEventListener("click", transparent);

function yellow(){
    let  color=document.getElementsByClassName("bubble");
    for (let i=0;i<=6;i++){
        color[i].style.backgroundColor = 'yellow';
    }
}
function blue(){
   let color= document.getElementsByClassName("bubble");
    for (let i=0;i<=6;i++){
        color[i].style.backgroundColor = 'blue';
    }
}
function red(){
    let color=document.getElementsByClassName("bubble");
    for (let i=0;i<=6;i++){
        color[i].style.backgroundColor = 'red';
    }
}
function transparent(){
   let color= document.getElementsByClassName("bubble");
    for (let i=0;i<=6;i++){
        color[i].style.backgroundColor = '';
    }
}

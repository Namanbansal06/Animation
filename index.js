var x1=0;
var x2=100;
var a=0;
setInterval(anim_bo,100);

function anim_bo(){
    a=a+1;
    var pointer=document.getElementById("boat");
    pointer.style.marginLeft= a + "px";
}
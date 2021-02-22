canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d")
 var mouseEvent="";

 var color="red";
 var width=1;
 var radius="40"
 var lastx,lasty;

 canvas.addEventListener("mousedown" , mymousedown);

 function mymousedown(e) {
mouseEvent="down";
color=document.getElementById("color").value;
color=document.getElementById("radius").value;
width=document.getElementById("width").value;
 }
 canvas.addEventListener("mouseup" , mymouseup);

 function mymouseup(e) {
mouseEvent="up";
 }
     
 canvas.addEventListener("mouseleave" , mymouseleave);

 function mymouseleave(e) {
mouseEvent="leave";
 }

 canvas.addEventListener("mousemove" , mymousemove);

 function mymousemove(e) {
 currentx=e.clientX - canvas.offsetLeft;
 currenty=e.clientY - canvas.offsetTop;

 if (mouseEvent == "down"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width ;
ctx.arc(currentx,currenty,radius,0,2*Math.PI);

console.log("last x = " + lastx + ",last y = "+lasty);
ctx.moveTo(lastx , lasty);

console.log("current x = "+currentx +", current y = "+currenty);
ctx.lineTo(currentx , currenty);

ctx.stroke();
 }
 lastx=currentx;
 lasty=currenty;
 }

 function clean(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
 }
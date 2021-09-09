var mousevent = "empty";
var cpx, cpy;
var canvas = document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");
var color = "black";
var width = 5;
var radius = 25;

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
  if (document.getElementById("color").value != "")
  {
    color = document.getElementById("color").value;
  } 
  if (document.getElementById("width").value != "")
  {
    width = document.getElementById("width").value;
  } 
  if (document.getElementById("radius").value != "")
  {
    radius = document.getElementById("radius").value;
  } 
  mousevent = "touchStart"
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
  cpx = e.touches[0].clientX - canvas.offsetLeft;
  cpy = e.touches[0].clientY - canvas.offsetTop;
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.arc(cpx, cpy, radius, 0, 2*Math.PI);
  ctx.stroke();
    
  lpx = cpx;
  lpy = cpy;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mousevent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mousevent = "mouseLeave";
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    if (document.getElementById("color").value != "")
    {
      color = document.getElementById("color").value;
    } 
    if (document.getElementById("width").value != "")
    {
      width = document.getElementById("width").value;
    } 
    if (document.getElementById("radius").value != "")
    {
      radius = document.getElementById("radius").value;
    } 
    mousevent = "mouseDown"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;

    if (mousevent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(cpx, cpy, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
    lpx = cpx;
    lpy = cpy;
}

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("width").value = "";
    document.getElementById("radius").value = "";
}


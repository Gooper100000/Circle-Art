canvas=document.getElementById("myCanvas")
color="red"
ctx=canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=2
ctx.arc(200,200 ,40,0, 2*Math.PI)
ctx.stroke()
ctx=canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth=2
ctx.arc(300,200 ,40,0, 2*Math.PI)
ctx.stroke()
ctx=canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle="red"
ctx.lineWidth=2
ctx.arc(400,200 ,40,0, 2*Math.PI)
ctx.stroke()
ctx=canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle="yellow"
ctx.lineWidth=2
ctx.arc(250,250 ,40,0, 2*Math.PI)
ctx.stroke()
ctx=canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle="green"
ctx.lineWidth=2
ctx.arc(350,250 ,40,0, 2*Math.PI)
ctx.stroke()
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    color=document.getElementById("color").value
    mouseX=e.clientX-canvas.offsetLeft
    mouseY=e.clientY-canvas.offsetTop
    circle(mouseX, mouseY)
}
function circle(mouseX, mouseY){
    ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(mouseX,mouseY ,40,0, 2*Math.PI)
ctx.stroke()
}
function clearcanvas(){
    ctx.clearRect(0,0, canvas.width,canvas.height)
}
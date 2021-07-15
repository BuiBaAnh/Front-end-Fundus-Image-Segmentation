// by Chtiwi Malek ===> CODICODE.COM
/* eslint no-undef: "off"*/

var canvas, ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        zoom = 0.0,
        dot_flag = false;

var x = "black",
    y = 4;
var xe = "black",
    yxe = 10;
var w = 0, h = 0;
var type = "draw";

var points = [];
var paths = [];
var isFirst = 0;
var raw = false;

function init(elm,_w,_h, _zoom, size, sizeErase, _type = "draw") {
    w = _w;
    h = _h;
    zoom = _zoom;
    type = _type;
    canvas = elm;
    y = size;
    yxe = sizeErase;
    ctx = canvas.getContext("2d");
    canvas.addEventListener("mousemove", mousemove, false);
    canvas.addEventListener("mousedown",mousedown , false);
    canvas.addEventListener("mouseup",mouseup, false);
    // canvas.addEventListener("mouseout",mouseout, false);
}
function resetInsert(elm) {
    if(!canvas){
        canvas = elm;
        ctx = canvas.getContext("2d");
    }
    // paths = []
    canvas.removeEventListener("mousemove", mousemove, false);
    canvas.removeEventListener("mousedown",mousedown , false);
    canvas.removeEventListener("mouseup",mouseup, false);
    // canvas.removeEventListener("mouseout",mouseout, false);
}
function mousemove(e){
    if(flag){
        var curr = findxy('move',e);
        currX = curr.x;
        currY = curr.y
        if(type === "draw"){
            points.push({x : currX, y:currY, z: type, t : y});
        }
        if(type === "erase"){
            points.push({x : currX, y:currY, z: type, t : yxe});
        }
        // points.push({x : currX, y:currY, z: type, t : ctx.li});
        draw();
    }
}
function mousedown(e){
    points = [];
    var curr = findxy('down',e);
    currX = curr.x;
    currY = curr.y
    flag = true;
    dot_flag = true;
    // points.push({x : currX, y:currY, z: type})
    if(type === "draw"){
        points.push({x : currX, y:currY, z: type, t : y});
    }
    if(type === "erase"){
        points.push({x : currX, y:currY, z: type, t : yxe});
    }
    if (dot_flag) {
        ctx.beginPath();
        ctx.fillStyle = x;
        ctx.fillRect(currX, currY, 2, 2);
        ctx.closePath();
        dot_flag = false;
    }
}
function mouseup(e){
    flag = false;
    paths.push(points);
}

function color(obj) {
    switch (obj.id) {
        case "green":
            x = "green";
            break;
        case "blue":
            x = "blue";
            break;
        case "red":
            x = "red";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "orange":
            x = "orange";
            break;
        case "black":
            x = "black";
            break;
        case "white":
            x = "white";
            break;
    }
    if (x == "white") y = 14;
    else y = 4;

}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    if(type === "draw"){
        ctx.strokeStyle = "white";
        ctx.lineWidth = y;
    }
    if(type === "erase"){
        ctx.strokeStyle = xe;
        ctx.lineWidth = yxe;
    }
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.closePath();
}


function save() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}

function findxy(res, e) {
    prevX = currX;
    prevY = currY;
    currX = (e.pageX - Math.floor(canvas.getBoundingClientRect().left))/zoom;
    currY = (e.pageY - Math.floor(canvas.getBoundingClientRect().top))/zoom;
    return {x: currX, y: currY}
}
function Undo(){
    // ctx.clearRect(0,0,canvas.width,canvas.height);  
    paths.splice(-1,1);
    paths.forEach(path => {
        if(path[0].z === "draw"){
            ctx.strokeStyle = "white";
            ctx.lineWidth = path[0].t;
        }
        if(path[0].z === "erase"){
            ctx.strokeStyle = "black";
            ctx.lineWidth = path[0].t;
        }
        ctx.beginPath();
        ctx.moveTo(path[0].x,path[0].y);  
        for(let i = 1; i < path.length; i++){
            ctx.lineTo(path[i].x,path[i].y); 
        }
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.closePath();
    })
}
function resetPath(){
    paths = []
}
export {init, color, draw, save, resetInsert, Undo, resetPath}
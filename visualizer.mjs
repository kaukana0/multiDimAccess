// reveals in a 2d image, where there's data and where there isn't.
// green=data present; black=missing data; red=currently selected data
// expects <canvas id="someCanvas" width="1024" height="2048"></canvas> in index.html


let canvasData, ctx, w, h

export function startImage(id) {
    var canvas = document.getElementById(id);
    w = canvas.width;
    h = canvas.height;
    ctx = canvas.getContext("2d");
    canvasData = ctx.getImageData(0, 0, w, h);
}

export function drawPixelXY (x, y, r, g, b, a) {
    var index = (x + y * w) * 4;
    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}

export function drawPixelI (i, r, g, b, a) {
    var index = i * 4;
    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}

export function endImage() {
    ctx.putImageData(canvasData, 0, 0);
}


export function drawImage(id, data, length) {
    startImage(id)
    let max = Object.keys(data).length
    console.log(max, length, w,h, w*h)
    for(let i=0; i<length; i++) {
        if(data.hasOwnProperty(i)) {
            drawPixelI(i, 0,255,0,255)
        } else {
            drawPixelI(i, 0,0,0,255)
        }
    }
    endImage()
}

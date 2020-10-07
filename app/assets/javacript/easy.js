var $myCanvas = $('#theMan');
var $theWords = $('#theWords');

function easy(num) {
    console.log(num);
    $myCanvas.drawArc({
        strokeStyle: "black",
        strokeWidth: 1,
        x: 270,
        y: 38,
        radius: 10,
    }).drawArc({
        // draw the left eye
        fillStyle: '#333',
        strokeStyle: '#333',
        x: 265,
        y: 37,
        radius: 1.5
    }).drawArc({
        // draw the right eye
        fillStyle: '#333',
        strokeStyle: '#333',
        x: 275,
        y: 37,
        radius: 1.5
    })
}

export { easy }
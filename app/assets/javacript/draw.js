var $myCanvas = $('#theMan');
var $theWords = $('#theWords');

function setup() {
    //frame set up

    $theWords.drawRect({
        fillStyle: 'teal',
        strokeStyle: 'gold',
        strokeWidth: 1,
        x: 0,
        y: 0,
        fromCenter: false,
        width: 200,
        height: 50
    });
    $theWords.drawText({
        layer: true,
        name: "text",
        text: "My Life is in Your Hands",
        fontfamily: "cursive",
        fontSize: 15,
        x: 100,
        y: 25,
        strokeStyle: "black",
        strokeWidth: 1,
        fillStyle: "black"
    })

    $myCanvas.drawRect({
        fillStyle: 'teal',
        strokeStyle: 'gold',
        strokeWidth: 1,
        x: 200,
        y: 0,
        fromCenter: false,
        width: 300,
        height: 100
    });
    $myCanvas.drawLine({
        strokeStyle: 'black',
        strokeWidth: 3,
        x1: 200,
        y1: 490,
        x2: 200,
        y2: 10,
        x3: 270,
        y3: 10,

    });
    $myCanvas.drawLine({
        strokeStyle: 'black',
        strokeWidth: 2,
        rounded: true,
        closed: true,
        x1: 270,
        y1: 10,
        x2: 270,
        y2: 28.5,
    });
}


export { setup }
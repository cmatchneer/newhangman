var $myCanvas = $('#theMan');
var $theWords = $('#theWords');

function easy(num) {

    if (num === 14) {
        //head
        console.log(num);
        $myCanvas.drawArc({
            strokeStyle: "black",
            strokeWidth: 1,
            x: 270,
            y: 38,
            radius: 10,
        })
    }
    if (num === 12) {
        // draw the left eye
        $myCanvas.drawArc({
            fillStyle: '#333',
            strokeStyle: '#333',
            x: 265,
            y: 37,
            radius: 1.5
        })
    }
    if (num === 10) {
        $('#theWords').removeLayer('text').drawLayers();
        // draw the right eye
        $myCanvas.drawArc({
            fillStyle: '#333',
            strokeStyle: '#333',
            x: 275,
            y: 37,
            radius: 1.5
        })
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
            text: "Well there is still lots of time",
            fontfamily: "cursive",
            fontSize: 15,
            x: 100,
            y: 25,
            strokeStyle: "black",
            strokeWidth: 1,
            fillStyle: "black"
        })
    }


}

export { easy }
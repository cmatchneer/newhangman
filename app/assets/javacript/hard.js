var $myCanvas = $('#theMan');
var $theWords = $('#theWords');

function hard(num) {
    if (num === 4) {
        $('#theWords').removeLayer('text').drawLayers();
        $myCanvas.drawArc({
                strokeStyle: "black",
                strokeWidth: 1,
                x: 270,
                y: 38,
                radius: 10,
            })
            // draw the left eye
        $myCanvas.drawArc({
            fillStyle: '#333',
            strokeStyle: '#333',
            x: 265,
            y: 37,
            radius: 1.5
        })

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
            text: "Hard mode oh boy",
            fontfamily: "cursive",
            fontSize: 15,
            x: 100,
            y: 25,
            strokeStyle: "black",
            strokeWidth: 1,
            fillStyle: "black"
        })
    }
    if (num === 3) {
        $('#theWords').removeLayer('text').drawLayers();
        //body
        $myCanvas.drawLine({

            strokeStyle: 'black',
            strokeWidth: 1,
            x1: 270,
            y1: 49,
            x2: 270,
            y2: 75,
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
            text: "Well this worrisome",
            fontfamily: "cursive",
            fontSize: 15,
            x: 100,
            y: 25,
            strokeStyle: "black",
            strokeWidth: 1,
            fillStyle: "black"
        })
    }
    if (num === 2) {
        //both arms
        $('#theWords').removeLayer('text').drawLayers();
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
            text: "This escalated quickly",
            fontfamily: "cursive",
            fontSize: 15,
            x: 100,
            y: 25,
            strokeStyle: "black",
            strokeWidth: 1,
            fillStyle: "black"
        })
        $myCanvas.drawLine({

            strokeStyle: "black",
            strokeWidth: 1,
            x1: 270,
            y1: 53,
            x2: 255,
            y2: 63,
        })
        $myCanvas.drawLine({

            strokeStyle: "black",
            strokeWidth: 1,
            x1: 270,
            y1: 53,
            x2: 285,
            y2: 63,
        })
    }
    if (num === 1) {
        $('#theWords').removeLayer('text').drawLayers();
        //both legs
        $myCanvas.drawLine({
            strokeStyle: "black",
            strokeWidth: 1,
            x1: 270,
            y1: 75,
            x2: 280,
            y2: 85,
        })
        $myCanvas.drawLine({
            strokeStyle: "black",
            strokeWidth: 1,
            x1: 270,
            y1: 75,
            x2: 260,
            y2: 85,
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
            text: "This is gonna hurt",
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
export { hard }
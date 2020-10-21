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
    if (num === 8) {
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
            text: "Okay Time to get Serious",
            fontfamily: "cursive",
            fontSize: 15,
            x: 100,
            y: 25,
            strokeStyle: "black",
            strokeWidth: 1,
            fillStyle: "black"
        })
    }
    if (num === 6) {
        //right arm

        $myCanvas.drawLine({

            strokeStyle: "black",
            strokeWidth: 1,
            x1: 270,
            y1: 53,
            x2: 255,
            y2: 63,
        })

    }
    if (num === 4) {
        //left arm
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
            text: "Now I am worried",
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
            x2: 285,
            y2: 63,
        })

    }
    if (num === 3) {
        //left leg
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
        $myCanvas.drawLine({

            strokeStyle: "black",
            strokeWidth: 1,
            x1: 270,
            y1: 75,
            x2: 280,
            y2: 85,
        })

    }
    if (num === 1) {
        //right leg
        $('#theWords').removeLayer('text').drawLayers();
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
            text: "Please only be one guess away",
            fontfamily: "cursive",
            fontSize: 14,
            x: 100,
            y: 25,
            strokeStyle: "black",
            strokeWidth: 1,
            fillStyle: "black"
        })

    }


}

export { easy }
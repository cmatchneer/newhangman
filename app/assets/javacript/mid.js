import * as body from "./theBody.js"
var $theWords = $('#theWords');

function mid(num) {
    if (num === 9) {
        //head
        body.head()
    }
    if (num === 8) {
        // draw the left eye
        body.leftEye()
    }
    if (num === 7) {
        $('#theWords').removeLayer('text').drawLayers();
        // draw the right eye
        body.rightEye()
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
            text: "Well at least I can see",
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
        $('#theWords').removeLayer('text').drawLayers();
        //body
        body.body()
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
    if (num == 4) {
        //right arm
        $('#theWords').removeLayer('text').drawLayers();
        body.rightArm()
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
            text: "I am offically worried now",
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
        //left arm
        $('#theWords').removeLayer('text').drawLayers();
        body.leftArm()
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
            text: "Please be close to it getting right",
            fontfamily: "cursive",
            fontSize: 13,
            x: 100,
            y: 25,
            strokeStyle: "black",
            strokeWidth: 1,
            fillStyle: "black"
        })

    }
    if (num === 2) {
        //left leg
        body.leftLeg()
    }
    if (num === 1) {
        //right leg
        $('#theWords').removeLayer('text').drawLayers();
        body.rightLeg()
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

export { mid }
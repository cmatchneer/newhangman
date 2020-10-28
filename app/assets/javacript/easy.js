var $theWords = $('#theWords');
import * as body from "./theBody.js"

function easy(num) {

    if (num === 14) {
        body.head()
    }
    if (num === 12) {
        body.leftEye()
    }
    if (num === 10) {
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
    if (num === 6) {
        //right arm
        body.rightArm()


    }
    if (num === 4) {
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
            text: "Now I am worried",
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

export { easy }
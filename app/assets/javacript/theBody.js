var $myCanvas = $('#theMan');

function head() {
    //head
    $myCanvas.drawArc({
        strokeStyle: "black",
        strokeWidth: 1,
        x: 270,
        y: 38,
        radius: 10,
    })
}

function leftEye() {
    // draw the left eye
    $myCanvas.drawArc({
        fillStyle: '#333',
        strokeStyle: '#333',
        x: 265,
        y: 37,
        radius: 1.5
    })
}

function rightEye() {
    // draw the right eye
    $myCanvas.drawArc({
        fillStyle: '#333',
        strokeStyle: '#333',
        x: 275,
        y: 37,
        radius: 1.5
    })
}

function body() {
    // body
    $myCanvas.drawLine({

        strokeStyle: 'black',
        strokeWidth: 1,
        x1: 270,
        y1: 49,
        x2: 270,
        y2: 75,
    })
}

function rightArm() {
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

function leftArm() {
    // left arm
    $myCanvas.drawLine({

        strokeStyle: "black",
        strokeWidth: 1,
        x1: 270,
        y1: 53,
        x2: 285,
        y2: 63,
    })
}

function leftLeg() {
    //left leg
    $myCanvas.drawLine({

        strokeStyle: "black",
        strokeWidth: 1,
        x1: 270,
        y1: 75,
        x2: 280,
        y2: 85,
    })
}

function rightLeg() {
    // right leg
    $myCanvas.drawLine({

        strokeStyle: "black",
        strokeWidth: 1,
        x1: 270,
        y1: 75,
        x2: 260,
        y2: 85,
    })
}

export { head, leftEye, rightEye, leftArm, rightArm, leftLeg, rightLeg, body }
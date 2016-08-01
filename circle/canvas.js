window.onload = function () {
    //我们的代码
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var rad = Math.PI * 2 / 100;
    var speed = 0.1;
    function BlueCircle(n) {
        context.save();
        context.lineWidth = 5;
        context.strokeStyle = "#49f";
        context.beginPath();
        context.arc(centerX, centerY, 100, -Math.PI / 2, -Math.PI / 2 + n * rad, false);
        context.stroke();
        context.closePath();
        context.restore();
    }
    function whiteCircle() {
        context.save();
        context.lineWidth = 1;
        context.strokeStyle = "white";
        context.beginPath();
        context.arc(centerX, centerY, 100, 0, 2 * Math.PI, false);
        context.stroke();
        context.closePath();
        context.restore();
    }
    function drawText(n) {
        context.save();
        context.strokeStyle="#49f";
        context.font="40px Arial";
        context.strokeText(n.toFixed(0)+"%",centerX-25,centerY+10);
        //context.stroke();
        context.restore();
    }
    (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);
        BlueCircle(speed);
        drawText(speed);
        whiteCircle();
        if (speed > 100) {
            speed = 0;
        }
        speed += 0.1;


    } ());
}
window.onload = function () {
    //我们的代码
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext("2d");
    var w = canvas.width = window.innerWidth;
    var h = canvas.height = window.innerHeight;
    var clearColor = 'rgba(0,0,0,.1)';
    var fontSize = 16;
    var fontColor = "#33ff33";
    var words = "0123456789qwertyuiopasdfghjklzxcvbnm,./;'\[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?";
    var wordArr = words.split('');
    var columns = w / fontSize;
    var drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    function draw() {
        context.save();
        context.fillStyle = fontColor;
        context.font = fontSize + "px arial";
        for (var i = 0; i < drops.length; i++) {
            var text = wordArr[Math.floor(Math.random() * wordArr.length)];
            context.fillText(text, i * fontSize, drops[i] * fontSize);
            if(drops[i]*fontSize>h && Math.random() > 0.98){
                drops[i]=0;
            }
            drops[i]++;
        }
        //context.strokeText()
        context.restore();
    }
    (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.fillStyle = clearColor;
        context.fillRect(0, 0, w, h);
        draw();

    } ());
}
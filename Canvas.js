let Canvas = function () {
    this.drawText = function () {
        let c = document.getElementById('myCanvas');
        let ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.font = '30px Arial'
        ctx.fillStyle = 'blue';
        ctx.fillText('Flame Mobile',240,40,200);

    }
};
let canvas = new Canvas();
canvas.drawText();
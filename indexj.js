document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.querySelector('#board');
    var context = canvas.getContext('2d');

    var mouseDown = false;
    canvas.width = 700;
    canvas.height = 500;

    var mx = event.clientX;
    var my = event.clientY;

    canvas.addEventListener('mousedown', function (event) {
        mouseDown = true;
    });

    canvas.addEventListener('mouseup', function (event) {
        mouseDown = false;

    });

    document.addEventListener('mousemove', (event) => {
        mx = event.clientX;
        my = event.clientY;

        if (!mouseDown) {
            context.moveTo(event.clientX, event.clientY);

            setInterval(() => {
                context.lineTo(mx, my);
                context.stroke();
            }, 10);

        }
    });

    document.querySelector('#btnClear').addEventListener('click', (event) => {
        canvas.width = canvas.width;
    })

});
export function drawGrid(context, width, height, padding) {
    for (var i = 0; i <= width; i += 40) {
        context.moveTo(0.5 + i + padding, padding);
        context.lineTo(0.5 + i + padding, height + padding);
    }

    for (var j = 0; j <= height; j += 40) {
        context.moveTo(padding, 0.5 + j + padding);
        context.lineTo(width + padding, 0.5 + j + padding);
    }
    context.strokeStyle = "black";
    context.stroke();
}
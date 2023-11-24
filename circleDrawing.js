function drawMidpointCircle(centerX, centerY, radius) {
    let canvas = document.getElementById("midpointCircle");
    let ctx = canvas.getContext("2d");

    let x = radius;
    let y = 0;
    let radiusError = 1 - x;

    while (x >= y) {
        plotCirclePoints(ctx, centerX, centerY, x, y);

        y++;

        if (radiusError < 0) {
            radiusError += 2 * y + 1;
        } else {
            x--;
            radiusError += 2 * (y - x) + 1;
        }
    }
}

function plotCirclePoints(ctx, centerX, centerY, x, y) {
    ctx.fillRect(centerX + x, centerY + y, 1, 1);
    ctx.fillRect(centerX - x, centerY + y, 1, 1);
    ctx.fillRect(centerX + x, centerY - y, 1, 1);
    ctx.fillRect(centerX - x, centerY - y, 1, 1);
    ctx.fillRect(centerX + y, centerY + x, 1, 1);
    ctx.fillRect(centerX - y, centerY + x, 1, 1);
    ctx.fillRect(centerX + y, centerY - x, 1, 1);
    ctx.fillRect(centerX - y, centerY - x, 1, 1);
}

// Daireyi çizmek için bu fonksiyonu çağırın
drawMidpointCircle(200, 200, 100); // Merkez (200, 200) ve yarıçapı 100 olan bir daire çiziyoruz

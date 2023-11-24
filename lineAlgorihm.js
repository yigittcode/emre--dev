function drawLine(x1, y1, x2, y2) {
    let canvas = document.getElementById("line-canvas");
    let ctx = canvas.getContext("2d");

    let dx = Math.abs(x2 - x1);
    let dy = Math.abs(y2 - y1);
    let sx = (x1 < x2) ? 1 : -1;
    let sy = (y1 < y2) ? 1 : -1;
    let err = dx - dy;

    while (true) {
        ctx.fillRect(x1, y1, 1, 1); // Her bir pikseli çizmek için fillRect kullanıyoruz

        if (x1 === x2 && y1 === y2) break;
        let e2 = 2 * err;
        if (e2 > -dy) {
            err -= dy;
            x1 += sx;
        }
        if (e2 < dx) {
            err += dx;
            y1 += sy;
        }
    }
}

// Çizgiyi çizmek için bu fonksiyonu çağırın
drawLine(20, 20, 180, 180); // (20, 20) ve (180, 180) noktaları arasında bir çizgi çiziyoruz



















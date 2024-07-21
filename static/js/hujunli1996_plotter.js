import { parseStrToList } from './shared/work_string.js';

export function drawHujunLi1996NowellDomain() {

    // get canvas and clear
    const svgCanvas = document.getElementById('hujunLiDomain');

    // Clear the SVG canvas by removing all child elements
    while (svgCanvas.firstChild) {
        svgCanvas.removeChild(svgCanvas.firstChild);
    }

    // read input params
    const n = parseInt(document.getElementById("frac_count").value);
    const xfs_str = document.getElementById("frac_xfs").value; // in m
    const yfs_str = document.getElementById("frac_yfs").value;  // in m
    const rc = parseFloat(document.getElementById("rc").value);  // in m
    const wl = parseFloat(document.getElementById("len_well").value);  // in m

    const xfs = parseStrToList(xfs_str, ',');
    const yfs = parseStrToList(yfs_str, ',');

    setViewBox(svgCanvas, -rc, -rc, wl + 2.0 * rc, rc);
    createRect(svgCanvas, -rc, -rc, wl + 2.0 * rc, 2.0 * rc, "black", 2, "none");

    // well
    createLine(svgCanvas, 0.0, 0.0, wl, 0.0, "blue", 2);

    // fracts
    for (let i = 0; i < n; i++) {
        createLine(svgCanvas, yfs[i], -xfs[i], yfs[i], xfs[i], "red", 2 );
    }

}

function setViewBox(svg, x, y, width, height) {
    svg.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);
}

function createRect(svg, x, y, width, height, strokeColor, strokeWidth, fillColor) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('stroke', strokeColor);
    rect.setAttribute('stroke-width', strokeWidth);
    rect.setAttribute('fill', fillColor);
    svg.appendChild(rect);
}

function createLine(svg, x1, y1, x2, y2, strokeColor, strokeWidth) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', strokeColor);
    line.setAttribute('stroke-width', strokeWidth);
    svg.appendChild(line);
}

// Attach event listener to the button after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('drawNoWellDomainButton').addEventListener('click', drawHujunLi1996NowellDomain);
});
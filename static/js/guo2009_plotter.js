import { parseStrToList } from './shared/work_string.js';
import { calcListAverage } from './shared/work_list.js';
import { calcRl, getZes } from './guo2009_common.js';

export function drawGuo2009Domain() {
    const n = parseInt(document.getElementById("frac_count").value);
    const xfs_str = document.getElementById("frac_xfs").value; // in m
    const yfs_str = document.getElementById("frac_yfs").value;  // in m

    let xfs = parseStrToList(xfs_str, ',');
    let yfs = parseStrToList(yfs_str, ',');

    let xf_aver = calcListAverage(xfs);
    let zes = getZes(yfs);
    let ze_aver = calcListAverage(zes);
    let rl = calcRl(xf_aver, ze_aver, n);

    const nx = 2.5;
    const y_min = 0.0;
    const y_max = getMaximum(yfs) + yfs[0];
    let x_min = 0.0;
    let x_max = nx * getMaximum(xfs);
    x_min = Math.min(x_min, y_min);
    x_max = Math.max(x_max, y_max);
    const dx = (nx - 2.0) / 2.0;

    const svgCanvas = document.getElementById('guoDomain');
    const canvasSize = svgCanvas.getBoundingClientRect().width; // always should be square

    // Clear the SVG canvas by removing all child elements
    while (svgCanvas.firstChild) {
        svgCanvas.removeChild(svgCanvas.firstChild);
    }

    const domain_center_x = calcNormalized((x_min + x_max) / 2.0, x_min, x_max) * canvasSize;
    const domain_center_y = domain_center_x;

    const well_len = calcNormalized(y_max, x_min, x_max) * canvasSize;
    const dy = domain_center_y - well_len / 2.0
    rl = normalizeRadius(rl, x_min, x_max, x_min, x_max) * canvasSize;

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', domain_center_x);
    circle.setAttribute('cy', domain_center_y);
    circle.setAttribute('r', rl);
    circle.setAttribute('stroke-dasharray', "5, 5");
    circle.setAttribute('stroke', "black");
    circle.setAttribute('stroke-width', "3");
    circle.setAttribute('fill', "None");
    // Append the new circle to the SVG canvas
    svgCanvas.appendChild(circle);

    for (let i = 0; i < n; i++) {
        const xf_min = calcNormalized(dx * xfs[i], x_min, x_max) * canvasSize;
        const xf_max = calcNormalized((nx - dx) * xfs[i], x_min, x_max) * canvasSize;
        const yf = calcNormalized(yfs[i], x_min, x_max) * canvasSize + dy;
        // Create a new line element
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('id', `frac${i + 1}`);
        line.setAttribute('x1', yf);
        line.setAttribute('y1', xf_min);
        line.setAttribute('x2', yf);
        line.setAttribute('y2', xf_max);
        line.setAttribute('stroke', "red");
        line.setAttribute('stroke-width', 2);

        // Append the new line to the SVG canvas
        svgCanvas.appendChild(line);
    }

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const well_y_min = y_min + dy;
    const well_y_max = well_len + dy;
    line.setAttribute('id', `well`);
    line.setAttribute('x1', well_y_min);
    line.setAttribute('y1', domain_center_x);
    line.setAttribute('x2', well_y_max);
    line.setAttribute('y2', domain_center_x);
    line.setAttribute('stroke', "blue");
    line.setAttribute('stroke-width', 2);

    // Append the new line to the SVG canvas
    svgCanvas.appendChild(line);
}

function normalizeRadius(radius, xMin, xMax, yMin, yMax) {
    let xScale = 1 / (xMax - xMin);
    let yScale = 1 / (yMax - yMin);
    let scaleFactor = Math.min(xScale, yScale); // Choose the smaller scale to maintain aspect ratio
    return radius * scaleFactor;
}

function calcNormalized(x, x_min, x_max) {
    if (x_max - x_min === 0) {
        throw new Error("x_min and x_max cannot be the same value");
    }
    return (x - x_min) / (x_max - x_min);
}

function getMaximum(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.max(...arr);
}

function getMinimum(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.min(...arr);
}

// Attach event listener to the button after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('drawDomainButton').addEventListener('click', drawGuo2009Domain);
});
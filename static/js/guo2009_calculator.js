import { parseStrToList, numberToFormattedStr } from './shared/work_string.js';
import { calcListAverage } from './shared/work_list.js';

const gamma = 1.78;

export function calculateResultsGuo2009() {
    const pc = parseFloat(document.getElementById("press_res").value) * 1e5; // convert atm to Pa
    const h = parseFloat(document.getElementById("h_res").value);

    // if (isNaN(h)) {
    //     alert("Please enter a valid number for the height.");
    //     return;
    // }
    const kr = parseFloat(document.getElementById("k_res").value) * 1e-12; // convert Darcy to m2
    const pw = parseFloat(document.getElementById("press_well").value) * 1e5; // convert atm to Pa
    const rw = parseFloat(document.getElementById("rad_well").value) * 1e-2; // convert cm to m
    const mu = parseFloat(document.getElementById("mu").value) * 1e-3; // convert cП to Pa * c
    const n = parseInt(document.getElementById("frac_count").value);
    const xfs_str = document.getElementById("frac_xfs").value; // in m
    const yfs_str = document.getElementById("frac_yfs").value;  // in m
    const ws_str = document.getElementById("frac_ws").value; // in mm
    const kfs_str = document.getElementById("frac_kfs").value; // in Darcy


    let xfs = parseStrToList(xfs_str, ',');
    let yfs = parseStrToList(yfs_str, ',');
    let ws = parseStrToList(ws_str, ',').map(item => item * 1e-3); // convert to m
    let kfs = parseStrToList(kfs_str, ',').map(item => item * 1e-12); // convert to m2

    // console.log('xfs = :', xfs)
    let xf_aver = calcListAverage(xfs);
    let zes = getZes(yfs);
    let ze_aver = calcListAverage(zes);
    let rl = calcRl(xf_aver, ze_aver, n);
    let a = calcA(rl);
    let ah = calcAh(n, xf_aver, ze_aver);
    let c_a = calcC_A(ah);
    let f = calcF(a, c_a, rl);
    let jbr = calcJBigR(kr, h, mu, f);
    let cf_jl = calcJLCoeff(kr, h, mu);
    let jl = calcJL(cf_jl, kr, n, zes, xfs, ws, kfs);
    let jsr = calcJSmallR(n, kfs, ws, mu, h, rw)

    updateCellValue("aver_xf_value", xf_aver, 1)
    updateCellValue("aver_ze_value", ze_aver, 1);
    updateCellValue("rl_value", rl, 1);
    updateCellValue("a_value", a, 1);
    updateCellValue("ah_value", ah, 1);
    updateCellValue("CA_value", c_a, 1);
    updateCellValue("F_value", f, 1);
    updateCellValue("lnF_value", Math.log(f), 1);
    updateCellValue("j_big_r_value", jbr, 2, 'scientific');
    updateCellValue("jl_cf_value", cf_jl, 2, 'scientific');
    updateCellValue("jl_value", jl, 2, 'scientific');
    updateCellValue("j_small_r_value", jsr, 2, 'scientific');
    updateCellValue("over_j_big_r_value", 1.0 / jbr, 2, 'scientific');
    updateCellValue("over_jl_value", 1.0 / jl, 2, 'scientific');
    updateCellValue("over_j_small_r_value", 1.0 / jsr, 2, 'scientific');
    let sum = 1.0 / jbr + 1.0 / jl + 1.0 / jsr;
    updateCellValue("sum_value", sum, 2, 'scientific');
    updateCellValue("over_sum_value", 1.0 / sum, 2, 'scientific');
    let dp = (pc - pw);
    updateCellValue("q_sec_value", dp / sum, 2, 'scientific');

    updateCellValue("q_day_value", dp / sum * 24 * 60 * 60, 2, 'scientific');
}

function calcJSmallR(n, kfs, ws, mu, h, rw) {
    const cf = Math.PI / (6 * mu);
    let result = 0.0;
    let a = Math.log(h / (2.0 * rw));
    for (let i = 0; i < n; i++) {
        const kf = kfs[i];
        const w = ws[i];
        let numerator = kf * w;
        let denominator = a + Math.PI - 1.224;
        result += numerator / denominator
    }

    return result * cf;
}

function calcCi(ze, w, kf, k_h) {
    return 24 * k_h / (ze * w * kf);
}

function calcJL(cf_jl, k_h, n, zes, xfs, ws, kfs) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        const ze = zes[i];
        const xf = xfs[i];
        const w = ws[i];
        const kf = kfs[i];
        const ci = calcCi(ze, w, kf, k_h);
        const a = 1 - Math.exp(-Math.sqrt(ci) * xf);
        sum += a / (ze * Math.sqrt(ci));
    }

    return cf_jl * sum;
}

function calcJLCoeff(k, h, mu) {
    return 4 * k * h / mu;
}

function calcJBigR(k, h, mu, f) {
    let lnf = Math.log(f)
    let numerator = 2.0 * Math.PI * k * h;
    let denominator = mu * 0.5 * lnf;
    return numerator / denominator;
}

function calcF(a, c_a, rl) {
    let numerator = 4.0 * a;
    let denminator = gamma * c_a * rl ** 2;
    return numerator / denminator;
}

function calcAh(n, xf_aver, ze_aver) {
    return n * ze_aver / xf_aver;
}

function calcC_A(ah) {
    const table = [
        [3, 11.4948], [4, 5.3790], [6, 0.9935], [7, 0.4068],
        [8, 0.1632], [9, 6.44e-2], [10, 2.51e-2],
        [11, 9.69e-3], [12, 3.71e-3], [13, 1.41e-3],
        [14, 5.33e-4], [15, 2.00e-4], [16, 7.50e-5], [17, 2.80e-5],
        [18, 1.04e-5], [19, 3.85e-6], [20, 1.42e-6], [25, 9.46e-9],
        [29, 1.66e-11], [40, 2.28e-18], [67, 2.01e-27]
    ];

    // If ah value is less than the first element, return the minimum c2 value
    if (ah < table[0][0]) {
        return table[0][1];
    }

    // If ah value is greater than the last element, return the maximum c2 value
    if (ah > table[table.length - 1][0]) {
        return table[table.length - 1][1];
    }

    // Find the two nearest values of c1
    for (let i = 0; i < table.length - 1; i++) {
        if (table[i][0] <= ah && ah <= table[i + 1][0]) {
            const [c1_left, c2_left] = table[i];
            const [c1_right, c2_right] = table[i + 1];

            // Perform linear interpolation
            const ca = c2_left + (c2_right - c2_left) * (ah - c1_left) / (c1_right - c1_left);
            return ca;
        }
    }

    // If no suitable pair is found (this should not happen), return NaN
    return NaN;
}

function calcA(rl) {
    return Math.PI * rl ** 2;
}

function calcRl(xf_aver, ze_aver, n) {
    let numerator = 4.0 * n * ze_aver * xf_aver;
    let denminator = Math.PI;

    return Math.sqrt(numerator / denminator);
}

function getZes(arr) {
    const n = arr.length;
    if (n === 0) return [];
    if (n === 1) return arr; // If only one element, return as is

    const result = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            // First element, use only the next element
            result[i] = (arr[i + 1] - arr[i]);
        } else if (i === n - 1) {
            // Last element, use only the previous element
            result[i] = (arr[i] - arr[i - 1]);
        } else {
            // Middle elements, average distance to neighbors
            const distanceToPrev = arr[i] - arr[i - 1];
            const distanceToNext = arr[i + 1] - arr[i];
            result[i] = (distanceToPrev + distanceToNext) / 2;
        }
    }

    // Divide all results by 2 at the end
    return result.map(value => value / 2);
}

function updateCellValue(cell_id_name, value, decimalPlaces = 2, formatType = 'decimal') {
    const cell = document.getElementById(cell_id_name);
    const formattedValue = numberToFormattedStr(value, decimalPlaces, formatType);
    cell.innerHTML = formattedValue;
}

// Attach event listener to the button after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculateButton').addEventListener('click', calculateResultsGuo2009);
});

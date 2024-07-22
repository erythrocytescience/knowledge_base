import { parseStrToList, numberToFormattedStr } from './shared/work_string.js';
import { calcListAverage } from './shared/work_list.js';

const gamma = 1.78;

export function calculateResultsHujun1996() {
    const pc = parseFloat(document.getElementById("press_res").value) * 1e5; // convert atm to Pa
    const h = parseFloat(document.getElementById("h_res").value);
    const rc = parseFloat(document.getElementById("rc").value);
    const kr = parseFloat(document.getElementById("k_res").value) * 1e-12; // convert Darcy to m2
    const pw = parseFloat(document.getElementById("press_well").value) * 1e5; // convert atm to Pa
    const rw = parseFloat(document.getElementById("rad_well").value) * 1e-2; // convert cm to m
    const wl = parseFloat(document.getElementById("len_well").value);
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

    const dp = pc - pw;
    let total_q = 0.0
    for (let i = 0; i < n; i++) {
        const [lf1, lf2] = calcLf(wl, rc, yfs, i);
        const qf = calcQFract(kr, h, dp, mu, rc, xfs[i], lf1, lf2, kfs[i], ws[i], rw);
        total_q += qf;
    }
    updateCellValue("q_value", total_q, 2, 'scientific');
}

function calcQFract(k, h, dp, mu, rc, xf, lf1, lf2, kf, w, rw) {
    const cf = (2.0 * Math.PI * k * h) * dp / mu;
    const a1 = (Math.PI * (rc - xf)) / (lf1 + lf2);
    const a2 = (Math.PI) / (xf * (1.0 / lf1 + 1.0 / lf2));
    const a3 = (Math.PI * xf * k) / (kf * w);
    const a4 = (k * h) / (kf * w) * (Math.log(h / (2.0 * rw)) - Math.PI / 2.0);
    const a = a1 + a2 + a3 + a4;

    return cf / a;
}

function calcLf(wl, rc, yfs, fr_ind) {
    let lf1 = 0.0;
    let lf2 = 0.0;
    const yf_current = yfs[fr_ind];
    if (fr_ind == 0) {
        lf1 = yf_current + rc;
    }
    else {
        lf1 = yf_current - yfs[fr_ind - 1];
    }

    if (fr_ind == yfs.length - 1) {
        lf2 = wl - yf_current + rc;
    }
    else {
        lf2 = yfs[fr_ind + 1] - yf_current;
    }

    return [lf1 / 2.0, lf2 / 2.0];
}

function updateCellValue(cell_id_name, value, decimalPlaces = 2, formatType = 'decimal') {
    const cell = document.getElementById(cell_id_name);
    const formattedValue = numberToFormattedStr(value, decimalPlaces, formatType);
    cell.innerHTML = formattedValue;
}

// Attach event listener to the button after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculateButton').addEventListener('click', calculateResultsHujun1996);
});

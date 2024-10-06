import { parseStrToList } from './shared/work_string.js';

export function calcTest() {
    const pc = parseFloat(document.getElementById("press_res").value);

    // Print the value of h to the console for debugging
    console.log("Value of pc:", pc);

    if (isNaN(pc)) {
        alert("Please enter a valid number for the pressure.");
        return;
    }

    const table_output = document.getElementById("tableOutput");
    table_output.rows[1].cells[1].innerText = pc * 1e5;
}

// Attach event listener to the button after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculateButton').addEventListener('click', calcTest);
});
function calcListAverage(l) {
    if (l.length === 0) {
        return 0.0; // Handle empty list case
    }

    let sum = l.reduce((acc, item) => acc + item, 0);
    let average = sum / l.length;

    return average;
}

function getMaximum(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.max(...arr);
}

function getMin(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.min(...arr);
}


// Export the function
export { calcListAverage,  getMaximum, getMin };
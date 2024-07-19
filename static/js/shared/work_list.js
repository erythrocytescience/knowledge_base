function calcListAverage(l) {
    if (l.length === 0) {
        return 0.0; // Handle empty list case
    }

    let sum = l.reduce((acc, item) => acc + item, 0);
    let average = sum / l.length;

    return average;
}

// Export the function
export { calcListAverage };
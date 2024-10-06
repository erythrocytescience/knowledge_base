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

function calcRl(xf_aver, ze_aver, n) {
    let numerator = 4.0 * n * ze_aver * xf_aver;
    let denminator = Math.PI;

    return Math.sqrt(numerator / denminator);
}

export { calcRl, getZes };
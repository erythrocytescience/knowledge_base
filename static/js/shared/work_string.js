function parseStrToList(str, separator) {
    // Split the string using the separator
    let parts = str.split(separator);

    // Convert each part to a float and filter out any non-numeric values
    let floatList = parts.map(parseFloat).filter(Number.isFinite);

    return floatList;
}

function numberToFormattedStr(value, decimalPlaces = 2, formatType = 'decimal') {
    let formattedValue;

    switch (formatType) {
        case 'decimal':
            formattedValue = value.toFixed(decimalPlaces);
            break;
        case 'scientific':
            formattedValue = value.toExponential(decimalPlaces);
            break;
        case 'currency':
            formattedValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: decimalPlaces }).format(value);
            break;
        case 'percentage':
            formattedValue = (value * 100).toFixed(decimalPlaces) + '%';
            break;
        default:
            formattedValue = value.toFixed(decimalPlaces); // Default to decimal if formatType is not recognized
            break;
    }

    return formattedValue;

}

// Export the function
export { parseStrToList,  numberToFormattedStr};
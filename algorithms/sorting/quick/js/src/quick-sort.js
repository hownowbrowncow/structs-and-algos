function quickSort(data) {
    if (data.length <= 1) {
        return data;
    }

    const middle = Math.floor(data.length / 2);
    const pivot = data[middle];
    const equal = [];
    const less = [];
    const greater = [];

    for (let inc = 0; inc < data.length; inc += 1) {
        if (data[inc] === pivot) {
            equal.push(data[inc]);
        } else if (data[inc] < pivot) {
            less.push(data[inc]);
        } else {
            greater.push(data[inc]);
        }
    }

    return [].concat(quickSort(less), equal, quickSort(greater));
}

export default quickSort;

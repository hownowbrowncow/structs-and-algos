function quick(data) {
    if (data.length <= 1) {
        return data;
    }

    let middle = Math.floor(data.length / 2);
    let pivot = data[middle];
    let equal = [];
    let less = [];
    let greater = [];

    for (let i = 0; i < data.length; i += 1) {
        if (data[i] === pivot) {
            equal.push(data[i]);
        } else if (data[i] < pivot) {
            less.push(data[i]);
        } else {
            greater.push(data[i]);
        }
    }

    return [].concat(quick(less), equal, quick(greater));
}

export default quick;

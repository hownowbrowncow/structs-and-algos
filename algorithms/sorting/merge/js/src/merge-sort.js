function sort(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left[0]);
            left.shift();
        } else {
            result.push(right[0]);
            right.shift();
        }
    }

    while (left.length) {
        result.push(left[0]);
        left.shift();
    }

    while (right.length) {
        result.push(right[0]);
        right.shift();
    }

    return result;
}

function mergeSort(data) {
    if (data.length <= 1) {
        return data;
    }

    const middle = Math.floor(data.length / 2);
    let left = data.slice(0, middle);
    let right = data.slice(middle, data.length);

    left = mergeSort(left);
    right = mergeSort(right);

    return sort(left, right);
}

export default mergeSort;

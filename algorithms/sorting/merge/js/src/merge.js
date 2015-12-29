function merge(data) {
    if (data.length <= 1) {
        return data;
    }

    let middle = Math.floor(data.length / 2);
    let left = data.slice(0, middle);
    let right = data.slice(middle, data.length);

    left = merge(left);
    right = merge(right);

    return mergeSort(left, right);
}

function mergeSort(left, right) {
    let result = [];

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

export default merge;

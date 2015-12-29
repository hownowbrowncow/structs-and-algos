function bubbleSort(data) {
    for (var i = 0; i < data.length; i += 1) {
        for (var j = 0; j < data.length; j += 1) {
            if (data[i] < data[j]) {
                let temp = data[j];
                data[j] = data[i];
                data[i] = temp;
            }
        }
    }

    return data;
}

export default bubbleSort;

function bubbleSort(data) {
    for (let inc = 0; inc < data.length; inc += 1) {
        for (let inc2 = 0; inc2 < data.length; inc2 += 1) {
            if (data[inc] < data[inc2]) {
                const temp = data[inc2];

                data[inc2] = data[inc];
                data[inc] = temp;
            }
        }
    }

    return data;
}

export default bubbleSort;

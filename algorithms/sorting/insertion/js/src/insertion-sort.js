function insertionSort(data) {
    for (let inc = 1; inc < data.length; inc += 1) {
        let inc2 = inc;

        while (inc2 >= 0 && data[inc2 - 1] > data[inc2]) {
            const temp = data[inc2];

            data[inc2] = data[inc2 - 1];
            data[inc2 - 1] = temp;
            inc2 -= 1;
        }
    }

    return data;
}

export default insertionSort;

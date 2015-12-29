function shellSort(data) {
    let gap = Math.floor(data.length / 2);

    while (gap !== 0) {
        let current = gap;

        while (current < data.length) {
            const hold = data[current];
            let inc = current - gap;

            while (inc >= 0 && hold < data[inc]) {
                data[inc + gap] = data[inc];
                inc -= gap;
            }

            data[inc + gap] = hold;
            current += 1;
        }

        gap = Math.floor(gap / 2);
    }

    return data;
}

export default shellSort;

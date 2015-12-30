function factorial(num) {
    let sum = 1;

    if (num < 2) {
        return sum;
    }

    for (let inc = 2; inc <= num; inc += 1) {
        sum *= inc;
    }

    return sum;
}

export default factorial;

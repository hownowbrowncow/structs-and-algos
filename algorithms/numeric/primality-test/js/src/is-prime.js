function isPrime(num) {
    for (let inc = 2; inc <= num; inc += 1) {
        for (let inc2 = 1; inc2 <= Math.sqrt(num); inc2 += 1) {
            if (inc * inc2 === num && inc !== num && inc2 !== 1) {
                return false;
            }
        }
    }

    return true;
}

export default isPrime;

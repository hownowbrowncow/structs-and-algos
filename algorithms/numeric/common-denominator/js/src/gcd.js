function gcd(numOne, numTwo) {
    if (numTwo === 0) {
        return numOne;
    }

    return gcd(numTwo, Math.floor(numOne % numTwo));
}

export default gcd;

function toBinary(num) {
    const binNum = [];
    let baseTenNum = num;

    while (baseTenNum > 0) {
        binNum.push(Math.floor(baseTenNum % 2));
        baseTenNum = Math.floor(baseTenNum / 2);
    }

    return binNum.reverse().join('');
}

export default toBinary;

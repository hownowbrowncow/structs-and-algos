import chai from 'chai';
import mocha from 'mocha';

function createRandomNum() {
    return Math.round(Math.random() * (10000 - 1) + 1);
}

function createData(length = 100) {
    let data = [];

    for (var i = 0; i < length; i += 1) {
        data[i] = createRandomNum();
    }

    return data;
}

function compare(a, b) {
    return a - b;
}

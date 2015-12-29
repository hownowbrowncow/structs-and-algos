/* eslint-disable */
import chai from 'chai';
import mergeSort from './merge-sort';

const expect = chai.expect;

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

describe('Merge Sort Tests', function() {
    it('sorts an array of numbers', function() {
        let random = createData();
        let expected = random.slice(0, random.length).sort(compare);

        expect(random).to.not.equal(expected);
        expect(mergeSort(random)).to.deep.equal(expected);
    });
});

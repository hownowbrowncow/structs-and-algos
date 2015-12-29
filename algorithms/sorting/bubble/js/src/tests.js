import chai from 'chai';
import mocha from 'mocha';
import bubbleSort from './bubble-sort';

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

describe('Bubble Sort tests', function() {
    it('sorts an array of unsorted random numbers', function() {
        const random = createData();
        const expected = random.slice(0, random.length).sort(compare);

        expect(random).to.not.equal(expected);
        expect(bubbleSort(random)).to.deep.equal(expected);
    });
});

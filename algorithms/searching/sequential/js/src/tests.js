/* eslint-disable */
import chai from 'chai';
import sequentialSearch from './sequential';

const expect = chai.expect;
const data = [5, 3, 10, 500, 2355234];

describe('Sequential Search Tests', function() {
    it('returns index of value in array if value is found', function() {
        expect(sequentialSearch(5, data)).to.equal(0);
        expect(sequentialSearch(10, data)).to.equal(2);
        expect(sequentialSearch(500, data)).to.equal(3);
    });

    it('returns -1 if the value is not found in array', function() {
        expect(sequentialSearch(100, data)).to.equal(-1);
        expect(sequentialSearch(600, data)).to.equal(-1);
        expect(sequentialSearch(23556, data)).to.equal(-1);
    });
});

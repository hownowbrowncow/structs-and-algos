/* eslint-disable */
import chai from 'chai';
import toBinary from './to-binary';

const expect = chai.expect;

describe('To Binary Tests', function() {
    it('converts base ten number to binary', function() {
        const numOne = 100;
        const numTwo = 2536;
        const numThree = 623243;

        expect(toBinary(numOne)).to.equal(numOne.toString(2));
        expect(toBinary(numTwo)).to.equal(numTwo.toString(2));
        expect(toBinary(numThree)).to.equal(numThree.toString(2));
    });
});

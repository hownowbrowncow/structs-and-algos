/* eslint-disable */
import chai from 'chai';
import factorial from './factorial';

const expect = chai.expect;

describe('Factorial Tests', function() {
    it('returns the factorial of a given number', function() {
        expect(factorial(5)).to.equal(120);
        expect(factorial(10)).to.equal(3628800);
        expect(factorial(25)).to.equal(1.5511210043330986e+25);
    });
});

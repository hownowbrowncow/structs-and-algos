/* eslint-disable */
import chai from 'chai';
import gcd from './gcd';

const expect = chai.expect;

describe('Greatest Common Divisor Tests', function() {
    it('returns the greatest common divisor of two numbers', function() {
        expect(gcd(10, 12)).to.equal(2);
        expect(gcd(150, 100)).to.equal(50);
        expect(gcd(10000, 5000)).to.equal(5000);
        expect(gcd(980, 720)).to.equal(20);
        expect(gcd(1000, 0)).to.equal(1000);
    });
});

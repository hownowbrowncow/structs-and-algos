/* eslint-disable */
import chai from 'chai';
import isPrime from './is-prime';

const expect = chai.expect;

describe('Is Prime Tests', function() {
    it('returns true if number is prime', function() {
        expect(isPrime(11)).to.be.true;
        expect(isPrime(71)).to.be.true;
        expect(isPrime(131)).to.be.true;
        expect(isPrime(239)).to.be.true;
        expect(isPrime(557)).to.be.true;
        expect(isPrime(929)).to.be.true;
    });

    it('returns false if number is not prime', function() {
        expect(isPrime(6)).to.be.false;
        expect(isPrime(14)).to.be.false;
        expect(isPrime(28)).to.be.false;
        expect(isPrime(102)).to.be.false;
        expect(isPrime(665)).to.be.false;
        expect(isPrime(982)).to.be.false;
    });
});

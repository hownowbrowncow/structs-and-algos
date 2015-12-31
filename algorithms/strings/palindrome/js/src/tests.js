/* eslint-disable */
import chai from 'chai';
import isPalindrome from './is-palindrome';

const expect = chai.expect;

describe('Is Palindrome Tests', function() {
    it('returns true if value is palindrome', function() {
        expect(isPalindrome('deleveled')).to.be.true;
        expect(isPalindrome('deified')).to.be.true;
        expect(isPalindrome('marram')).to.be.true;
    });
    
    it('returns false if value is not palindrome', function() {
        expect(isPalindrome('history')).to.be.false;
        expect(isPalindrome('money')).to.be.false;
        expect(isPalindrome('program')).to.be.false;
    });
});

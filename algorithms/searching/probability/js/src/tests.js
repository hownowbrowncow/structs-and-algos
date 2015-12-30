/* eslint-disable */
import chai from 'chai';
import probabilitySearch from './probability';

const expect = chai.expect;
const data = [5, 1000, 234, 15, 5234];

describe('Probability Search Tests', function() {
    it('returns true when match is found', function() {
        expect(probabilitySearch(5, data)).to.be.true;
        expect(probabilitySearch(15, data)).to.be.true;
        expect(probabilitySearch(1000, data)).to.be.true;
    });

    it('returns false when no match is found', function() {
        expect(probabilitySearch(10, data)).to.be.false;
        expect(probabilitySearch(300, data)).to.be.false;
        expect(probabilitySearch(10000, data)).to.be.false;
    });

    it('swaps matched value with its predecessor in array', function() {
        expect(data[0]).to.equal(1000);
        expect(data[2]).to.equal(15);
        expect(data[1]).to.equal(5);
    });
});

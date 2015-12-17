import mocha from 'mocha';
import chai from 'chai';
import List from './list';
import ListNode from './list-node';

const expect = chai.expect;

describe('Singly Linked List Tests', function() {
    describe('ListNode tests', function() {
        describe('#constructor tests', function() {
            let list;

            before(function() {
                list = new List();
            });

            it('sets head and tail to null', function() {
                expect(list.head).to.be.null;
                expect(list.tail).to.be.null;
            });

            it('sets count to 0', function() {
                expect(list.count).to.equal(0);
            });
        });

        describe('#insert tests', function() {
            let list;

            before(function() {
                list = new List();
            });

            describe('first inserted list node tests', function() {
                before(function() {
                    list.insert(1);
                });

                it('sets head and tail to list node', function() {
                    expect(list.head).to.be.instanceof(ListNode);
                    expect(list.tail).to.be.instanceof(ListNode);
                    expect(list.head).to.equal(list.tail);
                });

                it('doesn\'t set head.next or tail.next', function() {
                    expect(list.head.next).to.be.null;
                    expect(list.tail.next).to.be.null;
                });
            });

            describe('second inserted list node tests', function() {
                before(function() {
                    list.insert(2);
                });

                it('sets tail to last inserted list node', function() {
                    expect(list.head).to.not.equal(list.tail);
                });

                it('sets head.next to last inserted list node', function() {
                    expect(list.head.next).to.equal(list.tail);
                });
            });

            describe('count increments on insertion', function() {
                it('should have count of 2', function() {
                    expect(list.count).to.equal(2);
                });
            });
        });
    });
});

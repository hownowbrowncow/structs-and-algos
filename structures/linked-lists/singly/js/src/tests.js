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

        describe('#contains tests', function() {
            let list;

            before(function() {
                list = new List();
            });

            it('returns false when no list nodes in list', function() {
                expect(list.contains(1)).to.be.false;
            });

            it('returns false when no matching list node value in list', function() {
                list.insert(1);

                expect(list.contains(2)).to.be.false;
            });

            it('returns true when matching list node value is in list', function() {
                expect(list.contains(1)).to.be.true;
            });
        });

        describe('#remove tests', function() {
            let list = new List();        

            it('returns false when list is empty', function() {
                expect(list.remove(1)).to.be.false;
            });

            it('returns false when no matching list node value', function() {
                list.insert(1);

                expect(list.remove(2)).to.be.false;
            });

            it('sets head and tail to null when only list node removed', function() {
                expect(list.remove(1)).to.be.true;
                expect(list.head).to.be.null;
                expect(list.tail).to.be.null;
            });

            it('sets head to head.next when removed list node is head', function() {
                list.insert(1);
                list.insert(2);
                
                let next = list.head.next;

                expect(list.remove(1)).to.be.true;
                expect(list.head).to.equal(next);
            });

            it('sets tail to previous list node when removed list node is tail', function() {
                list.insert(3);
                list.insert(4);

                let newTail = list.head.next;

                expect(list.remove(4)).to.be.true;
                expect(list.tail).to.equal(newTail);
            });

            it('removes matched list node and if between head and tail', function() {
                list.insert(5);
                list.insert(6);
                list.insert(7);

                expect(list.remove(5)).to.be.true;
                expect(list.contains(5)).to.be.false;
            });
        });
    });
});

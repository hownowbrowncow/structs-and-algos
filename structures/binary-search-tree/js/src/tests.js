import mocha from 'mocha';
import chai from 'chai';
import sinon from 'sinon';
import Tree from './tree';
import TreeNode from './tree-node';

const expect = chai.expect;

describe('Binary Search Tree Tests', function() {
    describe('Tree Tests', function() {
        describe('#constructor tests', function() {
            it('sets root to null on initialize', function() {
                const tree = new Tree();
                expect(tree.root).to.be.null;
            });
        });

        describe('#insert tests', function() {
            let tree;

            before(function() {
                tree = new Tree();
            });

            it('sets root to new tree node if root is null', function() {
                tree.insert(10);

                expect(tree.root).to.be.instanceof(TreeNode);
                expect(tree.root.value).to.equal(10);
            });

            it('calls insertNode when root node already exists', function() {
                const insertNodeSpy = sinon.spy(tree, 'insertNode');
                tree.insert(5);

                expect(insertNodeSpy.calledOnce).to.be.true;
                expect(insertNodeSpy.getCall(0).args[0]).to.equal(tree.root);
                expect(insertNodeSpy.getCall(0).args[1]).to.equal(5);
            });
        });
    });
});

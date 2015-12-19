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

        describe('#insertNode tests', function() {
            let tree;
            let insertNodeSpy;

            before(function() {
                tree = new Tree();
                insertNodeSpy = sinon.spy(tree, 'insertNode');
                tree.insert(20);
            });

            describe('less than parentNode.value tests', function() {
                it('sets new tree node to parentNode.left if parentNode.left not set', function() {
                    tree.insertNode(tree.root, 10);

                    expect(tree.root.left).to.be.instanceof(TreeNode);
                    expect(tree.root.left.value).to.equal(10);
                });

                it('recurses downward on parentNode.left if parentNode.left is set', function() {
                    insertNodeSpy.reset();
                    tree.insertNode(tree.root, 5);

                    expect(insertNodeSpy.calledTwice).to.be.true;
                    expect(insertNodeSpy.firstCall.args[0]).to.equal(tree.root);
                    expect(insertNodeSpy.firstCall.args[1]).to.equal(5);
                    expect(insertNodeSpy.secondCall.args[0]).to.equal(tree.root.left);
                    expect(insertNodeSpy.secondCall.args[1]).to.equal(5);
                    expect(tree.root.left.left).to.be.instanceof(TreeNode);
                    expect(tree.root.left.left.value).to.equal(5);
                });
            });

            describe('greater than or equal to parentNode.value tests', function() {
                it('sets new tree node to parentNode.right if parentNode.right not set', function() {
                    tree.insertNode(tree.root, 30);

                    expect(tree.root.right).to.be.instanceof(TreeNode);
                    expect(tree.root.right.value).to.equal(30);
                });

                it('recurses downward on parentNode.right if parentNode.right is set', function() {
                    insertNodeSpy.reset();
                    tree.insertNode(tree.root, 35);

                    expect(insertNodeSpy.calledTwice).to.be.true;
                    expect(insertNodeSpy.firstCall.args[0]).to.equal(tree.root);
                    expect(insertNodeSpy.firstCall.args[1]).to.equal(35);
                    expect(insertNodeSpy.secondCall.args[0]).to.equal(tree.root.right);
                    expect(insertNodeSpy.secondCall.args[1]).to.equal(35);
                    expect(tree.root.right.right).to.be.instanceof(TreeNode);
                    expect(tree.root.right.right.value).to.equal(35);
                });
            });
        });

        describe('#contains tests', function() {
            let tree;
            let containsSpy;

            before(function() {
                tree = new Tree();
                containsSpy = sinon.spy(tree, 'contains');
            });

            it('returns false if tree is empty', function() {
                expect(tree.root).to.be.null;
                expect(tree.contains(tree.root, 50)).to.be.false;
            });

            it('returns true of parentNode.value is search value', function() {
                tree.insert(50);
                
                expect(tree.contains(tree.root, 50)).to.be.true;
            });

            it('returns false if tree does not contain value', function() {
                expect(tree.contains(tree.root, 30)).to.be.false;
            });

            it('recurses downward on parentNode.left if search value less than parentNode.left', function() {
                containsSpy.reset();
                tree.insert(30);

                expect(tree.contains(tree.root, 30)).to.be.true;
                expect(containsSpy.calledTwice).to.be.true;
                expect(containsSpy.firstCall.args[0]).to.equal(tree.root);
                expect(containsSpy.firstCall.args[1]).to.equal(30);
                expect(containsSpy.secondCall.args[0]).to.equal(tree.root.left);
                expect(containsSpy.secondCall.args[1]).to.equal(30);
            });

            it('recurses downward on parentNode.right if search value greater than parentNode.right', function() {
                containsSpy.reset();
                tree.insert(70);

                expect(tree.contains(tree.root, 70)).to.be.true;
                expect(containsSpy.calledTwice).to.be.true;
                expect(containsSpy.firstCall.args[0]).to.equal(tree.root);
                expect(containsSpy.firstCall.args[1]).to.equal(70);
                expect(containsSpy.secondCall.args[0]).to.equal(tree.root.right);
                expect(containsSpy.secondCall.args[1]).to.equal(70);
            });
        });
    });
});

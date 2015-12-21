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
                expect(tree.count).to.equal(0);
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

            it('should increment count on each insert', function() {
                expect(tree.count).to.equal(2);
            });
        });

        describe('#insertNode tests', function() {
            let tree, insertNodeSpy;

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
            let tree, containsSpy;

            before(function() {
                tree = new Tree();
                containsSpy = sinon.spy(tree, 'contains');
            });

            it('returns false if tree is empty', function() {
                expect(tree.root).to.be.null;
                expect(tree.contains(tree.root, 50)).to.be.false;
            });

            it('returns true of rootNode.value is search value', function() {
                tree.insert(50);
                
                expect(tree.contains(tree.root, 50)).to.be.true;
            });

            it('returns false if tree does not contain value', function() {
                expect(tree.contains(tree.root, 30)).to.be.false;
            });

            it('recurses downward on rootNode.left if search value less than rootNode.left', function() {
                containsSpy.reset();
                tree.insert(30);

                expect(tree.contains(tree.root, 30)).to.be.true;
                expect(containsSpy.calledTwice).to.be.true;
                expect(containsSpy.firstCall.args[0]).to.equal(tree.root);
                expect(containsSpy.firstCall.args[1]).to.equal(30);
                expect(containsSpy.secondCall.args[0]).to.equal(tree.root.left);
                expect(containsSpy.secondCall.args[1]).to.equal(30);
            });

            it('recurses downward on rootNode.right if search value greater than rootNode.right', function() {
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

        describe('#findParentNode tests', function() {
            let tree, findParentNodeSpy;

            before(function() {
                tree = new Tree();
                tree.insert(50);
                findParentNodeSpy = sinon.spy(tree, 'findParentNode');
            });

            it('returns null if parentNode.value matches search value', function() {
                expect(tree.findParentNode(tree.root, 50)).to.be.null;
            });

            describe('search value is less than parentNode.value tests', function() {
                it('returns null of parentNode.left is null', function() {
                    expect(tree.findParentNode(tree.root, 30)).to.be.null;
                });
                
                it('returns parentNode if parentNode.left.value matches search value', function() {
                    tree.insert(30);

                    expect(tree.findParentNode(tree.root, 30)).to.equal(tree.root);
                });

                it('recurses downward on parentNode.left until tree node matching value is found',function() {
                    findParentNodeSpy.reset();
                    tree.insert(20);

                    expect(tree.findParentNode(tree.root, 20)).to.equal(tree.root.left);
                    expect(findParentNodeSpy.calledTwice).to.be.true;
                    expect(findParentNodeSpy.firstCall.args[0]).to.equal(tree.root);
                    expect(findParentNodeSpy.firstCall.args[1]).to.equal(20);
                    expect(findParentNodeSpy.secondCall.args[0]).to.equal(tree.root.left);
                    expect(findParentNodeSpy.secondCall.args[1]).to.equal(20);
                });
            });

            describe('search value is greater than parentNode.value.tests', function() {
                it('returns null of parentNode.right is null', function() {
                    expect(tree.findParentNode(tree.root, 70)).to.be.null;
                });
                
                it('returns parentNode if parentNode.right.value matches search value', function() {
                    tree.insert(70);

                    expect(tree.findParentNode(tree.root, 70)).to.equal(tree.root);
                });

                it('recurses downward on parentNode.right until tree node matching value is found', function() {
                    findParentNodeSpy.reset();
                    tree.insert(100);

                    expect(tree.findParentNode(tree.root, 100)).to.equal(tree.root.right);
                    expect(findParentNodeSpy.calledTwice).to.be.true;
                    expect(findParentNodeSpy.firstCall.args[0]).to.equal(tree.root);
                    expect(findParentNodeSpy.firstCall.args[1]).to.equal(100);
                    expect(findParentNodeSpy.secondCall.args[0]).to.equal(tree.root.right);
                    expect(findParentNodeSpy.secondCall.args[1]).to.equal(100);
                });
            });
        });

        describe('#fineNode tests', function() {
            let tree, findNodeSpy;

            before(function() {
                tree = new Tree();
                findNodeSpy = sinon.spy(tree, 'findNode');
            });

            it('returns null if rootNode is null', function() {
                expect(tree.findNode(tree.root, 50)).to.be.null;
            });

            it('returns rootNode of rootNode.value matches search value', function() {
                tree.insert(50);

                expect(tree.findNode(tree.root, 50)).to.equal(tree.root);
            });

            it('resurses downard on rootNode.left if search value less than rootNode.value', function() {
                findNodeSpy.reset();
                tree.insert(30);

                expect(tree.findNode(tree.root, 30)).to.equal(tree.root.left);
                expect(findNodeSpy.calledTwice).to.be.true;
                expect(findNodeSpy.firstCall.args[0]).to.equal(tree.root);
                expect(findNodeSpy.firstCall.args[1]).to.equal(30);
                expect(findNodeSpy.secondCall.args[0]).to.equal(tree.root.left);
                expect(findNodeSpy.secondCall.args[1]).to.equal(30);
            });

            it('recurses downard on rootNode.right if search value greater than rootNode.right', function() {
                findNodeSpy.reset();
                tree.insert(70);

                expect(tree.findNode(tree.root, 70)).to.equal(tree.root.right);
                expect(findNodeSpy.calledTwice).to.be.true;
                expect(findNodeSpy.firstCall.args[0]).to.equal(tree.root);
                expect(findNodeSpy.firstCall.args[1]).to.equal(70);
                expect(findNodeSpy.secondCall.args[0]).to.equal(tree.root.right);
                expect(findNodeSpy.secondCall.args[1]).to.equal(70);
            });
        });

        describe('#remove tests', function() {
            let tree;

            before(function() {
                tree = new Tree();
            });

            it('returns false if no matching tree node found', function() {
                expect(tree.remove(10)).to.be.false;
            });

            it('sets root node to null if matches value and is only node in tree', function() {
                tree.insert(50);

                expect(tree.root).to.be.instanceof(TreeNode);
                expect(tree.root.value).to.equal(50);
                expect(tree.remove(50)).to.be.true;
                expect(tree.root).to.be.null;
            });

            it('decrements count by 1 if node is removed', function() {
                tree.insert(50);

                expect(tree.count).to.equal(1);
                expect(tree.remove(50)).to.be.true;
                expect(tree.count).to.equal(0);

            });

            describe('node to remove has no left or right subtree', function() {
                it('sets parentNode.left to null if nodeToRemove.value is less than parentNode.value', function() {
                    tree.insert(50);
                    tree.insert(30);

                    expect(tree.root.left).to.be.instanceof(TreeNode);
                    expect(tree.remove(30)).to.be.true;
                    expect(tree.root.left).to.be.null;
                });

                it('sets parentNode.right to null if nodeToRemove.value is greater than parentNode.value', function() {
                    tree.insert(70);

                    expect(tree.root.right).to.be.instanceof(TreeNode);
                    expect(tree.remove(70)).to.be.true;
                    expect(tree.root.right).to.be.null;
                });
            });

            describe('node to remove has a right subtree but no left subtree', function() {
                it('sets parentNode.left to nodeToRemove.right if nodeToRemove.value less than parentNode.value', function() {
                    tree.insert(30);
                    tree.insert(40);

                    expect(tree.root.left).to.be.instanceof(TreeNode);
                    expect(tree.root.left.value).to.equal(30);
                    expect(tree.root.left.right).to.be.instanceof(TreeNode);
                    expect(tree.root.left.right.value).to.equal(40);
                    expect(tree.remove(30)).to.be.true;
                    expect(tree.root.left.value).to.equal(40);
                });

                it('sets parentNode.right to nodeToRemove.right if nodeToRemove.value greater than parentNode.right', function() {
                    tree.insert(60);
                    tree.insert(70);

                    expect(tree.root.right).to.be.instanceof(TreeNode);
                    expect(tree.root.right.value).to.equal(60);
                    expect(tree.root.right.right).to.be.instanceof(TreeNode);
                    expect(tree.root.right.right.value).to.equal(70);
                    expect(tree.remove(60)).to.be.true;
                    expect(tree.root.right.value).to.equal(70);
                });
            });

            describe('node to remove has a left subtree but no right subtree', function() {
                it('sets parentNode.left to nodeToRemove.left if nodeToRemove.value less than parentNode.value', function() {
                    tree.insert(30);

                    expect(tree.root.left).to.be.instanceof(TreeNode);
                    expect(tree.root.left.left).to.be.instanceof(TreeNode);
                    expect(tree.root.left.value).to.equal(40);
                    expect(tree.root.left.left.value).to.equal(30);
                    expect(tree.remove(40)).to.be.true;
                    expect(tree.root.left.value).to.equal(30);
                });

                it('sets parentNode.right to nodeToRemove.left if nodeToRemove.value greater than parentNode.value', function() {
                    tree.insert(60);

                    expect(tree.root.right).to.be.instanceof(TreeNode);
                    expect(tree.root.right.left).to.be.instanceof(TreeNode);
                    expect(tree.root.right.value).to.equal(70);
                    expect(tree.root.right.left.value).to.equal(60);
                    expect(tree.remove(70)).to.be.true;
                    expect(tree.root.right.value).to.equal(60);
                });
            });

            describe('node to remove has both left and right subtrees', function() {
                it('it promotes largest value in left subtree', function() {
                    expect(tree.root.value).to.equal(50);
                    expect(tree.root.left.value).to.equal(30);
                    expect(tree.root.right.value).to.equal(60);
                    expect(tree.remove(50)).to.be.true;
                    expect(tree.root.value).to.equal(30);
                    expect(tree.root.left).to.be.null;
                });
            });
        });
    });
});

import {isNull} from 'lodash';
import TreeNode from './tree-node';

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (isNull(this.root)) {
            this.root = new TreeNode(value);
        } else {
            this.insertNode(this.root, value);
        }
    }

    insertNode(parentNode, value) {
        if (value < parentNode.value) {
            if (isNull(parentNode.left)) {
                parentNode.left = new TreeNode(value);
            } else {
                this.insertNode(parentNode.left, value);
            }
        } else {
            if (isNull(parentNode.right)) {
                parentNode.right = new TreeNode(value);
            } else {
                this.insertNode(parentNode.right, value);
            }
        }
    }

    contains(value) {

    }

    remove(value) {

    }

    findNode(value) {

    }

    findParent(value) {

    }

    findMin() {

    }

    findMax() {

    }
}

export default Tree;

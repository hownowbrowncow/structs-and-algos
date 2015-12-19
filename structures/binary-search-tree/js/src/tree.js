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

    contains(parentNode, value) {
        if (isNull(parentNode)) {
            return false;
        }

        if (parentNode.value === value) {
            return true;
        } else if (value < parentNode.value) {
            return this.contains(parentNode.left, value);
        } else if (value > parentNode.value) {
            return this.contains(parentNode.right, value);
        }

        return false;
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

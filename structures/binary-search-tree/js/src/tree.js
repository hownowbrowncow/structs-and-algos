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

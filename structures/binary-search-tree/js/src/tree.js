import {isNull} from 'lodash';
import TreeNode from './tree-node';

class Tree {
    constructor() {
        this.root = null;
        this.count = 0;
    }

    insert(value) {
        if (isNull(this.root)) {
            this.root = new TreeNode(value);
        } else {
            this.insertNode(this.root, value);
        }

        this.count += 1;
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

    contains(rootNode, value) {
        if (isNull(rootNode)) {
            return false;
        }

        if (rootNode.value === value) {
            return true;
        } else if (value < rootNode.value) {
            return this.contains(rootNode.left, value);
        } else if (value > rootNode.value) {
            return this.contains(rootNode.right, value);
        }

        return false;
    }

    findParentNode(rootNode, value) {
        if (value === rootNode.value) {
            return null;
        }

        if (value < rootNode.value) {
            if (isNull(rootNode.left)) {
                return null;
            } else if (value === rootNode.left.value) {
                return rootNode;
            } else {
                return this.findParentNode(rootNode.left, value);
            }
        } else {
            if (isNull(rootNode.right)) {
                return null;
            } else if (value === rootNode.right.value) {
                return rootNode;
            } else {
                return this.findParentNode(rootNode.right, value);
            }
        }
    }

    findNode(rootNode, value) {
        if (isNull(rootNode)) {
            return null;
        }

        if (value === rootNode.value) {
            return rootNode;
        } else if (value < rootNode.value) {
            return this.findNode(rootNode.left, value);
        } else {
            return this.findNode(rootNode.right, value);
        }
    }

    remove(value) {
        let nodeToRemove = this.findNode(this.root, value);

        if (isNull(nodeToRemove)) {
            return false
        }

        let parentNode = this.findParentNode(this.root, value);

        if (this.count === 1) {
            this.root = null;
        } else if (isNull(nodeToRemove.left) && isNull(nodeToRemove.right)) {
            if (nodeToRemove.value < parentNode.value) {
                parentNode.left = null;
            } else {
                parentNode.right = null;
            }
        } else if (isNull(nodeToRemove.left) && !isNull(nodeToRemove.right)) {
            if (nodeToRemove.value < parentNode.value) {
                parentNode.left = nodeToRemove.right;
            } else {
                parentNode.right = nodeToRemove.right;
            }
        } else if (!isNull(nodeToRemove.left) && isNull(nodeToRemove.right)) {
            if (nodeToRemove.value < parentNode.value) {
                parentNode.left = nodeToRemove.left;
            } else {
                parentNode.right = nodeToRemove.left;
            }
        } else {
            let largestNode = nodeToRemove.left;

            while (!isNull(largestNode.right)) {
                largestNode = largestNode.right;
            }

            this.remove(largestNode.value);
            nodeToRemove.value = largestNode.value;
        }

        this.count -= 1;

        return true;
    }
}

export default Tree;

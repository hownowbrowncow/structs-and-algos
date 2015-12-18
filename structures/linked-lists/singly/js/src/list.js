import {isNull, isEqual} from 'lodash';
import ListNode from './list-node';

class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    insert(value) {
        let listNode = new ListNode(value);

        if (isNull(this.head)) {
            this.head = listNode;
            this.tail = listNode;
        } else {
            this.tail.next = listNode;
            this.tail = listNode;
        }

        this.count += 1;
    }

    contains(value) {
        let listNode = this.head;

        while (!isNull(listNode) && listNode.value !== value) {
            listNode = listNode.next;
        }

        return isNull(listNode) ? false : true;
    }

    remove(value) {
        if (isNull(this.head)) {
            return false;
        }

        let listNode = this.head;

        if (listNode.value === value) {
            if (isEqual(this.head, this.tail)) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
            }

            this.count -= 1;

            return true;
        }

        while (!isNull(listNode.next) && listNode.next.value !== value) {
            listNode = listNode.next;
        }

        if (!isNull(listNode.next)) {
            if (isEqual(listNode.next, this.tail)) {
                this.tail = listNode;
            }

            listNode.next = listNode.next.next;
            this.count -= 1;

            return true;
        }

        return false;
    }
}

export default List;

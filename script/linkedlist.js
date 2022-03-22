class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }


    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] === 'function') {


            const list = new LinkedList();


            iterable.forEach((item) => list.append(item));
            return list;
        }


        throw new Error('Ошибка! not iterable');
    }


    append(elem) {
        const newNode = new ListNode(elem);


        if (!this.first || !this.last) {
            this.first = newNode;
            this.last = newNode;
        }


        this.last.next = newNode;
        this.last = newNode;
    }


    prepend(elem) {
        const newNode = new ListNode(elem, this.first);


        this.first = newNode;


        if (!this.last) {
            this.last = newNode;
        }
    }


    find(elem) {
        if (!this.first) {
            return null;
        }


        let currentNode = this.first;


        while (currentNode) {
            if (currentNode.value === elem) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }


        return null;
    }


    toArray() {
        const arrayFromLinkedList = [];

        let currentNode = this.first;


        while (currentNode) {
            arrayFromLinkedList.push(currentNode.value);
            currentNode = currentNode.next;
        }


        return arrayFromLinkedList;
    }
}


class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


module.exports = { LinkedList };
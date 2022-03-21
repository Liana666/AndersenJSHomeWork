class Stack {
    constructor(maxStack = 10) {
        this.last = null;
        this.length = 0;
        this.maxStack = maxStack;
    }


    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] === 'function') {


            const stack = new Stack(iterable.length);
            const iterableReversed = iterable;


            iterableReversed.forEach((item) => stack.push(item));


            return stack;
        }


        throw new Error('Ошибка! not iterable');
    }


    push(elem) {
        if (this.length == this.maxStack) {
            throw new Error('Ошибка! Stack полный');
        }


        let newNode = new Node(elem);


        if (this.length === 0) {
            this.last = newNode;
        } else {
            let prevLast = this.last;
            this.last = newNode;
            newNode.next = prevLast;
        }


        this.length++;
    }


    pop() {
        if (this.length === 0) {
            throw new Error('Ошибка! Stack пуст');
        }


        let removeNode = this.last;


        this.last = this.last.next;
        this.length--;


        return removeNode.value;
    }


    peek() {
        if (this.length === 0) {
            return null;
        }


        return this.last.value;
    }


    isEmpty() {
        return this.length === 0;
    }


    toArray() {
        const count = this.length;

        let arrayFromStack = [];
        let currentNode = this.last;


        for (let i = count; i > 0; i--) {
            arrayFromStack.push(currentNode.value);
            currentNode = currentNode.next;
        }


        return arrayFromStack.reverse();
    }
}


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}




// class LinkedList {
//     constructor() {
//         this.first = null;
//         this.last = null;
//     }
// }



// module.exports = { Stack };
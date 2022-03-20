function createArray(obj) {
    let arrayFromStack = [];


    arrayFromStack.push(obj.value);


    if (obj.next !== null) {
        arrayFromStack.push(...createArray(obj.next))
    }


    return arrayFromStack;
}



class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor(maxStack = 10) {
        this.first = null;
        this.last = null;
        this.length = 0;
        this.maxStack = maxStack;
    }


    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] === 'function') {


            const stack = new Stack(iterable.length);
            const iterableReversed = iterable.reverse();


            iterableReversed.forEach((item) => stack.push(item));


            return stack;
        }


        throw new Error('Ошибка! not iterable');
    }


    push(elem) {
        let newNode = new Node(elem);


        if (this.length == this.maxStack) {
            throw new Error('Ошибка! Stack полный');
        }


        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let prevFirst = this.first;
            this.first = newNode;
            newNode.next = prevFirst;
        }


        this.length++;
    }


    pop() {
        let removeNode = this.first;


        if (this.length === 0) {
            throw new Error('Ошибка! Stack пуст');
        }


        if (this.first === this.last) {
            this.last = null;
        }


        this.first = this.first.next;
        this.length--;


        return removeNode.value;
    }


    peek() {
        if (this.length === 0) {
            return null;
        }


        return this.first.value;
    }


    isEmpty() {
        return this.length === 0;
    }


    toArray() {
        return createArray(this.first);
    }
}

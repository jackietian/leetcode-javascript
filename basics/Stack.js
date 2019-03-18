class Stack {
    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.push(item);
    }

    remove() {
        return this.data.pop();
    }

    length() {
        return this.data.length;
    }

    printAll() {
        return this.data;
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
console.log(stack.printAll());
stack.remove();
console.log(stack.printAll());
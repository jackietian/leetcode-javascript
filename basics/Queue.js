class Queue {
    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.push(item);
    }

    remove() {
        return this.data.shift();
    }

    length() {
        return this.data.length;
    }

    printAll() {
        return this.data;
    }
}

let queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
console.log(queue.printAll());
queue.remove();
console.log(queue.printAll());
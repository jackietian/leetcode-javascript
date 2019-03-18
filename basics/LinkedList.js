class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        this.length++;
        if(this.head === null) {
            this.head = node;
        } else {
            //if head is not null, then move tail to next;
            this.tail.next = node;
        }
        //always point tail to node
        this.tail = node;
    }

    find(value) {
        let current = this.head;
        while(current !== null) {
            if(value === current.value) return current;
            current = current.next;
        }
    }

    delete(value) {
        // find previous node and previous.next.next = current.next;
    }
    

    print() {
        console.log(this.head);
    }
}

const list = new LinkedList();
list.push(0);
list.push(1);
list.push(2);
list.print();
console.log(list.find(2));
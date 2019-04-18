class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i] < item) {
                this.items.splice(i, 0, item);
                return;
            }
        }

        this.items.push(item);
    }

    dequeue() {
        return this.items.pop();
    }

    peek() {
        console.log(this.items);
    }

    print() {
        console.log(this.items);
    }

    length() {
        return this.items.length;
    }
}

const findKthLargestNum = (nums,k) => {
    const queue = new PriorityQueue();
    nums.forEach(num => {
        if(queue.length() < k) {
            queue.enqueue(num);
            return;
        }

        queue.enqueue(num);
        queue.dequeue();
    });
    queue.peek();
    return queue.dequeue();
}

const nums = [6,3,7,4];
findKthLargestNum(nums,2);
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    printAll() {
        // loop through every node in the list
        let result = [];
        let listNode = this;
        while(listNode.next !== null) {
            result.push(listNode.value);
    
            if(listNode.next.next === null) {
                result.push(listNode.next.value);
            }
            listNode = listNode.next;
        }
        console.log(result.join());
    }

    isAvailable(val) {
        let node = this;
        while(node.next !== null) {
            if(node.value == val) {
                return true;;
            }
            node = node.next;
        }
        return false;
    }
}

const listNode0 = new ListNode(0);
const listNode1 = new ListNode(1);
const listNode2 = new ListNode(2);
const listNode3 = new ListNode(3);
const listNode4 = new ListNode(4);

listNode0.next = listNode1;
listNode1.next = listNode2;
listNode2.next = listNode3;
listNode3.next = listNode4;

listNode0.printAll();
console.log(listNode0.isAvailable(9));


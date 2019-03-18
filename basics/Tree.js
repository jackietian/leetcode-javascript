class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        // when root is null, then this.root = new node;
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }

        let current = this.root;
        while (true) {
            if (current.value > value) {
                //go left
                if (current.left === null) {
                    current.left = new Node(value);
                    break;
                }
                current = current.left;
            } else {
                //go right
                if (current.right === null) {
                    current.right = new Node(value);
                    break;
                }
                current = current.right;
            }
        }

    }

    preOrderTraversal() {
        const node = this.root;
        const array = [];
        return this._traversal(node, array, 'preorder');
    }

    inOrderTraversal() {
        const node = this.root;
        const array = [];
        return this._traversal(node, array, 'inorder');
    }

    postOrderTraversal() {
        const node = this.root;
        const array = [];
        return this._traversal(node, array, 'postorder');
    }

    _traversal(node, array, order) {
        if (node === null) return array;
        if (order === 'preorder') array.push(node.value);
        array = this._traversal(node.left, array, order);
        if (order === 'inorder') array.push(node.value);
        array = this._traversal(node.right, array, order);
        if (order === 'postorder') array.push(node.value);
        return array;
    }

    breathFirstTraversal() {
        const current = this.root;
        const array = [];
        const queue = [current];
        while (queue.length > 0) {
            const node = queue.shift();
            array.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return array;
    }



    print() {
        console.log(this.root);
    }
}

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const tree = new Tree();
tree.add(5);
tree.add(4);
tree.add(6);
tree.add(3);
tree.add(2);
tree.add(7);
tree.print();

console.log(tree.preOrderTraversal());
console.log(tree.inOrderTraversal());
console.log(tree.postOrderTraversal());

console.log(tree.breathFirstTraversal());
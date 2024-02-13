const list = {
    head:{
        value:1,
        next:{
            value:2,
            next:{
                value:4,
                next: null,
            }
        }
    }
};

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node();

        let current;

        if(this.head == null) {
            this.head = element;
        } else {
            current = this.head

            while(current.next) {
                current = current.next;
            }

            current.next = element;
        }

        this.size += 1;
    }

    insertAt() {
        if(index < 0 || index > this.size) {
            return console.log("please enter a valid index");
        } else {
            const node = new Node(element);
             let curr = this.head;

             if(index === 0) {
                node.next = this.head
                this.head = node;
             } else {
                curr = this.head
                let prev;

                for(let i = 0; i < index; i++) {
                    prev = curr
                    curr = curr.next;
                }

                prev.next = node;
                node.next = curr;
             }
             this.size += 1;
        }
    }

    printlist() {
        let curr = this.head
        console.log(curr);
        while(curr) {
            console.log(curr.element);
            curr = curr.next;
        }
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

let linkedList = new LinkedList()

linkedList.add(node1);
linkedList.add(node2);
linkedList.add(node3);

linkedList.printlist()

linkedList.insertAt(78,1)

linkedList.printlist()
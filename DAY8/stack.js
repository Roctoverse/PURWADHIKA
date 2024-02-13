class Stack {
    #maxSize
    #container = [];

    constructor(maxSize = 10) {
        this.#maxSize = maxSize;
    }

    push(element) {
        if(this.#container.length == this.#maxSize) {
            console.log("Stack Overflow")
        } else{
          this.#container.push(element);
        }
    }

    pop() {
        this.#container.pop();
    }

    getItem() {
        return this.#container;
    }
}

let stack1 = new Stack(5)

stack1.push(1);
stack1.push(2);
stack1.push(3);

console.log(stack1.getContainer())

stack1.pop();
stack1.pop();

console.log(stack1);
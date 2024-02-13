class Product {
    constructor() {
        this.productName;
        this.price;
    }

    get getProductName() {
        return this.productName;
    }

    set setProductName (productName) {
        
    }
}

class Book extends Product {
    constructor() {
        super();
        this.author;
    }
    getAuthor() {
        return this.author;
    }

    setAuthor(author) {
        this.author = author;
    }
}

class Eletronic extends Product {
    constructor() {
        this.watt;
    }
}

const lordofTheRing = new Book();

lordofTheRing.setAuthor = "J.J Tolkien";
console.log(lordofTheRing.getAuthor);
lordofTheRing.productName = "Lord of The Ring"
console.log(lordofTheRing);

console.log(lordofTheRing instanceof Book)
console.log(lordofTheRing instanceof Product)
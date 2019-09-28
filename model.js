function Product(id, title, price, url) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.url = url;
}

function ProductCart(id,title,price) {
    this.id = id;
    this.price = price;
    this.title = title;
    this.count = 1;
}

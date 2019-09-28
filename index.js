var products = [];
var cartProducts = [];
fillProducts();

var root = document.querySelector('.root');
var items = document.querySelectorAll('#nav ul li');

var currMenuItem = items[0];
for(var itemIndx in items ){
    items[itemIndx].onclick = function () {
        if(currMenuItem !== this) {
            currMenuItem.classList.remove('item-active');
            this.classList.toggle('item-active');
            currMenuItem = this;
            this.getAttribute('id');
            if(this.id === 'home'){
                showProducts();
            }else{
                showCart();
            }
        }
    }
}
showProducts();

function showCart() {
    root.innerHTML = '';
    var cartView = document.createElement('div');
    cartView.className = 'cart-view';
    var total = document.createElement('div');
    total.className = 'total';
    var totalPrice = document.createElement('span');
    totalPrice.className = 'total-price';
    for(var i in cartProducts){
        function f(i) {
            var row = cartRow(cartProducts[i]);
            cartView.appendChild(row);
            var input = row.querySelector('input');
            input.value = cartProducts[i].count;
            input.onchange = function (e) {
                cartProducts[i].count = e.target.value;
                totalPrice.innerHTML = '$' + calcTotal();
            };
            var removeBtn = row.querySelector('button');
            removeBtn.onclick = function () {
                for(var indx in cartProducts){
                    if(cartProducts[indx].id === cartProducts[i].id){
                        cartProducts.splice(indx,1);
                        break;
                    }
                }
                showCart();
            };
        }
        f(i);

    }


    totalPrice.innerHTML = '$' + calcTotal();
    total.appendChild(totalPrice);
    cartView.appendChild(total);
    root.appendChild(cartView);
}

function calcTotal() {
    var tPrice = 0;
    for(var i in cartProducts){
        tPrice += cartProducts[i].price * cartProducts[i].count;
    }
    return tPrice;
}

function showProducts() {
    root.innerHTML = '';
    var main = document.createElement('div');
    main.className = 'products-view';
    for(var i in products){
        function f(i) {
            var cardView = card(products[i]);
            var btn = document.createElement('button');
            btn.innerHTML = 'Add';
            btn.className = 'add-to-cart-btn';
            btn.onclick = function(){
                var curr = products[i];
                var exist = false;
                for (var indx = 0; indx < cartProducts.length; indx++ ){
                    if(cartProducts[indx].id === curr.id){
                        cartProducts[indx].count += 1;
                        exist = true;
                        break;
                    }
                }
                if(!exist) {
                    cartProducts.push(new ProductCart(curr.id, curr.title, curr.price));
                }
            };
            cardView.appendChild(btn);
            main.appendChild(cardView);
        }
        f(i);
    }
    root.appendChild(main);
}








function fillProducts() {
    products.push(new Product(123,'Nokia 6300',500,'./img/nokia-6300-1000x1000.jpg'));
    products.push(new Product(124,'Nokia 5210',600,'./img/nokia-5210-1000x1000.jpg'));
    products.push(new Product(125,'Nokia 6310i',350,'./img/nokia-6310i-1000x1000.jpg'));
    products.push(new Product(126,'Nokia e5',1000,'./img/nokia-e5-1000x1000.jpg'));
    products.push(new Product(127,'Siemens a50',750,'./img/siemens-a50-1000x1000.jpg'));
    products.push(new Product(128,'Ericsson t20s',250,'./img/ericsson-t20s-1000x1000.jpg'));
    products.push(new Product(129,'Ericsson t65',600,'./img/ericsson-t65-1000x1000.jpg'));
    products.push(new Product(130,'Motorola Razr v3i',650,'./img/motorola-razr-v3i-1000x1000.jpg'));
}

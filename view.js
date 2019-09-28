function card(product) {
    var div = document.createElement('div');
    div.className='card';
    var title = document.createElement('h3');
    title.innerHTML = product.title;
    var img = document.createElement('img');
    img.src = product.url;
    var span = document.createElement('span');
    span.className = 'price';
    span.innerHTML = product.price;
    var p = document.createElement('p');
    var text = document.createTextNode('Price: ');
    p.appendChild(text);
    p.appendChild(span);
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(p);
    return div;
}

function cartRow(cartProduct) {
    var row = document.createElement("div");
    row.className = 'row';
    var title = document.createElement('div');
    title.className = 'row-title';
    title.innerHTML = cartProduct.title + " - " + cartProduct.price;
    var controls = document.createElement('div');
    controls.className = 'row-controls';
    var input = document.createElement('input');
    input.type = 'number';
    input.name = 'quantity';
    input.min = 1;
    input.max = 10;
    input.value = 1;
    var clearfix = document.createElement('div');
    clearfix.className = 'clearfix';
    var removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'remove';
    row.appendChild(title);
    controls.appendChild(input);
    controls.appendChild(removeBtn);
    row.appendChild(controls);
    row.appendChild(clearfix);
    return row;
}



/*
 for (var i = 0; i < 10; i++) {
    function f(i) {
        setInterval(function () {
            console.log(i);
        }, 1000);
    }
    f(i);
}
*/

var item = document.createElement('ul');
var wrapper = document.createElement('div');
var body = document.querySelector('body');
wrapper.setAttribute('id','test');
wrapper.appendChild(item);
body.appendChild(wrapper);
function f() {
    console.log(item.parentElement.getAttribute('id'));
}
f();

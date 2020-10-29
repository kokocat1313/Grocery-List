
const form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // alert(form.elements.product.value);
    const newLi = document.createElement('li');
    let qty = form.elements.qty;
    let product = form.elements.product;

    newLi.innerText = `${qty.value} ${product.value}`;
    document.querySelector("#list").appendChild(newLi);
    qty.value = '';
    product.value = '';
})
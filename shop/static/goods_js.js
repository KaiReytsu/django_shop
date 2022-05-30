document.addEventListener('DOMContentLoaded', 
    console.log('Hi')
)

function savefunc(){
    const csrftoken = document.querySelector(
        '[name=csrfmiddlewaretoken]'
    ).value;
    var product = document.querySelector(
        '[name=product]'
    ).value;
    var price = document.querySelector(
        '[name=price]'
    ).value;
    var amount = document.querySelector(
        '[name=amountgoods]'
    ).value;
    var post_body = JSON.stringify({
        'product': product,
        'price': price,
        'amountgoods': amount
    });
    var request_headers = {
        'X-CSRFToken': csrftoken,
        'Accept': 'text/html',
        'Content-Type': 'application/json'
    };
    fetch(
        '/',
        {
            method: 'POST',
            body: post_body,
            headers: request_headers
        }
    ).then(response => console.log(response));
}
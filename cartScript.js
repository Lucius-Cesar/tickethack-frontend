function parseCartRow(departure, arrival, date, price, id){
    return `<div class="row" id = "${id}">
    ${departure} > ${arrival}   ${date}    ${price}€ <button id = "delete"> delete </button>
    </div>`
}

function deleteInCart(){
    document.querySelectorAll("#delete").forEach(deletebtn => 
        deletebtn.addEventListener("click", () => {
            fetch('http://localhost:3000/myCart/', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ myCartId: deletebtn.parentNode.id }),
            }).then(deletebtn.parentNode.remove())}))}


function displayCartContent(){
    fetch(`http://localhost:3000/myCart`)
    .then(response => response.json())
    .then(data => 
        data.Cart.forEach(element => 
        document.querySelector(".corps").innerHTML += parseCartRow(element.trip.departure, element.trip.arrival, element.trip.date, element.trip.price, element._id)
    ))
}

displayCartContent()
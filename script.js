function parseTripRow(departure, arrival, date, price){
    return `<div class="row" id = "${id}">
    ${departure} > ${arrival}   ${date}    ${price}€ <button id = "book"> book </button>
    </div>`
}

function bookTrip(){
    document.querySelectorAll("book").foreach(bookbtn =>
        bookbtn.addEventListener("click", () => {
            fetch('http://localhost:3000/myCart/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tripId: bookbtn.parentNode.id}),
            }).then(window.location.assign("cart.html"))
        })
    )
}


function searchTrip(){
    document.querySelector("#search").addEventListener("click", () => {
        const departure = document.querySelector("#departure").value
        const arrival = document.querySelector("#arrival").value
        const date = document.querySelector("#date").value
        fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`)
        .then(response => response.json())
        .then(data => {
                if(data.trip.length){
                    console.log(data.trip)
                    data.trip.forEach(trip => {
                        document.querySelector("#result").innerHTML += parseTripRow(trip.departure, trip.arrival, trip.date, trip.price)
                    }
                    )
                    bookTrip()
                }
                else{
                    "No trip found"
                }
            })
    })
}

searchTrip()
function searchTrip(){
    document.querySelector("#search").addEventListener("click", () => {
        const departure = document.querySelector("#departure").value
        console.log(departure)
        const arrival = document.querySelector("#arrival").value
        console.log(arrival)
        const date = document.querySelector("#date").value
        console.log(date)
        fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`)
        .then(response => response.json())
        .then(data => {
                if(data.trip){
                    console.log(data.trip)
                }
                else{
                    "No trip found"
                }
            })
    })
}

searchTrip()
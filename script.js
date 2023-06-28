function searchTrip(){
    document.querySelector("search-btn").addEventListener("click", () => {
        const departure = document.querySelector("#depart").value
        const arrival = document.querySelector("#arrival").value
        const date = document.querySelector("#date").value
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


departureSearchValue = document.querySelector("#depart").value
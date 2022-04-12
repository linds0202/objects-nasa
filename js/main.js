//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.getElementById('get-pic').addEventListener('click', getPic)

function getPic() {
    let date = document.querySelector('input').value

    console.log(date)
    let baseURL = 'https://api.nasa.gov/planetary/apod?api_key='
    let apiKey = 'Vir3S6rBMTe7L7SVPRZ0bflTGx9QzQyhkTi5L9JK'
    let appendDate = '&date=' + date

    fetch(baseURL + apiKey + appendDate)
    .then(res =>res.json ())
    .then(data => {
        console.log(data)
        console.log(data.date)
        document.getElementById('pic-of-day').src = data.hdurl
        document.getElementById('name').innerText = data.title
        document.getElementById('explanation').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}



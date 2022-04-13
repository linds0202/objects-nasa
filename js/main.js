//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.getElementById('get-pic').addEventListener('click', getPic)

function getPic() {
    let date = document.querySelector('input').value

    console.log(date)
    let baseURL = 'https://api.nasa.gov/planetary/apod?api_key='
    const api_key = config.NASA_API_KEY
    let appendDate = '&date=' + date

    fetch(`${baseURL}${api_key}${appendDate}`)
    .then(res =>res.json ())
    .then(data => {
        console.log(data)
        console.log(data.date)
        if (data.media_type === 'image') {
            document.getElementById('pic-of-day').src = data.hdurl
            document.getElementById('pic-of-day').classList.remove('hidden')
            document.getElementById('vid-of-day').classList.add('hidden')
          } else {
            document.getElementById('vid-of-day').src = data.url
            document.getElementById('vid-of-day').classList.remove('hidden')
            document.getElementById('pic-of-day').classList.add('hidden')
          }
        document.getElementById('name').innerText = data.title
        document.getElementById('explanation').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}



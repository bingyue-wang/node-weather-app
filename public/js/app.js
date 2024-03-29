console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')
const message3 = document.querySelector('#message-3')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    message1.textContent = 'Loading...'
    message2.textContent = ''
    message3.textContent = ''
    const location = search.value
    fetch(`/weather/?address=${location}`).then(response => {
        response.json().then(data => {
            if (data.error) {
                message1.textContent = data.error
                console.log(data.error)
            } else {
                message1.textContent = 'Forecast: ' + data.forecast
                message2.textContent = 'Location: ' + data.location
                message3.textContent = 'Address: ' + data.address
                console.log(data.forecast)
                console.log(data.location)
                console.log(data.address)
            }
        })
    })
})

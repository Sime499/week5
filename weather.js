const submiteButton = document.getElementById("submiteButton")
const inputValue = document.getElementById("inputValue")

const name = document.getElementById("name")
const description = document.getElementById("description")
const temp = document.getElementById("temp")

submiteButton.addEventListener("click", function() {
    console.log("inputValue", inputValue.value)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&APPID=9accd53358827e5e338bc0e32d549364`)
        .then(response => {
            return response.json()
        }).then(data => {
            console.log("data", data)
            const nameValue = data.name;
            const tempValue = data.main.temp
            const descriptionValue = data.weather[0].description;

            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            description.innerHTML = descriptionValue

        })



    .catch(err => {
        alert("wrong city name!")
    })
})
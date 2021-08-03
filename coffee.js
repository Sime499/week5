const coffeeOrderUL = document.getElementById("coffeeOrderUL")
const nameTextBox = document.getElementById("emailTextBox")
const searchButton = document.getElementById("searchButton")
const emailTextBox = document.getElementById("email")
const typeTextBox = document.getElementById("type")
const sizeTextBox = document.getElementById("size")
const priceTextBox = document.getElementById("price")
const addOrder = document.getElementById("addButton")
const getOrderBtn = document.getElementById("getCoffeeOrder")
const removeBtn = document.getElementById("removeButton")


getOrderBtn.addEventListener("click", function() {

    getcoffeeOrder()
})


searchButton.addEventListener('click', function() {

    const email = nameTextBox.value


    let request = new XMLHttpRequest()

    request.addEventListener("load", function() {
        const order = JSON.parse(this.responseText)


        const coffeeOrder = `<li>
        <label>${order.email}n/</label>
        <label>${order.type}</label>
        <label>${order.size}</label>
        <label>${order.price}</label>

            </li>`

        coffeeOrderemailUL.innerHTML = coffeeOrder

    })



    /*
    request.addEventListener('load', function() {
        console.log(this.responseText)
        const coffeeOrderUL = JSON.parse(this.responseText)
        const coffeeItem = `<li>${coffeeOrder.email}</li>`
        usersUL.insertAdjacentHTML('beforeend', coffeeItem)
        console.log(coffeeOrderUL)
    })*/


    request.open('GET', `https://troubled-peaceful-hell.glitch.me/orders/${email}`)
    request.send()
})



addButton.addEventListener("click", function() {

    const email = emailTextBox.value
    const type = typeTextBox.value
    const size = sizeTextBox.value
    const price = priceTextBox.value

    const body = {
        email: email,
        type: type,
        size: size,
        price: price
    }

    console.log(body)

    const newOrderRequest = new XMLHttpRequest()
    newOrderRequest.open("POST", 'https://troubled-peaceful-hell.glitch.me/orders')
    newOrderRequest.setRequestHeader('Content-Type', 'application/json')
    newOrderRequest.send(JSON.stringify(body))





})

function getcoffeeOrder(coffeeOrder) {

    let coffeeOrderRequest = new XMLHttpRequest()


    coffeeOrderRequest.addEventListener('load', function() {
        const result = JSON.parse(this.responseText)
        const users = result
        console.log(users)

        const coffeeOrderItems = users.map(function(coffeeOrder) {
            return `<li>
        <label>${coffeeOrder.email}</label>
        <label>${coffeeOrder.type}</label>
        <label>${coffeeOrder.size}</label>
        <label>${coffeeOrder.price}</label>

            </li>`
        })
        coffeeOrderUL.innerHTML = coffeeOrderItems.join("")

    })

    coffeeOrderRequest.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders')
    coffeeOrderRequest.send()
} {}


deleteBtn.addEventListener("click", function() {
    const remove = removeBtn.value

})
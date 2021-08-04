function getAllUsers(usersLoaded) {

    let usersRequest = new XMLHttpRequest()
    usersRequest.open('GET', 'https://reqres.in/api/users?page=1')
    usersRequest.send()

    usersRequest.addEventListener('load', function() {
        const result = JSON.parse(this.responseText)
        const users = result.data
            // we know we have the users 
            // call the callback function 
        usersLoaded(users)
    })
}

function displayUsers(users) {
    // code to display the users 
    const userItems = users.map(function(user) {
        return `<li>
        <label>${user.first_name}</label>
        <label>${user.last_name}</label>
        <img src = '${user.avatar}' />
    </li>`
    })

    usersUL.innerHTML = userItems.join("")
}

/*
getAllUsers(function(users) {
    displayOniPhone(users)
}) */

getAllUsers(function(users) {
    displayUsers(users)
})
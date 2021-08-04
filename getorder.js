const GET_ORDER__POSTS_URL = 'https://troubled-peaceful-hell.glitch.me/orders'


fetch(GET_ORDER_POSTS_URL)
    .then(function(response) {
        return response.json()
    }).then(function(result) {
        console.log(result)
    })
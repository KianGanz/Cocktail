// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita', true)

request.onload = function () {
  // Begin accessing JSON data here
}

// Send request
request.send()
// Begin accessing JSON data here
var data = JSON.parse(this.response)

data.forEach(drinks => {
  // Log each movie's title
  console.log(strIngredient)
})
async function Drink() {

  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Long Island Iced Tea');

  var myJson = await response.json();
  let print = document.getElementById('outprint');
  print.setAttribute("id", "outprint")
  for (var key in myJson['drinks'][0]) {
    if (key === "strDrinkThumb") {
      let h = document.createElement('p');
      let pic = "<img src=" + myJson['drinks'][0][key] + " style=height:10rem; class=drinkImage>"
      h.insertAdjacentHTML("beforeend", pic);
      print.appendChild(h)
      console.log(myJson['drinks'][0][key])
    }else if (myJson['drinks'][0][key] !== null) {
      let h2 = document.createElement('p');
      h2.setAttribute("class", "drink")
      let text = document.createTextNode(key + ": " + myJson['drinks'][0][key]);
      h2.appendChild(text);
      print.appendChild(h2)
    }
    else {
    }
  }
}
Drink();
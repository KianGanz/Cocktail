async function getInfo (inputText) {

  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + inputText);

    var myJson = await response.json();
    const h2 = document.createElement('p');
    console.log(myJson['drinks'][1]['strDrink'])
    const text = document.createTextNode(myJson['drinks'][1]['strDrink']);
    console.log(text)
    const print = document.getElementById('ausgabe');
    h2.appendChild(text);
    print.appendChild(h2);
  }
function knopf() {
  bila = document.getElementById("search").value;
  getInfo(bila);
}



function clearFilters() {

     document.getElementById("clearButton").value = "";
}



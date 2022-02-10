async function getInfo (inputText) {

  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + inputText);
    var i = 0;
    var myJson = await response.json();
    for (var key in myJson['drinks']) {
    const h2 = document.createElement('summary');
    const detail = document.createElement('details')
    const text = document.createTextNode(myJson['drinks'][key]['strDrink']);
    console.log(text)
    const print = document.getElementById('ausgabe');
    h2.appendChild(text);
    detail.appendChild(h2)
    for (var key in myJson['drinks'][i]){
    if (key === "strDrinkThumb") {
    let h = document.createElement('p');
    let texti = document.createTextNode(key +": ");
    let pic = "<img src=" + myJson['drinks'][i][key] + " style=height:5rem;>"
    h.appendChild(texti);
    h.insertAdjacentHTML("beforeend", pic);
    detail.appendChild(h)
    console.log(myJson['drinks'][i][key])
    } else if (myJson['drinks'][i][key] !== null){
    let h = document.createElement('p');
    let texti = document.createTextNode(key +": " +  myJson['drinks'][i][key]);
    h.appendChild(texti);
    detail.appendChild(h)
    } else {
      console.log("Leon der Hurensohn")
    }
    }
    print.appendChild(detail);
    i++;
    console.log(i);
    }
  }
function knopf() {
  bila = document.getElementById("search").value;
  console.log(bila)
  if (bila !== "") {
  document.getElementById("ausgabe").innerHTML = "";
  getInfo(bila);
  } else{}
}



function clearFilters() {

     document.getElementById("clearButton").value = "";
}

document.body.onkeydown = function(e) {
                if (e.keyCode == 13)
                knopf();
            };


async function randomDrink() {

  const response = await fetch('https://thecocktaildb.com/api/json/v1/1/random.php');

  const myJson = await response.json();

 /* const h2 = document.createElement('p');
  h2.setAttribute("class", "drink")
  //console.log(myJson['drinks'][0]['strDrink']);
  const text = document.createTextNode(myJson['drinks'][0]['strDrink']);*/

  let print = document.createElement('div');
  print.setAttribute("id", "outprint")
  for (var key in myJson['drinks'][0]) {
    if (myJson['drinks'][0][key] !== null) {
    let h2 = document.createElement('p');
    h2.setAttribute("class", "drink")
    let text = document.createTextNode(key +": " +  myJson['drinks'][0][key]);
    h2.appendChild(text);
    print.appendChild(h2)
    }
    else {
      console.log("Leon der Hurensohn")
    }
  }
  let printus = document.getElementById('outprintus');
  printus.appendChild(print);
  
  /*for (var key in myJson['drinks'][0]) {
    console.log(key)
    console.log(myJson['drinks'][0][key])

  }*/




/*
  const print = document.getElementById('outprint');
  h2.appendChild(text);
  print.appendChild(h2)
*/

}
randomDrink();

function buton() {
  let print = document.getElementById('outprint');
  print.remove();
  randomDrink();
}

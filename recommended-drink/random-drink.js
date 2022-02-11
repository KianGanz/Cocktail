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
    if (key === "strDrinkThumb") {
      let h = document.createElement('p');
      let texti = document.createTextNode(key + ": ");
      let pic = "<img src=" + myJson['drinks'][0][key] + " style=height:10rem; class=drinkImage>"
      h.appendChild(texti);
      h.insertAdjacentHTML("beforeend", pic);
      print.appendChild(h)
      console.log(myJson['drinks'][0][key])
    }else if (myJson['drinks'][0][key] !== null && myJson['drinks'][0][key] !== "") {
      let h2 = document.createElement('p');
      h2.setAttribute("class", "drink")
      let text = document.createTextNode(key + ": " + myJson['drinks'][0][key]);
      h2.appendChild(text);
      print.appendChild(h2)
    }
    else {
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

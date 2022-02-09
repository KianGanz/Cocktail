const randomDrink = async () => {

    const response = await fetch('https://thecocktaildb.com/api/json/v1/1/random.php');

    const myJson = await response.json();

    const h2 = document.createElement('p');
    console.log(myJson['drinks'])
    const text = document.createTextNode(myJson['drink']);
    console.log(text)
    const print = document.getElementById('ausgabe');
    h2.appendChild(text);
    print.appendChild(h2)

}
randomDrink();
const userAction = async () => {

    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');

    var myJson = await response.json();

    console.log(myJson.drinks)

}

function click(){
let b = createTextnode(myJson);
let a = createElement('p').appendchild(myJson);
}

userAction()


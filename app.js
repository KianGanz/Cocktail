const userAction = async () => {

    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');

    const myJson = await response.json();

    console.log(myJson.drinks)

}


userAction()
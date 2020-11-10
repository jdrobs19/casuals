alert('Hello World');

//An array to store the search content
var gamesArr = [];
//Function for pulling the top 10 games
var getTopTen = function () {
    fetch("https://api.rawg.io/api/games", {
        "method": "GET",
    })
        .then(response => {
            response.json().then(data => {
                displayTopTen(data.results);
            })
        })
        .catch(err => {
            console.log(err);
        });
}
//Function that displays the top 10
var displayTopTen = function (gameDataArr) {

    if (pastSearches) {
        for (var i = 0; i < pastSearches.length; i++) {
            getGameDetails(pastSearches[i].slug, true);
        }
    }
    for (var i = 9; i >= 0; i--) {
        getGameDetails(gameDataArr[i].slug, false);
    }
}
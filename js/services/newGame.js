app.factory('NewGameService', ($http) => {

    const gameId = '';
    $http.get('http://api.queencityiron.com/books').then((response) => {
        angular.copy(response.data.gameStats, gameStats);
    });

    return {
        add(game) {
            gameStats.push(game);
            $http.post('https://blooming-hamlet-70507.herokuapp.com/#stands/stand', {
                title: game.title,
            });
        },
    };
});
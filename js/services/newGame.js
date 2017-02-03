app.factory('NewGameService', ($http) => {
    return {
        send(game) {
            $http.post('https://blooming-hamlet-70507.herokuapp.com/stand', {
                stand_name: game,
            });
        },
    };
});
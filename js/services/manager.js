module.exports = {
    name: 'ManagerService',
    func($http, $interval, NewGameService) {
        const gameStats = [];
        let identifier = null;

    },
    currentId(id) {
        identifier = id;
        return identifier;
    },
    getStats() {
        $http.post(`https://blooming-hamlet-70507.herokuapp.com/stand/update?id=${identifier}`, {
            stand_name: name,
        }).then((response) => {
            gameStats.push(response.data);
            console.log('fml');
            console.log(gameStats);
            return gameStats;
        });
    },

};
module.exports = [
    app.component('newGame', {
        controller: 'NewGameController',
        templateUrl: 'templates/start.html',
    }),

    app.component('standManager', {
        controller: 'ManagerController',
        templateUrl: 'templates/manager.html',
    }),

    app.component('highscore', {
        templateUrl: 'templates/score.html',
        controller: 'ScoreController',
        // bindings: {
        //     person: '<',
        //     whenIClick: '&',
        // },
    }),
];
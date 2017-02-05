const app = angular.module('Lemon', ['ui.router']);

const controllers = [
    require('./controllers/newGame'),
    require('./controllers/manager'),
    require('./controllers/score'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

const services = [
    require('./services/newGame'),
    require('./services/manager'),
];

for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};

const routes = require('./routes');

app.config($stateProvider => {
    for (let i = 0; i < routes.length; i++) {
        $stateProvider.state(routes[i]);
        console.log('fuck me');
    }
});

app.component('gameStart', {
    controller: 'NewGameController',
    templateUrl: 'templates/start.html',
});

app.component('gameManager', {
    controller: 'ManagerController',
    templateUrl: 'templates/manager.html',
});

app.component('gameScore', {
    templateUrl: 'templates/score.html',
    controller: 'ScoreController',
    // bindings: {
    //     person: '<',
    //     whenIClick: '&',
    // },
});

// const components = require('./components');

// for (let i = 0; i < components.length; i++) {
//   app.component(compName.state(components[i]));
// };
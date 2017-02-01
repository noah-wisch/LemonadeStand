
const app = angular.module('LemonadeApp', []);

const controllers = [
    require('./controllers/stats'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

const services = [
    require('./services/ingredientservice'),
];

for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
}

// app.config(($stateProvider) => {
//     // $stateProvider is the object we add routes ('states') to.
//     $stateProvider.state({
//         name: '',
//         url: '',
//         component: 'stats',
//     });
// });

app.component('statSection', {
    controller: 'StatsController',
    templateUrl: 'templates/stats.html',
    bindings: {
        stat: '<',
    },
});



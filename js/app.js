
const app = angular.module('LemonApp', ['ui.router']);

const controllers = [
    require('./controllers/newGame'),
    // require('./controllers/manager'),
    // require('./controllers/score'),
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
    }
});

const components = require('./components');

app.component(compName => {
    for (let i = 0; i < components.length; i++) {
        compName.state(components[i]);
    }
});
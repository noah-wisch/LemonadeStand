
const app = angular.module('LemonApp', [/* 'ui.router' */]);

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
];

for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};
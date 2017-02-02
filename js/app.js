
const app = angular.module('LemonApp', [/* 'ui.router' */]);

const controllers = [
    require('./controllers/manager'),
    require('./controllers/newGame'),
    require('./controllers/score'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}
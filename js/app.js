
const app = angular.module('LemonadeApp', []);

const controllers = [
    require('./controllers/ingredientlist'),
    // require('./controllers/day'),
    // require('./controllers/customers'),
    // require('./controllers/visitors'),
    // require('./controllers/money'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

const services = [
    require('./controllers/ingredientlist'),
];

for (let i = 0; i < services.length; i++) {
    app.controller(services[i].name, services[i].func);
}



app.config(($stateProvider) => {
    // $stateProvider is the object we add routes ('states') to.
    $stateProvider.state({
        name: 'new-game',
        url: '/login',
        component: 'gameStart',
    });

    $stateProvider.state({
        name: 'stand-manager',
        url: '/manager',
        component: 'gameManager',
    });

    $stateProvider.state({
        name: 'highscore',
        url: '/highscore',
        component: 'gameScore',
    });
});

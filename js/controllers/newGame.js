
module.exports = {
    name: 'NewGameController',
    func($scope, NewGameService) {
        $scope.title = 'Yonce\'s Lemonade Stand';
        $scope.newGame = () => {
            console.log('testing')
        NewGameService.send($scope.title)
        }
    },
};

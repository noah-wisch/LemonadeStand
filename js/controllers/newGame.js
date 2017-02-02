
// app.controller('NewGameController', ($scope) => {
//     $scope.title = 'Yonce\'s Lemonade Stand';
//     $scope.newGame = () => {
//         console.log('is this thing on?')
//     };
// });

module.exports = {
    name: 'NewGameController',
    func($scope) {
        $scope.start = [
            { title: 'Yonce\'s Lemonade Stand' },
        ];
    },
    newGame() {
        console.log('is this thing on?')
    },

}
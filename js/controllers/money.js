
module.exports = {
    name: 'MoneyController',
   func($scope) {
        $scope.money = {
            name: 'Money',
            count: 20.00,
        };

        $scope.nexDay = (what) => {
            console.log(`How much did we make?`);
            if (what.count < 10000) {
                count++;
            }
        };
    },
};
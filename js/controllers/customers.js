
module.exports = {
    name: 'CustomerController',
      func($scope) {
        $scope.customer = {
            name: 'Customers',
            count: 1,
        };

        $scope.nexDay = (what) => {
            console.log(`How many people bought nade?`);
            if (what.count < 1000) {
                count++;
            }
        };
    },
};
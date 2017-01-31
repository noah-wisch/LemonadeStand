
module.exports = {
    name: 'VisitorController',
    func($scope) {
        $scope.visitor = {
            name: 'Visitors',
            count: 1,
        };

        $scope.nexDay = (what) => {
            console.log(`How many visitors came?`);
            if (what.count < 1000) {
                count++;
            }
        };
    },
};

module.exports = {
    name: 'DayController',
    func($scope) {
        $scope.day = {
            name: 'Day',
            count: 1,
        };

        $scope.nexDay = (what) => {
            console.log(`What day is it?`);
            if (what.count < 7) {
                count++;
            }
        };
    },
};
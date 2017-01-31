
module.exports = {
    name: 'IngredientListController',
    func($scope) {
        $scope.ingredients = [
            { name: 'Lemons', count: 1, price: 2 },
            { name: 'Sugar', count: 1, price: 1.25 },
            { name: 'Ice', count: 1, price: 0.50 },
            { name: 'Cups', count: 1, price: 0.10 },
        ];

        $scope.buy = (what) => {
            console.log(`Buying ${what.name}`);
            if (what.count > 0) {
                what.count--;
            }
        };
    },
}

module.exports = {
    name: 'IngredientListController',
    func($scope, IngredientService) {
        $scope.ingredients = IngredientService.allIngredients();
    },
}
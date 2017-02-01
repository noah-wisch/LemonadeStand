
module.exports = {
    name: 'IngredientService',
    func($scope) {
        const ingredients = [
            { name: 'Lemons', count: 1, price: 2 },
            { name: 'Sugar', count: 1, price: 1.25 },
            { name: 'Ice', count: 1, price: 0.50 },
            { name: 'Cups', count: 1, price: 0.10 },
        ];
        return {
            allIngredients() {
                return ingredients;
            }
        }
    },
}
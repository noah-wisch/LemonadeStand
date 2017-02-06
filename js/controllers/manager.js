
module.exports = {
    name: 'ManagerController',
    func($scope, NewGameService, ManagerService) {
        console.log('managerController');
        const identifier = NewGameService.getId();

        $interval(function () {
            ManagerService.currentId(identifier);
        }, 3000);
    },
    
};

module.exports = {
    name: 'ManagerController',
    func($scope, NewGameService, ManagerService) {
        console.log('managerController');
        const identifier = NewGameService.getId();
        ManagerService.currentId(identifier);
    },
};
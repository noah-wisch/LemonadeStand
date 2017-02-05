module.exports = {
    name: 'NewGameService',
    func($http) {
        const idArray = [];
        return {
            send(name) {
                $http.post('https://blooming-hamlet-70507.herokuapp.com/stand', {
                    stand_name: name,
                }).then((response) => {
                    idArray.push({
                        standId: response.data.stand_id,
                        standName: name,
                    });
                    console.log(idArray);
                });
            }
        }
    },
    getId() {
        return '81cfbeed-757a-4511-9dc8-5c36a04124af';
        console.log('stand identifier');
    },
};
module.exports = {
    name: 'NewGameService',
    func($http) {
        const idArray = [];
        return {
            send(name) {
                $http.post('https://blooming-hamlet-70507.herokuapp.com/stand', {
                    stand_name: name,
                }).then((response) => {
                    // console.log(response);
                    idArray.push({
                        standId: response.data.stand_id,
                        standName: name,
                    });
                    // console.log(idArray);
                });
            }
        }
    },
};
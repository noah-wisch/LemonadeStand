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
        return 'e734a348-640c-46ff-93b5-e5411f50a376';
        console.log('stand identifier');
    },
};
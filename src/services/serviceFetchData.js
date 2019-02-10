/*backend*/

import jsonData from '../database/json';

export default {

    fetchAllData(){
        return jsonData;
    },

    fetchFilter(cardTechnology){
        return jsonData.filter(obj =>
            obj.cardTechnology.includes(cardTechnology));
    },
}

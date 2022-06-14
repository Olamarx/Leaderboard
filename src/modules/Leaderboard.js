import FetchRequestClass from './FetchRequest.js';

export default class LeaderboardClass {
    static getScore = async ({url}) => {
        try {
            const fetchRequest = new FetchRequestClass({url})
            const data = await fetchRequest.makeRequest();
            return data.result
        } catch (error) {
            throw new Error(error);
          }
    }

    static postScore = async ({name, score}, url) => {
        try {
            const fetchRequest = new FetchRequestClass({
                method: 'POST',
                url,
                body: {
                    user: name,
                    score,
                }
            })
            const data = await fetchRequest.makeRequest()
            return data 
        }  catch (error) {
            throw new Error(error);
          }
    }
}
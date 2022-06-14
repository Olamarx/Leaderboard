import FetchRequestClass from './FetchRequest.js';

export default class LeaderboardClass {
    static getScore = async ({ url }) => {
      try {
        const fetchRequest = new FetchRequestClass({ url });
        const data = await fetchRequest.makeRequest();
        return data.result;
      } catch (error) {
        throw new Error(error);
      }
    }
}
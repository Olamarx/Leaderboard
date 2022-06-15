/* eslint-disable prefer-destructuring */
import Game from './game.js';
import ScoreAndName from './Score.js';
import LeaderboardClass from './Leaderboard.js';

const gameObject = new Game({ name: 'Olaoluwa Owoeye\'s Game' });

export default class Utility {
    static URLandAccessKey = () => {
      const ID = gameObject.id;
      const endPoint = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`;
      return endPoint;
    }

    static createNewScoreAPI = async ({ name, score }) => {
      try {
        const scoreandname = new ScoreAndName({ name, score });
        const URL = Utility.URLandAccessKey();
        const postScores = await LeaderboardClass.postScore(scoreandname, URL);
        return postScores;
      } catch (error) {
        throw new Error(error);
      }
    }
}
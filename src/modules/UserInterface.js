import Utility from './utility.js';
import LeaderboardClass from './Leaderboard.js';

export default class DisplayOnBoard {
    static displayScore = async () => {
      try {
        const sortedScore = await DisplayOnBoard.sortScore();
        sortedScore.forEach((score, index) => {
          DisplayOnBoard.htmlforDOM(score, index + 1);
        });
      } catch (error) {
        throw new Error(error);
      }
    }

    static htmlforDOM = ({ user, score }, index) => {
      const UL = document.querySelector('ul');
      const LI = document.createElement('li');
      LI.classList.add('score-li');
      LI.innerHTML = `<span> ${index} </span> <span> ${user} </span> <span> ${score} </span>`;
      UL.appendChild(LI);
    }

    static sortScore = async () => {
      try {
        const gameUrl = Utility.URLandAccessKey();
        const scores = await LeaderboardClass.getScore({ url: gameUrl });
        return await scores.sort((a, b) => b.score - a.score);
      } catch (error) {
        throw new Error(error);
      }
    }
}
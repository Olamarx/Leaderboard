import DisplayOnBoard from './UserInterface.js';
import Utility from './utility.js';

export default class EventListenerClass {
    static windowLoad = () => {
      window.addEventListener('load', async () => {
        try {
          const displayIndexScoreName = await DisplayOnBoard.displayScore();
          return displayIndexScoreName;
        } catch (error) {
          throw new Error(error);
        }
      });
    }

    static refreshBTNListener = () => {
      const submitForm = document.querySelector('form');
      submitForm.addEventListener('submit', async (e) => {
        try {
          e.preventDefault();
          const [name, score] = Array.from(submitForm.elements);
          const createNewScore = await Utility.createNewScoreAPI({
            name: name.value,
            score: score.value,
          });

          name.value = '';
          score.value = '';
          return createNewScore;
        } catch (error) {
          throw new Error(error);
        }
      });
    }
}
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

    static refreshBTNFunc = () => {
      const refresBtn = document.querySelector('.main-body__recent-refresh');
      refresBtn.addEventListener('click', async () => {
        try {
          const UL = document.querySelector('ul');
          UL.innerHTML = '';
          const displayScore = await DisplayOnBoard.displayScore();
          return displayScore;
        } catch (error) {
          throw new Error(error);
        }
      });
    }

    static submitTheForm = () => {
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
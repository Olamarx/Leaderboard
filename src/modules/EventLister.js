import DisplayOnBoard from './UserInterface.js'

export default class EventListenerClass {
    static windowLoad = () => {
        window.addEventListener('load', async () => {
            try {
                const displayIndexScoreName = await DisplayOnBoard.displayScore()
                return displayIndexScoreName
            } catch (error) {
                throw new Error(error);
              }
        })
       
        
    }
}
export default class GetData {
    static getData = async () => {
        const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WHYyghGGuwp0kRjzRRn5/scores', {
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({name: 'Owoeye Olaoluwa\'s Leaderboard'}),
        })
        try {
            const reply = response.json()
            console.log(reply)
        } catch (error) {
            throw new Error(error)
        }
    }
}
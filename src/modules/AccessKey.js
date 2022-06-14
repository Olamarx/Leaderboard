export default class GetData {
 static getData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: { 'content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Owoeye Olaoluwa\'s Leaderboard' }),
  })
    .then((response) => response.text())
    .then((res) => console.log(res.split(' ').filter((item) => item.length === 20)))
};
    }
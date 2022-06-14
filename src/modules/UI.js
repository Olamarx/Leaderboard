export default class UI {
  static interface() {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.classList.add('header__h1');
    h1.innerHTML = 'Leaderboard';
    body.insertAdjacentElement('afterbegin', header);

    header.appendChild(h1);

    const MainBody = document.createElement('main');

    const sectionScoreBody = document.createElement('section');
    const divRecentAndRefre = document.createElement('div');
    const recentScoreH2 = document.createElement('h2');
    const refreshBtn = document.createElement('button');

    recentScoreH2.innerHTML = 'Recent scores';
    refreshBtn.innerHTML = 'Refresh';

    MainBody.classList.add('main-body');
    divRecentAndRefre.classList.add('main-body__recent-refresh');
    recentScoreH2.classList.add('main-body__recent');
    refreshBtn.classList.add('main-body__refresh');

    header.insertAdjacentElement('afterend', MainBody);
    MainBody.append(sectionScoreBody);
    sectionScoreBody.append(divRecentAndRefre);
    divRecentAndRefre.append(recentScoreH2, refreshBtn);

    const scoreBoardDiv = document.createElement('div');
    scoreBoardDiv.classList.add('main-body__score-board');

    divRecentAndRefre.insertAdjacentElement('afterend', scoreBoardDiv);

    const sectionInput = document.createElement('section');
    MainBody.append(sectionInput);

    const inputForm = document.createElement('form');
    const addScoreH3 = document.createElement('h3');
    const inputName = document.createElement('input');
    const inputScore = document.createElement('input');
    const inputBtn = document.createElement('input');

    inputForm.classList.add('main-body__input');
    addScoreH3.classList.add('add-score-h3');
    inputName.classList.add('main-body__name');
    inputScore.classList.add('main-body__score');
    inputBtn.classList.add('main-body__button');

    inputName.type = 'text';
    inputScore.type = 'number';
    inputBtn.type = 'submit';
    inputName.placeholder = 'Your name';
    inputScore.placeholder = 'Your Score';
    // inputBtn.value = 'Submit'

    addScoreH3.innerHTML = 'Add your score';

    sectionInput.appendChild(inputForm);

    inputForm.append(addScoreH3, inputName, inputScore, inputBtn);

    const scoreBoard = document.querySelector('.main-body__score-board');
    const scoreUl = document.createElement('ul');
    scoreUl.classList.add('ul-body');
    scoreBoard.appendChild(scoreUl);
  }

  static dynamic() {
    const dataArr = [
      {
        name: 'Olaoluwa Owoeye',
        score: 150,
      },
      {
        name: 'Daniel Malo',
        score: 400,
      },
      {
        name: 'Adres Agudelo',
        score: 200,
      },
      {
        name: 'Ameer Hamzat',
        score: 300,
      },
      {
        name: 'Clinton Gueniva',
        score: 160,
      },
      {
        name: 'Kolix Simp',
        score: 90,
      },
      {
        name: 'Olamarx Juwon',
        score: 130,
      },
    ];

    dataArr.forEach((datum, index) => {
      const scoreLi = document.createElement('li');
      scoreLi.classList.add('score-li');
      index += 1;
      scoreLi.innerHTML = `<span> ${index} </span> <span> ${datum.name} </span> <span> ${datum.score} </span>`;
      const scoreUl = document.querySelector('.ul-body');
      scoreUl.appendChild(scoreLi);
    });
  }
}
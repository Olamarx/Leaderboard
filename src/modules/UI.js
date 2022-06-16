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
    sectionInput.classList.add('section-input');
    MainBody.append(sectionInput);

    const inputForm = document.createElement('form');
    const addScoreH3 = document.createElement('h3');
    const inputName = document.createElement('input');
    const inputScore = document.createElement('input');
    const inputBtn = document.createElement('input');
    const inputpack = document.createElement('div');
    const btnpack = document.createElement('div');

    inputForm.classList.add('main-body__input');
    addScoreH3.classList.add('add-score-h3');
    inputName.classList.add('main-body__name');
    inputScore.classList.add('main-body__score');
    inputBtn.classList.add('main-body__button');
    inputpack.classList.add('input-pack');
    btnpack.classList.add('btn-pack');

    inputName.type = 'text';
    inputScore.type = 'number';
    inputBtn.type = 'submit';
    inputName.placeholder = 'Your name';
    inputScore.placeholder = 'Your Score';

    addScoreH3.innerHTML = 'Add your score';

    sectionInput.appendChild(inputForm);

    inputpack.append(addScoreH3, inputName, inputScore);
    btnpack.append(inputBtn);
    inputForm.append(inputpack, btnpack);

    const scoreBoard = document.querySelector('.main-body__score-board');
    const scoreUl = document.createElement('ul');
    scoreUl.classList.add('ul-body');
    scoreBoard.appendChild(scoreUl);
  }
}
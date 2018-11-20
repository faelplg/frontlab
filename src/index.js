import './base.scss';

const converter = new showdown.Converter({tables: true});
const _url_ = 'https://api.github.com/repos/faelplg/web-development-researches/readme';
// const _url_ = 'https://api.github.com/repos/faelplg/web-development-researches/contents/deployment/README.md'

function fetchUrl(_url) {
  fetch(_url_, {
    headers: {
      Accept: 'application/vnd.github.v3.raw+json'
    }
  }).then(response => {
    return response.text();
  }).then(result => {
    const _content_ = converter.makeHtml(result);
    document.getElementById('web-development-researches').innerHTML = _content_;
  });
}

const titleFrontlab = document.getElementById('title-frontlab');
titleFrontlab.addEventListener("click", () => {
  console.log('titleFrontlab clicked');
  for (let _card_ of document.getElementsByClassName('card')) {
    _card_.className = 'card flex flex--row align__items--center justify__content--center'
    console.log(_card_);
  }
  const url_ = 'https://api.github.com/repos/faelplg/web-development-researches/readme';
  fetch(url_, {
    headers: {
      Accept: 'application/vnd.github.v3.raw+json'
    }
  }).then(response => {
    return response.text();
  }).then(result => {
    const _content_ = converter.makeHtml(result);
    document.getElementById('web-development-researches').innerHTML = _content_;
  });
});

const cardDeployment = document.getElementById('card-deployment');
cardDeployment.addEventListener("click", () => {
  console.log('cardDeployment clicked');
  for (let _card_ of document.getElementsByClassName('card')) {
    _card_.className = 'card inactive flex flex--row align__items--center justify__content--center'
    console.log(_card_);
  }
  cardDeployment.className = 'card active flex flex--row align__items--center justify__content--center';
  const url_ = 'https://api.github.com/repos/faelplg/web-development-researches/contents/deployment/README.md';
  fetch(url_, {
    headers: {
      Accept: 'application/vnd.github.v3.raw+json'
    }
  }).then(response => {
    return response.text();
  }).then(result => {
    const _content_ = converter.makeHtml(result);
    document.getElementById('web-development-researches').innerHTML = _content_;
  });
});

fetchUrl(_url_);

import moment from 'moment';

const converter = new showdown.Converter({tables: true});

export default class FetchService {
  refreshContent(_md) {
    const _content_ = converter.makeHtml(_md);
    document.getElementById('web-development-researches').innerHTML = _content_;
    let linksArray;
    linksArray = document.getElementsByTagName('a');
    for (let link of linksArray) {
      link.setAttribute('target', '_blank');
    }
  }

  fetchUrl(_url, _key) {
    fetch(_url, {
      headers: {
        Accept: 'application/vnd.github.v3.raw+json'
      }
    }).then(response => {
      return response.text();
    }).then(result => {
      localStorage.removeItem(`${_key}-stamp`);
      localStorage.removeItem(_key);
      localStorage.setItem(`${_key}-stamp`, moment().format());
      localStorage.setItem(_key, result);
      this.refreshContent(result);
    });
  }
};

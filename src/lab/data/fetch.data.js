const converter = new showdown.Converter({tables: true});

export default class FetchService {
  refreshContent(_md) {
    const _content_ = converter.makeHtml(_md);
    document.getElementById('web-development-researches').innerHTML = _content_;
  }

  fetchUrl(_url) {
    fetch(_url, {
      headers: {
        Accept: 'application/vnd.github.v3.raw+json'
      }
    }).then(response => {
      return response.text();
    }).then(result => {
      localStorage.setItem('frontlab-wtf', result);
      this.refreshContent(result);
    });
  }
};

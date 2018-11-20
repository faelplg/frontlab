import './base.scss';

const converter = new showdown.Converter({tables: true});
const _url_ = 'https://api.github.com/repos/faelplg/web-development-researches/readme'

fetch(_url_, {
  headers: {
    Accept: 'application/vnd.github.v3.raw+json'
  }
}).then(response => {
  return response.text();
}).then(result => {
  const _content_ = converter.makeHtml(result);
  console.log('_content_', _content_);
  document.getElementById('web-development-researches').innerHTML = _content_;
});

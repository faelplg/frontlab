import './base.scss';
import moment from 'moment';
import MarkdownIt from 'markdown-it';
import FetchService from './lab/data/fetch.data';

console.log('%c[frontlab].index - Web experiments.', 'color: #b8e5fa; background: #222; padding: 8px;');

/**
 * Content
 */
// const _mdfile_ = require('./web-development-researches/README.md');
import _mdfile_ from './web-development-researches/README.md';
console.log('_mdfile_', _mdfile_);
// const _wtf_ = 'https://api.github.com/repos/faelplg/web-development-researches/readme';
const _md_ = new MarkdownIt();
const _mdit_ = _md_.render(_mdfile_);
console.log('_mdit_', _mdit_);
// const _engineering_ = 'https://api.github.com/repos/faelplg/web-development-researches/contents/engineering/README.md'
// const _deployment_ = 'https://api.github.com/repos/faelplg/web-development-researches/contents/engineering/deployment/README.md'

/*
 *
 *  Fetch Service
 *  Call services
 *
*/
const fetchService = new FetchService();

/*
 *
 *  Content management
 *  Update information about content.
 *
 */
let now = moment();
/*
 *
 *  WTF button
 *
 */
const buttonWTF = document.getElementById('button-wtf');
buttonWTF.addEventListener("click", () => {
  fetchService.refreshContent(_mdit_);
});
// buttonWTF.addEventListener("click", () => {
//   let FrontlabWTF = localStorage.getItem('frontlab-wtf');
//   let wtfDuration;
//   let wtfHours;
//   if (FrontlabWTF) {
//     let FrontlabWTFStamp = moment(localStorage.getItem('frontlab-wtf-stamp'));
//     wtfDuration = moment.duration(now.diff(FrontlabWTFStamp));
//     wtfHours = wtfDuration.asHours();
//   }
//   if(!wtfDuration) {
//     console.log('NEW ACCESS. FETCHING CONTENT.');
//     fetchService.fetchUrl(_wtf_, 'frontlab-wtf');
//   } else {
//     if (wtfHours < 1) {
//       console.log('VALID CONTENT. REFRESHING');
//       fetchService.refreshContent(FrontlabWTF);
//     } else {
//       console.log('EXPIRED. FETCHING NEW CONTENT.');
//       fetchService.fetchUrl(_wtf_, 'frontlab-wtf');
//     }
//   }
// });

/**
 * 3 - Software Engineering content
 */
// const cardEngineering = document.getElementById('card-engineering');
// cardEngineering.addEventListener("click", () => {
//   let FrontlabEngineering = localStorage.getItem('frontlab-engineering');
//   let engineeringDuration;
//   let engineeringHours;
//   if (FrontlabEngineering) {
//     let FrontlabEngineeringStamp = moment(localStorage.getItem('frontlab-engineering-stamp'));
//     engineeringDuration = moment.duration(now.diff(FrontlabEngineeringStamp));
//     engineeringHours = engineeringDuration.asHours();
//   }
//   if(!engineeringDuration) {
//     console.log('NEW ACCESS. FETCHING CONTENT.');
//     fetchService.fetchUrl(_engineering_, 'frontlab-engineering');
//   } else {
//     if (engineeringHours < 1) {
//       console.log('VALID CONTENT. REFRESHING');
//       fetchService.refreshContent(FrontlabEngineering);
//     } else {
//       console.log('EXPIRED. FETCHING NEW CONTENT');
//       fetchService.fetchUrl(_engineering_, 'frontlab-engineering');
//     }
//   }
// });

/**
 * 3.1 - Software deployment content
 */
// const cardDeployment = document.getElementById('card-deployment');
// cardDeployment.addEventListener("click", () => {
//   let FrontlabDeployment = localStorage.getItem('frontlab-deployment');
//   let deploymentDuration;
//   let deploymentHours;
//   if (FrontlabDeployment) {
//     let FrontlabDeploymentStamp = moment(localStorage.getItem('frontlab-deployment-stamp'));
//     deploymentDuration = moment.duration(now.diff(FrontlabDeploymentStamp));
//     deploymentHours = deploymentDuration.asHours();
//   }
//   if(!deploymentDuration) {
//     console.log('NEW ACCESS. FETCHING CONTENT.');
//     fetchService.fetchUrl(_deployment_, 'frontlab-deployment');
//   } else {
//     if (deploymentHours < 1) {
//       console.log('VALID CONTENT. REFRESHING');
//       fetchService.refreshContent(FrontlabDeployment);
//     } else {
//       console.log('EXPIRED. FETCHING NEW CONTENT');
//       fetchService.fetchUrl(_deployment_, 'frontlab-deployment');
//     }
//   }
// });

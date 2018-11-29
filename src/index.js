import './base.scss';
import moment from 'moment';
import FetchService from './lab/data/fetch.data';

/*
 *
 *  Urls
 *  Available content URLs
 *
 */
const _wtf_ = 'https://api.github.com/repos/faelplg/web-development-researches/readme';
const _deployment_ = 'https://api.github.com/repos/faelplg/web-development-researches/contents/deployment/README.md'

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
  let FrontlabWTF = localStorage.getItem('frontlab-wtf');
  let wtfDuration;
  let wtfHours;
  if (FrontlabWTF) {
    let FrontlabWTFStamp = moment(localStorage.getItem('frontlab-wtf-stamp'));
    wtfDuration = moment.duration(now.diff(FrontlabWTFStamp));
    wtfHours = wtfDuration.asHours();
  }
  if(!wtfDuration) {
    console.log('NEW ACCESS. FETCHING CONTENT.');
    fetchService.fetchUrl(_wtf_, 'frontlab-wtf');
  } else {
    if (wtfHours < 1) {
      console.log('VALID CONTENT. REFRESHING');
      fetchService.refreshContent(FrontlabWTF);
    } else {
      console.log('EXPIRED. FETCHING NEW CONTENT.');
      fetchService.fetchUrl(_wtf_, 'frontlab-wtf');
    }
  }
});

/*
 *
 *  Deployment card
 *
 */
const cardDeployment = document.getElementById('card-deployment');
cardDeployment.addEventListener("click", () => {
  let FrontlabDeployment = localStorage.getItem('frontlab-deployment');
  let deploymentDuration;
  let deploymentHours;
  if (FrontlabDeployment) {
    let FrontlabDeploymentStamp = moment(localStorage.getItem('frontlab-deployment-stamp'));
    deploymentDuration = moment.duration(now.diff(FrontlabDeploymentStamp));
    deploymentHours = deploymentDuration.asHours();
  }
  if(!deploymentDuration) {
    console.log('NEW ACCESS. FETCHING CONTENT.');
    fetchService.fetchUrl(_deployment_, 'frontlab-deployment');
  } else {
    if (deploymentHours < 1) {
      console.log('VALID CONTENT. REFRESHING');
      fetchService.refreshContent(FrontlabDeployment);
    } else {
      console.log('EXPIRED. FETCHING NEW CONTENT');
      fetchService.fetchUrl(_deployment_, 'frontlab-deployment');
    }
  }
});

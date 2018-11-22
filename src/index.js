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
 *  Debug
 */
console.log('---DEBUG---');

/*
 *
 *  Storage management
 *  Update information about content.
 *
 */
/** Get content: WTF */
let FrontlabWTF = localStorage.getItem('frontlab-wtf');
if(FrontlabWTF) {
  console.log('REFRESHING STORAGE');
  fetchService.refreshContent(FrontlabWTF);
} else {
  console.log('FETCHING NEW CONTENT');
  fetchService.fetchUrl(_wtf_);
}

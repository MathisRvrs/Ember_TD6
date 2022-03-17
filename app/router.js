import EmberRouter from '@ember/routing/router';
import config from 'td6/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('autre');
  this.route('employee');
  this.route('board');
});

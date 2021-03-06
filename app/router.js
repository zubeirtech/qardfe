import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('u',function() {
    this.route('code');
    this.route('socials');
    this.route('info', {path: '/:user_id/socials'});
  });
  this.route('scan');
  this.route('socials');
  this.route('code');
  this.route('settings');
});

export default Router;

import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

Sentry.init({
  dsn: 'https://f695a44aa7124202af6d1b8741d0498d@sentry.io/1777289',
  integrations: [new Integrations.Ember()]
});

loadInitializers(App, config.modulePrefix);

export default App;

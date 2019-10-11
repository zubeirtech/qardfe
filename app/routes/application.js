import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
    session: service(),

    model() {
        if(this.session.isAuthenticated) {
            console.log(this.session);
            return this.store.findAll('user').then(user => user.firstObject);
        }
    }
});

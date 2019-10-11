import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Controller.extend({
    session: service(),
    toastr: service('toast'),

    actions: {
        authenticate() {
            if(this.password && this.username) {
                this.session.authenticate('authenticator:oauth2', this.username, this.password).then(() => window.location.href = "/socials").catch(reason => set(this, 'errorMessage', reason.error || reason))
            } else {
                this.toastr.error('Please fill out all fields', 'Error');
            }
        }
    }
});

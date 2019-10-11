import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Controller.extend({
    session: service(),
    toastr: service('toast'),

    actions: {
        authenticate() {
            if(this.password && this.username) {
                set(this, 'loader', true);
                this.session.authenticate('authenticator:oauth2', this.username, this.password).then(() => {
                    set(this, 'loader', false);
                    window.location.href = "/socials"
                }).catch(reason => set(this, 'errorMessage', reason.error || reason))
            } else {
                set(this, 'loader', false);
                this.toastr.error('Please fill out all fields', 'Error');
            }
        }
    }
});

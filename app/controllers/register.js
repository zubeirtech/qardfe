import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Controller.extend({
    toastr: service('toast'),
    session: service(),

    checklist(obj) {
        if (
            obj.username !== undefined &&
            obj.name !== undefined &&
            obj.password !== undefined
        ) {
            return true;
        }
        this.toastr.error("Please enter all fields", "Warning");
        return false;
    },

    actions: {
        async register() {
            if(this.checklist(this.model)) {
                try {
                    await this.model.save();
                    this.get('session').authenticate('authenticator:oauth2', this.model.username, this.model.password).then(() => {
                        window.location.href = "/socials"
                    })
                    .catch((reason) => {
                        this.set('errorMessage', reason.error || reason);
                        console.log(reason.error || reason)
                    });
                } catch (error) {
                    console.error(error);
                    this.toastr.error('Account exists already', 'Error');
                    set(this.model, 'password', '');
                }
            }
        }
    }
});

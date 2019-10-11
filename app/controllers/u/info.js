import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    toastr: service('toast'),

    actions: {

        copy() {
            const el = document.createElement('textarea');
            el.value = window.location.href;
            document.body.appendChild(el);
            el.select()
            document.execCommand('copy');
            document.body.removeChild(el);
            this.toastr.success('Copied url to clipboard', 'Success');
        }
    }
});

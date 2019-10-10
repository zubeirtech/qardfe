import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    toastr: service('toast'),

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
                } catch (error) {
                    console.error(error);
                    this.toastr.error('Account exists already', 'Error');                    
                }
            }
        }
    }
});

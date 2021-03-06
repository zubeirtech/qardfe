import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import QRCode from 'qrcode'
import { set } from '@ember/object';

export default Route.extend(AuthenticatedRouteMixin, {
    async afterModel(model) {
        set(model, 'qr', await QRCode.toDataURL(`https://qard-app.firebaseapp.com/u/${model.id}/socials`))
    }
});

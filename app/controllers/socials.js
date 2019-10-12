import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Controller.extend({
    toastr: service('toast'),

    init() {
        this._super(...arguments);
        this.socials=  [
            {
                name: 'LinkedIn',
                type: 'link',
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'
            },
            {
                name: 'Instagram',
                type: 'username',
                url: 'https://www.instagram.com/',
                root: 'https://www.instagram.com/',
                image: 'https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png',
            },
            {
                name: 'Twitter',
                type: 'username',
                url: 'https://twitter.com/',
                root: 'https://twitter.com/',
                image: 'http://pngimg.com/uploads/twitter/twitter_PNG3.png'
            },
            {
                name: 'facebook',
                type: 'link',
                image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'
            },
            {
                name: 'Email',
                type: 'username',
                url: 'mailto:',
                root: 'mailto:',
                image: 'https://www.freepnglogos.com/uploads/black-email-logo-png-0.png'
            },
            {
                name: 'YouTube',
                type: 'link',
                image: 'https://png.pngtree.com/element_our/sm/20180626/sm_5b321c9877382.png'
            },
            {
                name: 'Pinterest',
                type: 'username',
                url: 'https://pinterest.com/',
                root: 'https://pinterest.com/',
                image: 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c52e.png',
            },
            {
                name: 'GitHub',
                type: 'username',
                url: 'https://github.com/',
                root: 'https://github.com/',
                image: 'https://image.flaticon.com/icons/png/512/25/25231.png'
            },
            {
                name: 'Website',
                type: 'link',
                image: 'https://png.pngtree.com/svg/20170710/url_650537.png',
            }
        ]
    },

    actions: {
        async new(social) {
            try {
                if(this.ident) {
                    if(social.type === 'username') {
                        social.url= social.root + this.ident;
                    } else {
                        social.url = this.ident;
                    }
                    social.identification = this.ident
                    this.model.socials.pushObject(social);
                    this.model.save();
                    set(this, 'ident', '')
                    set(this, 'newSocial', false);
                } else {
                    this.toastr.error('Please fill out all fields', 'Error');
                }
            } catch (error) {
                console.error(error);
            }
        },

        async update(social) {
            try {
                if(social.type === 'username'){
                    social.url = social.root + social.identification
                } else {
                    social.url = social.identification
                }
                this.model.save();
            } catch (error) {
                console.error(error);
            }
        },

        async delete(social) {
            try {
                this.model.socials.removeObject(social);
                this.model.save();
            } catch (error) {
                console.error(error);
            }
        }
    }
});

import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    username: DS.attr(),
    socials: DS.attr(),
    code: DS.attr(),
    password: DS.attr(),
});

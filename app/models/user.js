import DS from 'ember-data';

export default DS.Model.extend({
    email: DS.attr('string'),
    name: DS.attr('string'),
    login: DS.attr('string'),
    api_token: DS.attr('string'),
    avatar: DS.attr('string'),
    url: DS.attr('string'),
    kind: DS.attr('string'),
});

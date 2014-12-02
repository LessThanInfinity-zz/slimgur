// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ./slimgur
//= require bootstrap

// for more details see: http://emberjs.com/guides/application/
Slimgur = Ember.Application.create({rootElement: '#ember-app'});

Slimgur.ApplicationSerializer = DS.ActiveModelSerializer.extend({});
//= require_tree .

/* Questionable. Should this be included anymore? */
Ember.Application.initializer({
  name: 'currentUser',
  initialize: function(container) {
    var attributes, controller, store, user;
    store = container.lookup('store:main');
    attributes = $('meta[name="current-user"]').attr('content');
    if (attributes) {
      user = store.push('user', store.serializerFor(Slimgur.User).normalize(Slimgur.User, JSON.parse(attributes)));
      controller = container.lookup('controller:currentUser').set('content', user);
      // return container.typeInjection('controller', 'currentUser', 'controller:currentUser');
    }
  }
});

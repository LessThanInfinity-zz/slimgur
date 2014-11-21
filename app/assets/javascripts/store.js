// DS.RESTAdapter.reopen({
//   namespace: 'api/v1'
// })

Slimgur.ApplicationStore = DS.Store.extend({

});

// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
Slimgur.ApplicationAdapter = DS.ActiveModelAdapter.extend({

});

// For more information see: http://emberjs.com/guides/routing/

Slimgur.Router.map(function() {
  // location: 'auto',
  // rootURL: '/',
  this.resource('posts', {path: '/'}, function(){
  	this.route('new');
  });

  this.resource('user', {path: 'users/:id'}, function(){
    this.route('show');
  });


  this.resource('post', { path: 'posts/:id' }, function(){
  	this.route('show');
    // this.route('show');
  });

});

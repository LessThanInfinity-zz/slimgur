// For more information see: http://emberjs.com/guides/routing/

Slimgur.Router.map(function() {
  // location: 'auto',
  // rootURL: '/',
  this.resource('posts', function(){
  	this.route('new');
  });
  this.resource('post', { path: 'posts/:id' }, function(){
  	this.route('edit');
  });

  // this.resource('posts', { path: '/' }, function() {
	 //  this.resource('post', { path: '/posts/:id' });  	
  // });

});

// App.Router.map(function() {
//   this.resource('leads', { path: '/' })
// })
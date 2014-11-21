// For more information see: http://emberjs.com/guides/routing/

Slimgur.Router.map(function() {
  // location: 'auto',
  // rootURL: '/',
  this.resource('posts', { path: '/' })
  this.resource('post', { path: '/posts/:id' });  	

  // this.resource('posts', { path: '/' }, function() {
	 //  this.resource('post', { path: '/posts/:id' });  	
  // });

});

// App.Router.map(function() {
//   this.resource('leads', { path: '/' })
// })
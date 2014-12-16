Ember.TEMPLATES["application"] = Ember.Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <div class='col-md-1 col-xs-3 logo'>\n          slimgur  \n        </div>\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("upload images");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user.show", "currentUser", options) : helperMissing.call(depth0, "link-to", "user.show", "currentUser", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sign_out", options) : helperMissing.call(depth0, "link-to", "sign_out", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program6(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "currentUser.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program8(depth0,data) {
  
  
  data.buffer.push("Sign Out");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sign_in", options) : helperMissing.call(depth0, "link-to", "sign_in", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            \n          ");
  return buffer;
  }
function program11(depth0,data) {
  
  
  data.buffer.push("Sign In");
  }

  data.buffer.push("<header>\n  <div class='container-fluid' id='topbar'>\n    <div class='row topbar-elements text-center'>\n\n      <div class='col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1'>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "posts", options) : helperMissing.call(depth0, "link-to", "posts", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class='col-md-5 col-sm-5 main-navigation'>\n          <div class='glyphicon glyphicon-align-justify nav-justify-menu'>\n          </div>\n\n          <div class='nav-upload'>\n            <div class='glyphicon glyphicon-cloud-upload nav-upload-icon'>\n            </div>\n\n            <div class='nav-upload-text hidden-sm hidden-xs'>\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "posts.new", options) : helperMissing.call(depth0, "link-to", "posts.new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n          </div>\n\n          <div class='glyphicon glyphicon-random nav-random-icon'>\n          </div>\n        </div>\n\n        <div class='col-md-2 col-sm-2 user-account'>\n          ");
  stack1 = helpers['if'].call(depth0, "currentUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      </d\n\n    </div>\n  </div>\n\n	\n</header>\n\n\n<section id=\"main\">\n  \n  	");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  \n</section>\n\n\n<footer>\n	<p> Testing Footer one two three </p>\n</footer>\n");
  return buffer;
  });

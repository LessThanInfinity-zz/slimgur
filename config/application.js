//... vendor requires
//= require ember-devise-simple-auth/globals
//... the rest of your requires

window.Slimgur = require('slimgur').default.create({
  deviseEmberAuth: {
    signInPath: "/sign-in", // the URL users will see in the browser for the sign in page
    userModelType: "user", // **ember-data only** name of the model that represents your user; same thing you'd pass to `store.find("...")` in a route
    deviseSignInPath: "/users/sign_in", // the URL to POST to for creating a session
    deviseSignOutPath: "/users/sign_out", // the URL to DELETE to for signing out
    currentSessionPath: "/sessions/current" // the URL for getting the current signed-in state; this is currently added by the gem
  }
});
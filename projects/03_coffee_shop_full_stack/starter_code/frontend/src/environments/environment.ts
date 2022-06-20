/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */


export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'm-t-dev.us', // the auth0 domain prefix
    audience: 'coffee-shop-api', // the audience set for the auth0 app
    clientId: 'TcPtBdrehPiWiRsfMW663FqpnzTqDh0o', // the client id generated for the auth0 app
    callbackURL: 'coffee-shop-api', // the base url of the running ionic application. 
  }
};

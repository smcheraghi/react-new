'use strict';

// JSX -> JavaScript XML
var template = React.createElement(
  'p',
  null,
  'This is a test, it is done'
); // JSX -> javascript XML --> provide by react
// var template = React.createElement("p", null, "This is a test");    // changing by babel --> babel is a compiler, has no functionality --> npm i -g babel-cli --> npm init --> npm add babel-preset-react babel-preset-env --> // babel src/app.js --out-file=public/scripts/app.js --presets=env,react --> --out-file=public/scripts/app.js --presets="env,react" --watch
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

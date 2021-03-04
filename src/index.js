import _ from 'lodash';
import $ from 'jquery';

require('file-loader?name=[name].[ext]!../index.html');

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

function test() {
    const foo = document.createElement('div');
    foo.innerHTML = "Foo";

    return foo
}

document.body.appendChild(component());
document.body.appendChild(test());

$(document).ready(function(){
    // executes on document ready.
});

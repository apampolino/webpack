// import _ from 'lodash';
// import $ from 'jquery';
import User from './user'

// window.User = User;

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

// document.body.appendChild(component());

let u = new User();

console.log(u);

u.setFirstName('Aaron');

u.setLastName('Pampolino');

console.log(u, u.getFullName());
import React from 'react';
import ReactDOM from 'react-dom';

import { creatStore } from 'redux'


function reducer() {
  return 'state'
}

cont store = createStore(reducer)

console.log(store.getStore())

const title = '';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();

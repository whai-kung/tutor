import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === 'CHANGE_STATE') {
    return action.payload.newState
  }
  return 'state'
}
const store = createStore(reducer)
console.log(store.getState())

const action = {
  type: 'CHANGE_STATE',
  payload: {
    newState: 'new state'
  }
}

store.dispatch(action)

console.log(store.getState())

const title = 'test';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();

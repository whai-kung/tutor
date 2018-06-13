import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

// npm react-hot-loader using plugin webpack.HotModuleReplacementPlugin()
module.hot.accept();

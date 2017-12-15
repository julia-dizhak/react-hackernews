import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import Site from './jsx/Site';


import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Site />, document.getElementById('root'));

registerServiceWorker();

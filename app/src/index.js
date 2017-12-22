import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';

import App from './static/jsx/Site';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

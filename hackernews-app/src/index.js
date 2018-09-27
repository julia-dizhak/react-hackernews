import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

// const element = React.createElement(
//    'div', {className: 'container'},'I love React'
// );
//ReactDOM.render(element, rootElement);

ReactDOM.render(<App />, rootElement);
registerServiceWorker();

//console.log(element);

if (module.hot) {
    module.hot.accept();
}
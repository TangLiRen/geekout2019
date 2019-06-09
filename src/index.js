import React from 'react';
import ReactDOM from 'react-dom';
import { PageRouter } from './PageRouter';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PageRouter />, document.getElementById('root'));
registerServiceWorker();

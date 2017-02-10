import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Console } from './console/index';
import { Contact } from './contact/index';
import { Help } from './help/index';

const App = () => <Console />

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Console}>
            <Route path="/contact" component={Contact} />
            <Route path="/help" component={Help} />
        </Route>
    </Router>
), document.getElementById('root'));

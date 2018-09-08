import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';

const target = document.getElementById('root');

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
        </div>
    </Router>,
    target
);
registerServiceWorker();
injectTapEventPlugin();
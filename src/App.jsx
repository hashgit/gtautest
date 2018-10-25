import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ContentBlock from './components/ContentBlock';
import './styles/main.css';

const App = () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Router>
            <Route path="/:title?" component={ContentBlock} />
        </Router>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

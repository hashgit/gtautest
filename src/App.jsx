import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContentBlock from './components/ContentBlock';
import './styles/main.css';

const App = () => (
    <Router>
        <Route exact path="/" component={ContentBlock} />
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import ContentBlock from './components/ContentBlock';
import './styles/main.css';

const App = () => (
    <div>
        {
            <ContentBlock />
        }
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

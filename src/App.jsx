import React from 'react';
import ReactDOM from 'react-dom';
import ContentBlock from './components/ContentBlock';

const App = () => (
    <div>
        {
            <ContentBlock />
        }
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

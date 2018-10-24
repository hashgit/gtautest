import React from 'react';
import TopBar from './UI/TopBar';
import BottomPanel from './UI/BottomPanel';

class ContentBlock extends React.Component { // eslint-disable-line
    render() {
        return (
            <div className="main">
                <TopBar />
                <div className="contentBox">
                    Content goes here
                </div>
                <BottomPanel />
            </div>
        );
    }
}

export default ContentBlock;

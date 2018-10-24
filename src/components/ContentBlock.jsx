import React from 'react';
import SVG from 'react-inlinesvg';
import InfoSvg from '../svg/info.svg';
import ActionSvg from '../svg/caret.svg';
import NavSvg from '../svg/slider-arrow.svg';

class ContentBlock extends React.Component { // eslint-disable-line
    render() {
        return (
            <div className="main">
                <div className="topBar">
                    <div className="topIconContainer">
                        <div className="topIcon">
                            <SVG src={InfoSvg} />
                        </div>
                    </div>
                    <div className="topHeadingContainer">
                        <div className="topHeading">Buying an Ipad mini</div>
                    </div>
                    <div className="topActionContainer">
                        <div className="topAction">
                            <SVG src={ActionSvg} />
                        </div>
                    </div>
                </div>
                <div className="contentBox">
                    Content goes here
                </div>
                <div className="bottomPanel">
                    <div className="prevAction">
                        <SVG src={NavSvg} />
                    </div>
                    <div className="nextAction">
                        <SVG src={NavSvg} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentBlock;

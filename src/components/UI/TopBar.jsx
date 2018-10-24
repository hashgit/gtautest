import React from 'react';
import SVG from 'react-inlinesvg';
import InfoSvg from '../../svg/info.svg';
import ActionSvg from '../../svg/caret.svg';

const TopBar = () => (
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
);

export default TopBar;

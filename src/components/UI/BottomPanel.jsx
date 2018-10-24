import React from 'react';
import SVG from 'react-inlinesvg';
import NavSvg from '../../svg/slider-arrow.svg';

const BottomPanel = () => (
    <div className="bottomPanel">
        <div className="prevAction">
            <SVG src={NavSvg} />
            <div className="prevText">
                Previous
            </div>
        </div>
        <div className="nextAction">
            <div className="nextText">
                How much storage do I need?
            </div>
            <SVG src={NavSvg} />
        </div>
    </div>
);

export default BottomPanel;

import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import InfoSvg from '../../svg/info.svg';
import ActionSvg from '../../svg/caret.svg';

const TopBar = ({ title, action, expanded }) => {
    const actionClasses = expanded ? 'topAction expandedIcon' : 'topAction';
    return (
        <div className="topBar">
            <div className="topIconContainer">
                <div className="topIcon">
                    <SVG src={InfoSvg} />
                </div>
            </div>
            <div className="topHeadingContainer">
                <div className="topHeading">{title}</div>
            </div>
            <div className="topActionContainer">
                <button type="button" className={actionClasses} onClick={action}>
                    <SVG src={ActionSvg} onClick={action} />
                </button>
            </div>
        </div>
    );
};

TopBar.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired,
};

export default TopBar;

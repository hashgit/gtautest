import React from 'react';
import SVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavSvg from '../../svg/slider-arrow.svg';

const BottomPanel = ({ pageIndex, totalPages, contents }) => {
    const prevEnabled = pageIndex > 0;
    const nextEnabled = pageIndex < totalPages - 1;

    return (
        <div className="bottomPanel">
            <div className={prevEnabled ? 'enabled prevAction' : 'prevAction'}>
                <button type="button">
                    <SVG src={NavSvg} />
                </button>
                <div className="prevText">
                    <div className={pageIndex > 0 ? 'enabled' : ''}>
                        {prevEnabled
                            ? (
                                <Link to={`/${encodeURIComponent(contents[pageIndex - 1].title)}`}>Previous</Link>
                            ) : null}
                    </div>
                </div>
            </div>
            <div className={nextEnabled ? 'enabled nextAction' : 'nextAction'}>
                <div className="nextText">
                    <div className={pageIndex < totalPages - 1 ? 'enabled' : ''}>
                        {nextEnabled
                            ? (
                                <Link to={`/${encodeURIComponent(contents[pageIndex + 1].title)}`}>
                                    {contents[pageIndex + 1].title}
                                </Link>
                            ) : null}
                    </div>
                </div>
                <button type="button">
                    <SVG src={NavSvg} />
                </button>
            </div>
        </div>
    );
};

BottomPanel.propTypes = {
    pageIndex: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    contents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BottomPanel;

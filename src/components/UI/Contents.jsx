import React from 'react';
import PropTypes from 'prop-types';

const Contents = ({ page }) => (
    <div className="contentBox">
        <div className="thumbContainer">
            { page.thumbnail
                ? <img className="thumbnail" src={`/images/${page.thumbnail}`} alt={page.title} />
                : null
            }
        </div>
        <div className="contentDescription" dangerouslySetInnerHTML={{ __html: page.description }} />
    </div>
);

Contents.propTypes = {
    page: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
    }).isRequired,
};

export default Contents;

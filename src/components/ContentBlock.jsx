import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import _ from 'lodash';
import TopBar from './UI/TopBar';
import BottomPanel from './UI/BottomPanel';
import Contents from './UI/Contents';

class ContentBlock extends React.Component { // eslint-disable-line
    state = {
        page: null,
    };

    constructor(props) {
        super(props);

        const { match: { params: { title } } } = this.props;
        this.state = {
            page: null,
            title,
            expanded: true,
        };
    }

    componentDidMount() {
        const { title } = this.state;
        this.getData(title);
    }

    componentWillReceiveProps(newProps) {
        const { match: { params: { title } } } = newProps;
        const { title: currentTitle } = this.state;

        if (title !== currentTitle) {
            this.getData(title);
        }
    }

    getData(title) {
        fetch('/data/content.json')
            .then(res => res.json())
            .then((json) => {
                let pageIndex = _.findIndex(json.content, c => c.title === decodeURIComponent(title));
                pageIndex = pageIndex > -1 ? pageIndex : 0;
                const page = json.content[pageIndex];
                this.setState({ page, pageIndex, data: json });
            });
    }

    clickExpand = () => {
        this.setState(state => ({ ...state, expanded: !state.expanded }));
    }

    render() {
        const {
            page, pageIndex, data, expanded,
        } = this.state;

        return page ? (
            <div>
                <Helmet>
                    <title>{page.title}</title>
                    <meta name="description" content={page.description} />
                </Helmet>
                <div className="main">
                    <TopBar title={data.title} action={this.clickExpand} expanded={expanded} />
                    { expanded
                        ? (
                            <div>
                                <Contents page={page} />
                                <BottomPanel
                                    pageIndex={pageIndex}
                                    totalPages={data.content.length}
                                    contents={data.content}
                                />
                            </div>
                        ) : null }
                </div>
            </div>
        ) : null;
    }
}

ContentBlock.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

ContentBlock.defaultProps = {
    match: {
        params: {},
    },
};

export default ContentBlock;

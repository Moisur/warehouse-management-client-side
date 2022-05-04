import React from 'react';
import Helmet from 'react-helmet';

const Title = (props) => {
    return (
        <Helmet>
            {/* Car inventory management */}
            <title>{`Car-${props.title.name}`}</title>
        </Helmet>
    );
};

export default Title;
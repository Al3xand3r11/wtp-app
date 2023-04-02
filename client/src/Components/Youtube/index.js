import React from "react";
import PropTypes from 'prop-types';

const YouTube = ({embedId}) => (
    <div>
        <iframe 
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Youtube"
            display="block"
            borderstyle="none"
            >

        </iframe>
    </div>
);

YouTube.propTypes= {
    embedId: PropTypes.string.isRequired
};
export default YouTube;


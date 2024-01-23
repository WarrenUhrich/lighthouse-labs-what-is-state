import React from 'react';

const ContentBlock = (props) => { // props is a param that happens to be an object by convention!
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </article>
    );
};

export default ContentBlock;

import React from 'react';

function Screen({ hasError, content }) {
    return (
        <div className={`screen ${hasError ? `error` : ``} `}>
            <h1 dangerouslySetInnerHTML={
                { __html: content }
            }></h1>
        </div>
    );

}

export default Screen;
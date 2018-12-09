import React from 'react';

export const Label = (props) => {
    const {content, className = 'label', style = {}} = props;

    if(typeof content === 'undefined'){
        return null;
    }

    return (
        <div className={className}
             style={style}>
            {content}
        </div>
    );
}
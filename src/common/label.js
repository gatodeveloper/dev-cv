import React from 'react';

export const Label = (props) => {
    const {content, className = 'label', style} = props;
    return (
        <div className={className}
             style={style}>
            {content}
        </div>
    );
}
import React from 'react';

export class ParagraphItem extends React.Component {

    static defaultProps = {
        className: 'paragraph'
    };

    static getKey = (item, index) =>{
        return index;
    };

    render() {
        const {value, index, className, style} = this.props;

        return (
            <p key={index} className={className} style={style}>
                {value.toString()}
            </p>
        );
    }
}
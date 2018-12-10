import React from 'react';

export class Paragraphs extends React.Component {

    static defaultProps = {
        className: 'paragraphs'
    };

    render() {
        const {value, className, style} = this.props;

        if(typeof value === 'undefined' || value === null){
            return null;
        }

        return (
            <div className={className}
                 style={style}>
                {value.map(this.renderParagraph)}
            </div>
        );
    }

    renderParagraph = (item, index) => {

        return (
            <p key={index}>
                {item.toString()}
            </p>
        );
    };
}
import React from 'react';
import {List} from 'Common/list/list';
import {ParagraphItem} from "./paragraph-item";

export class Paragraphs extends React.Component {

    static defaultProps = {
        className: 'paragraphs'
    };

    render() {
        const {value, className, style} = this.props;

       return (
           <List className={className}
                 items={value}
                 ItemComponent={ParagraphItem}
                 style={style}
           />
       );
    }
}
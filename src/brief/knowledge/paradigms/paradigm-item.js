import React from 'react';
import './paradigm-item.scss';
import {Label} from "Common";

export class ParadigmItem extends React.Component {

    static defaultProps = {
        className: 'paradigm-item',
    };

    static getKey = (item) => {
        return item;
    };

    render() {
        const {value, className, style} = this.props;

        return (
            <Label className={className} style={style}
                   content={value}/>
        );
    }
}
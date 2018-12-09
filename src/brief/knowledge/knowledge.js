import React from 'react'
import {Technologies} from "./technologies";
import {Paradigms} from "./paradigms";
import './knowledge.scss';

export class Knowledge extends React.Component {

    static defaultProps = {
        className: 'knowledge',
        labelClassName: 'knowledge-label'
    };

    render() {

        const {
            value: {
                technologies,
                paradigms,
            },
            className,
            labelClassName
        } = this.props;

        const style = this.props.style? this.props.style  : {};

        return (
            <div className={className} style={style.self}>

                <Technologies value={technologies}
                              labelClassName={labelClassName}
                              style={style.technologies}
                />

                <Paradigms value={paradigms}
                           labelClassName={labelClassName}
                           style={style.paradigms}
                />
                
            </div>
        );
    }
}
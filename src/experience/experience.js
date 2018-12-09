import React from 'react';
import './experience.scss';

import {ExperienceItem} from "./experience-item";
import {LabeledList} from "Common";

export class Experience extends React.Component {

    static defaultProps = {
        className: 'experience'
    };

    render() {

        let {
            items,
            label,
            className,
            mainLabelClassName,
            style,
            ...itemProps
        } = this.props;

        style = style ? style : {};

        return (
            <section className={className} style={style.self}>
                <LabeledList items={items}
                             label={label}
                             itemProps={itemProps}
                             ItemComponent={ExperienceItem}
                             labelClassName={mainLabelClassName}
                             style={style.container}
                />
            </section>
        );
    }
}
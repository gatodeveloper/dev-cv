import React from 'react';
import {EducationItem} from "./education-item";
import './education.scss';
import {LabeledList} from "Common";

export class Education extends React.Component {

    static defaultProps = {
        className: 'education',
        itemContainerClassName: 'item-container'
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

        style = style? style: {};

        return (
            <section className={className} style={style.self}>
                <LabeledList label={label}
                             items={items}
                             itemProps={itemProps}
                             ItemComponent={EducationItem}
                             labelClassName={mainLabelClassName}
                             style={style.container}
                />
            </section>
        );
    }
}
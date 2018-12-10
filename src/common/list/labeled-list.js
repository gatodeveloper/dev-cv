import React from 'react';
import {List} from "./list";
import {Label} from 'Common/label';

export class LabeledList extends React.Component {

    static defaultProps = {
        className: 'labeled-list',
        labelClassName: 'label',
        listClassName: 'item-container'
    };

    render() {

        let {
            label,
            className,
            labelClassName,
            listClassName,
            style,
            ...listProps
        } = this.props;

        style = style? style  : {};

        return (
            <div className={className} style={style.self}>
                {

                    <Label content={label}
                           className={labelClassName}
                           style={style.label}
                    />
                }
                <List {...listProps}
                      className={listClassName}
                      style={style.list}
                />
            </div>
        );
    }
}
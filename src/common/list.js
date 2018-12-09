import React from 'react';

export class List extends React.Component {

    static defaultProps = {
        className: 'item-container',
        style:{}
    };

    render() {

        const {
            items,
            className
        } = this.props;

        const style = this.props.style? this.props.style  : {};

        return (
            <ul className={className}
                style={style.self}>
                {items.map(this.renderItem)}
            </ul>
        );
    }

    renderItem = (item, index) => {

        let {ItemComponent, itemProps, style} = this.props;

        style = style? style  : {};

        return (
            <ItemComponent {...itemProps}
                           key={ItemComponent.getKey(item, index)}
                           value={item}
                           index={index}
                           style={style.item}
            />
        );
    };
}
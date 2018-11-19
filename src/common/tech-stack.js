import React from 'react';
import './tech-stack.scss';
import Label from './label';

//TODO use labeled list instead of re-implementing
export default class TechStack extends React.Component {

    static defaultProps = {
        className: "tech-stack",
        labelClassName:'label',
        itemContainerClassName:'items',
        itemClassName: "item",
        labelText: 'Tech Stack'
    };

    render() {
        const {
            className,
            itemContainerClassName,
            labelClassName,
            labelText,
            value
        } = this.props;

        return (
            <div className={className}>
                <Label className={labelClassName} content={labelText}/>
                <ul className={itemContainerClassName}>
                    {value.map(this.renderItem)}
                </ul>
            </div>
        );
    }

    renderItem = (item) => {
        const {itemClassName} = this.props;
        return (
            <li key={item} className={itemClassName}>{item}</li>
        );
    }
}
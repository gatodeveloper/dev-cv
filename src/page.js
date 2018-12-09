import React from 'react';
import parts from './page-parts';

import './page.scss';

export default class Page extends React.Component {

    static defaultProps = {
        className: 'page',
        containerClassName:'page-container',
        style:{}
    };

    render() {
        const {value = [], className, containerClassName, style} = this.props;
        return (
            <div className={className} style={style.self}>
                <div className={containerClassName} style={style.container}>
                    {value.map(this.renderItem)}
                </div>
            </div>
        );
    }

    renderItem = (value, index) => {
        const [key, props] = value;
        const Component = parts[key];

        return (
            <Component {...props} key={index.toString() + key}/>
        );
    }
}
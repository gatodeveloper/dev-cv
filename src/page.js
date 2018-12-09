import React from 'react';
import parts from './page-parts';

import './page.scss';

export default class Page extends React.Component {

    static defaultProps = {
        className: 'page',
        containerClassName:'page-container'
    };

    render() {
        const {value = [], className, containerClassName} = this.props;
        return (
            <div className={className}>
                <div className={containerClassName}>
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
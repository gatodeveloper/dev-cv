import React from 'react';
import parts from './page-parts';

import './page.scss';

export default class Page extends React.Component {

    static defaultProps = {
        className: 'page'
    };

    render() {
        const {value = [], className, style} = this.props;
        return (
            <div className={className} style={style}>
                {value.map(this.renderItem)}
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
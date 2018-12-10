import React from 'react'
import {PersonalLinkItem} from "./personal-link-item";
import './personal-links.scss';

import {List} from 'Common';

export class PersonalLinks extends React.Component {

    static defaultProps = {
        className: 'brief-links'
    };

    render() {
        const {value, className, style} = this.props;

        return (
          <List className={className}
                items={value}
                ItemComponent={PersonalLinkItem}
                style={style}
          />
        );
    }
}
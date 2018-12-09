import React from 'react';

import {Person} from "./person";
import {Links} from "./links";
import {Knowledge} from "./knowledge";

import './brief.scss';

export class Brief extends React.Component {
    static defaultProps = {
        className: 'brief'
    };

    render() {
        const {
            person,
            links,
            knowledge,
            className
        } = this.props;

        const style = this.props.style? this.props.style  : {};

        return (
            <aside className={className} style={style.self}>
                <Person value={person} style={style.person}/>
                <Links value={links} style={style.links}/>
                <Knowledge value={knowledge} style={style.knowledge}/>
            </aside>
        );
    }
}
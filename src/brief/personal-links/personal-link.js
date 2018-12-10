import React from "react";
import './personal-link.scss';
import {ImageLink} from 'Common';

export class PersonalLink extends React.Component {

    static defaultProps = {
        className: 'brief-link',
        imageClassName: 'image'
    };

    static getKey = ({url}) => {
        return url;
    };

    render() {

        const {
            value: {
                url,
                imageSource,
                imageAlt
            },
            className,
            imageClassName,

        } = this.props;

        const style = this.props.style ? this.props.style : {link:{}};

        return (
            <ImageLink href={url}
                       src={imageSource}
                       alt={imageAlt}
                       className={className}
                       componentClassName={imageClassName}
                       componentStyle={style.image}
                       style={style.self}
            />
        );
    }
}
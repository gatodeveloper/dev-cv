import React from "react";
import './link.scss';

export class Link extends React.Component {

    static defaultProps = {
        className: 'brief-link',
        linkClassName: 'url',
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
            linkClassName,
            imageClassName,

        } = this.props;

        const style = this.props.style ? this.props.style : {link:{}};

        return (
            <div className={className} style={style.self}>
                <a href={url} className={linkClassName} style={style.link.url}>
                    <img src={imageSource} alt={imageAlt} className={imageClassName} style={style.link.image}/>
                </a>
            </div>
        );
    }
}
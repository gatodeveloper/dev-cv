import React from 'react';


export const Link = Component => {

    return class Link extends React.Component {
        render(){

            const {
                className,
                style,
                href,
                componentClassName,
                componentStyle,
                ...componentProps
            } = this.props;
            
            return (
                <a className={className} style={style} href={href}>
                    <Component className={componentClassName} style={componentStyle} {...componentProps}/>
                </a>
            );
        }
    }
};
import React from 'react';
import './person.scss';
import {TextLink, Image, Label} from 'Common'
export class Person extends React.Component {

    static defaultProps = {
        className: 'person',
        headshotClassName: 'headshot',
        nameClassName: 'name',
        titleClassName: 'title',
        mobileClassName: 'mobile',
        skypeClassName: 'skype',
        emailClassName: 'email',
        emailLinkClassName: 'email-link',
        residenceClassName: 'residence'
    };

    render() {

        const {

            value: {
                name,
                title,
                residence,
                mobile,
                email,
                skype,
                headshot:{
                    source:headshotSource,
                    alt:headshotAlt
                },
                preMobile = 'Mobile: ',
                preSkype = 'Skype: '
            },
            className,
            headshotClassName,
            nameClassName,
            titleClassName,
            mobileClassName,
            skypeClassName,
            emailClassName,
            emailLinkClassName,
            residenceClassName
        } = this.props;

        const style = this.props.style ? this.props.style : {email:{}};

        return (
            <div className={className} style={style.self}>
                <Image className={headshotClassName} src={headshotSource} alt={headshotAlt} style={style.headshot}/>
                <Label className={nameClassName} style={style.name} content={name}/>
                <Label className={titleClassName} style={style.title} content={title}/>
                <address className={residenceClassName} style={style.residence}>{residence}</address>
                <Label className={mobileClassName} style={style.mobile} content={`${preMobile}${mobile}`}/>
                <Label className={skypeClassName} style={style.skype} content={`${preSkype}${skype}`}/>
                <TextLink href={`mailto:${email}`}
                          content={email}
                          className={emailClassName}
                          style={style.email.link}
                          componentStyle={style.email.label}

                />
            </div>
        );
    }
}
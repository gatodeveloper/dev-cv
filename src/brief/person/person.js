import React from 'react';
import './person.scss';

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
                <img className={headshotClassName} src={headshotSource} alt={headshotAlt} style={style.headshot}/>
                <div className={nameClassName} style={style.name}>{name}</div>
                <div className={titleClassName} style={style.title}>{title}</div>
                <address className={residenceClassName} style={style.residence}>{residence}</address>
                <div className={mobileClassName} style={style.mobile}>{`${preMobile}${mobile}`}</div>
                <div className={skypeClassName} style={style.skype}>{`${preSkype}${skype}`}</div>
                <div className={emailClassName} style={style.email.self}>
                    <a className={emailLinkClassName} style={style.email.link} href={`mailto:${email}`}>{email}</a>
                </div>
            </div>
        );
    }
}
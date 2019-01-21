import React from 'react';
import './person.scss';

export class Person extends React.Component {

    static defaultProps = {
        className: 'person',
        headshotClassName: 'headshot',
        nameClassName: 'name',
        titleClassName: 'title',
        infoClassName: 'info',
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
                info,
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
            infoClassName,
            mobileClassName,
            skypeClassName,
            emailClassName,
            emailLinkClassName,
            residenceClassName,
            titleClassName,
        } = this.props;

        return (
            <div className={className}>
                <img className={headshotClassName} src={headshotSource} alt={headshotAlt}/>
                <div className={nameClassName}>{name}</div>
                <div className={titleClassName}>{title}</div>
                <div className={infoClassName}>{info}</div>
                <address className={residenceClassName}>{residence}</address>
                <div className={mobileClassName}>{`${preMobile}${mobile}`}</div>
                <div className={skypeClassName}>{`${preSkype}${skype}`}</div>
                <div className={emailClassName}>
                    <a className={emailLinkClassName} href={`mailto:${email}`}>{email}</a>
                </div>
            </div>
        );
    }
}
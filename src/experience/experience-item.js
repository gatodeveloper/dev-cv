import React from "react";
import './experience-item.scss';
import {Paragraphs, TechStack, Projects} from "Common";

export class ExperienceItem extends React.Component {

    static defaultProps = {
        className: 'experience-item',
        titleClassName: 'title',
        durationClassName: 'duration',
        companyClassName: 'company',
        descriptionClassName:'description'
    };

    static getKey = ({title, company, startDate}) => {
        return `${title}${company}${startDate}`;
    };

    render() {

        const {
            value: {
                title,
                startDate,
                endDate,
                company,
                description,
                techStack,
                projects
            },
            ongoingText = 'Present',
            dateDelimiter = ' - ',
            className,
            titleClassName,
            durationClassName,
            companyClassName,
            descriptionClassName
        } = this.props;


        const duration = `${startDate} ${dateDelimiter} ${typeof endDate !== 'undefined' ? endDate : ongoingText}`;
        const style = this.props.style ? this.props.style : {};

        return (
            <div className={className} style={style.self}>
                <div className={titleClassName} style={style.title}>{title}</div>
                <div className={durationClassName} style={style.duration}>{duration}</div>
                <div className={companyClassName} style={style.company}>{company}</div>
                <Paragraphs value={description} style={style.description} className={descriptionClassName}/>
                <TechStack value={techStack} style={style.techStack}/>
                <Projects value={projects} style={style.projects}/>
            </div>
        );
    }
}
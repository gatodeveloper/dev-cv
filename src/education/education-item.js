import React from "react";
import './education-item.scss';
import {TechStack, Projects} from "Common";

export class EducationItem extends React.Component {

    static defaultProps = {
        className: 'education-item',
        degreeClassName: 'degree',
        institutionClassName: 'institution',
        gpaClassName: 'gpa',
        classOfClassName: 'class-of'
    };

    static getKey = ({degree, institution}) => {
        return degree + institution;
    };

    render() {

        const {
            value: {
                degree,
                institution,
                gpa,
                preInstitution = '(',
                postInstitution = ')',
                preGPA = 'GPA: ',
                postGpa = ';',
                preClassOf = 'Class of ',
                postClassOf = '.',
                classOf,
                techStack=[],
                projects=[]
            },
            className,
            degreeClassName,
            institutionClassName,
            gpaClassName,
            classOfClassName
        } = this.props;

        const style = this.props.style ? this.props.style : {};

        return (
            <div className={className} style={style.self}>
                <div className={degreeClassName} style={style.degree}>{degree}</div>
                <div className={institutionClassName} style={style.institution}>{`${preInstitution}${institution}${postInstitution}`}</div>
                <div className={gpaClassName} style={style.gpa}>{`${preGPA}${gpa}${postGpa}`}</div>
                <div className={classOfClassName} style={style.classOf}>{`${preClassOf}${classOf}${postClassOf}`}</div>
                <TechStack value={techStack} style={style.techStack}/>
                <Projects value={projects} style={style.projects}/>
            </div>

        );
    }
}
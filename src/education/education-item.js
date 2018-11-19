import React from "react";
import './education-item.scss';
import {TechStack} from "Common";

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
                techStack=[]
            },
            className,
            degreeClassName,
            institutionClassName,
            gpaClassName,
            classOfClassName
        } = this.props;

        return (
            <div className={className}>
                <div className={degreeClassName}>{degree}</div>
                <div className={institutionClassName}>{`${preInstitution}${institution}${postInstitution}`}</div>
                <div className={gpaClassName}>{`${preGPA}${gpa}${postGpa}`}</div>
                <div className={classOfClassName}>{`${preClassOf}${classOf}${postClassOf}`}</div>
                <TechStack value={techStack}/>
            </div>
        );
    }
}
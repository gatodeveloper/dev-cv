import React from 'react';
import './project-item.scss';
import {Paragraphs, Label} from "Common";

export class ProjectItem extends React.Component {
    static defaultProps = {
        className: 'project',
        classNames:{
            name:'name',
            description:"description",
            features:"features",
            featuresLabel:"features-label"
        },
        defaults:{
            featuresLabel:'Features'
        }
    };

    static getKey = (item) =>{
        return item.name;
    };

    render() {

        const {
            value,
            defaults,
            className,
            classNames
        } = this.props;

        const {name,
            description,
            features,
            featuresLabel
        } = {...defaults, ...value};

        const style = this.props.style ? this.props.style : {};

        return (
          <div className={className} style={style.self}>
              <div className={classNames.name} style={style.name}>{name}</div>
              <Paragraphs value={description} className={classNames.description} style={style.description}/>
              <Label content={featuresLabel} className={classNames.featuresLabel} style={style.featuresLabel}/>
              <Paragraphs value={features} className={classNames.features} style={style.features}/>
          </div>
        );
    }
}
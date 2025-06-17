import React from 'react';
import SectionComponent from "../SectionComponent";
import {
  EducationContainer,
  EducationContent,
  EducationData,
  EducationLine,
  EducationRounder,
  EducationStudies,
  EducationTime,
  EducationTitle,
  EducationYear,
  EducationDescription
} from './Education.styles';

interface EducationEntry {
  title: string;
  institution: string;
  year: string;
  description: string;
}

interface EducationProps {
  education: EducationEntry[];
  title: string;
}

const Education: React.FC<EducationProps> = ({education, title}) => {
  return (
    <SectionComponent title={title} sectionId="education">
      <EducationContainer>
        {education.map((edu, index) => (
          <EducationContent key={index}>
            {education.length > 1 && (
              <EducationTime>
                <EducationRounder/>
                {index < education.length - 1 && <EducationLine/>}
              </EducationTime>
            )}
            <EducationData>
              <EducationTitle>{edu.title}</EducationTitle>
              <EducationStudies>{edu.institution}</EducationStudies>
              <EducationYear>{edu.year}</EducationYear>
              <EducationDescription>{edu.description}</EducationDescription>
            </EducationData>
          </EducationContent>
        ))}
      </EducationContainer>
    </SectionComponent>
  );
};

export default Education;
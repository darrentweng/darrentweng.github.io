import React from 'react';
import SectionComponent from "../SectionComponent";
import {
  CourseContainer,
  CourseContent,
  CourseTitle,
  CourseLink,
  CourseInfo,
  CourseInstitution,
  CourseDate
} from './Courses.styles';

interface Course {
  title: string;
  institution: string;
  date: string;
  url?: string;
}

interface CoursesProps {
  courses: Course[];
  title: string;
}

const Courses: React.FC<CoursesProps> = ({courses, title}) => {
  return (
    <SectionComponent title={title} sectionId="courses">
      <CourseContainer>
        {courses.map((course, index) => (
          <CourseContent key={index}>
            <CourseTitle>
              {course.url ? (
                <CourseLink href={course.url} target="_blank" rel="noopener noreferrer">
                  {course.title}
                </CourseLink>
              ) : (
                course.title
              )}
            </CourseTitle>
            <CourseInfo>
              <CourseInstitution>{course.institution}</CourseInstitution>
              <CourseDate>{course.date}</CourseDate>
            </CourseInfo>
          </CourseContent>
        ))}
      </CourseContainer>
    </SectionComponent>
  );
};

export default Courses; 
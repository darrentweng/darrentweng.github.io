import React from 'react';
import SectionComponent from "../SectionComponent";
import {TestsContainer} from './Tests.styles';

interface TestEntry {
  title: string;
  score: string;
  date: string;
  institution: string;
  details?: string[];
}

interface TestsProps {
  tests: TestEntry[];
  title: string;
}

const Tests: React.FC<TestsProps> = ({tests, title}) => {
  return (
    <SectionComponent title={title} sectionId="tests">
      <TestsContainer>
        <div className="tests__container">
          {tests.map((test, index) => (
            <div key={index} className="tests__content">
              <div className="tests__header">
                <h3 className="tests__title">{test.title}</h3>
                <span className="tests__score">{test.score}</span>
              </div>
              <div className="tests__subtitle">
                <span className="tests__date">{test.date}</span>
                <span className="tests__institution">{test.institution}</span>
              </div>
              {test.details && (
                <ul className="tests__details">
                  {test.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </TestsContainer>
    </SectionComponent>
  );
};

export default Tests; 
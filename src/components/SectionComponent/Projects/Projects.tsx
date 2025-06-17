import React from 'react';
import SectionComponent from "../SectionComponent";
import {
  ProjectContainer,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
  ProjectTech,
  ProjectTechContainer
} from './Projects.styles';

interface Project {
  title: string;
  description: string;
  url?: string;
  technologies: string[];
}

interface ProjectsProps {
  projects: Project[];
  title: string;
}

const Projects: React.FC<ProjectsProps> = ({projects, title}) => {
  return (
    <SectionComponent title={title} sectionId="projects">
      <ProjectContainer>
        {projects.map((project, index) => (
          <ProjectContent key={index}>
            <ProjectTitle>
              {project.url ? (
                <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </ProjectLink>
              ) : (
                project.title
              )}
            </ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTechContainer>
              {project.technologies.map((tech, techIndex) => (
                <ProjectTech key={techIndex}>{tech}</ProjectTech>
              ))}
            </ProjectTechContainer>
          </ProjectContent>
        ))}
      </ProjectContainer>
    </SectionComponent>
  );
};

export default Projects; 
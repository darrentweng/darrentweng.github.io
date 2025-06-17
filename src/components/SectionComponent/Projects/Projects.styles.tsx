import styled from 'styled-components';

export const ProjectContainer = styled.div`
    display: grid;
    gap: 1.5rem;
`;

export const ProjectContent = styled.div`
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--container-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-2px);
    }
`;

export const ProjectTitle = styled.h3`
    font-size: var(--h3-font-size);
    margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
    font-size: var(--small-font-size);
    color: var(--text-color);
    margin-bottom: 1rem;
`;

export const ProjectLink = styled.a`
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
        color: var(--first-color);
    }
    
    @media print {
        color: var(--text-color);
        text-decoration: none;
    }
`;

export const ProjectTechContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const ProjectTech = styled.span`
    font-size: var(--smaller-font-size);
    padding: 0.25rem 0.75rem;
    background-color: var(--first-color-light);
    color: var(--first-color);
    border-radius: 1rem;
`; 
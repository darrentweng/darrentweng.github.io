import styled from 'styled-components';

export const CourseContainer = styled.div`
    display: grid;
    gap: 0.75rem;
`;

export const CourseContent = styled.div`
    /* Additional styles can be added here */
`;

export const CourseTitle = styled.h3`
    font-size: var(--h3-font-size);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CourseInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.25rem;
`;

export const CourseLink = styled.a`
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

export const CourseInstitution = styled.span`
    color: var(--text-color-light);
    font-size: var(--smaller-font-size);
`;

export const CourseDate = styled.span`
    color: var(--text-color-light);
    font-size: var(--smaller-font-size);
`; 
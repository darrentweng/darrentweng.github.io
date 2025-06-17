import styled from 'styled-components';

export const CertificateContainer = styled.div`
    display: grid;
    gap: 1.5rem;
`;

export const CertificateContent = styled.div`
    /* Additional styles can be added here */
`;

export const CertificateTitle = styled.h3`
    font-size: var(--h3-font-size);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CertificateDescription = styled.p`
    /* Styles for description */
`;

export const CertificateDate = styled.span`
    color: var(--text-color-light);
    font-size: var(--smaller-font-size);
`;

export const CertificateInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
`;

export const CertificateLink = styled.a`
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

export const CertificateIDLabel = styled.span`
    color: var(--text-color-light);
    font-size: var(--smaller-font-size);
`;

export const CertificateID = styled.div`
    color: var(--text-color-light);
    font-size: var(--smaller-font-size);
`;
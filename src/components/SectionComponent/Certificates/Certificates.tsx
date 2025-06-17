// src/components/Certificates/Certificates.tsx

import React from 'react';
import SectionComponent from "../SectionComponent";
import {
  CertificateContainer,
  CertificateContent,
  CertificateDate,
  CertificateDescription,
  CertificateID,
  CertificateIDLabel,
  CertificateInfo,
  CertificateLink,
  CertificateTitle
} from './Certificates.styles';

interface Certificate {
  title: string;
  description: string;
  date?: string;
  url?: string;
  certificationId?: string;
}

interface CertificatesProps {
  certificates: Certificate[];
  title: string;
  localizedCertId: string;
  localizedViewCert: string;
}

const Certificates: React.FC<CertificatesProps> = ({certificates, title, localizedCertId, localizedViewCert}) => {
  return (
    <SectionComponent title={title} sectionId={"certificate"}>
      <CertificateContainer>
        {certificates.map((cert, index) => (
          <CertificateContent key={index}>
            {cert.title && (
              <CertificateTitle>
                <CertificateLink href={cert.description} target="_blank" rel="noopener noreferrer">
                  {cert.title}
                </CertificateLink>
                {cert.date && <CertificateDate>{cert.date}</CertificateDate>}
              </CertificateTitle>
            )}
            <CertificateInfo>
              {cert.certificationId && (
                <CertificateID>
                  <CertificateIDLabel>{localizedCertId}:</CertificateIDLabel> {cert.certificationId}
                </CertificateID>
              )}
            </CertificateInfo>
          </CertificateContent>
        ))}
      </CertificateContainer>
    </SectionComponent>
  );
};

export default Certificates;

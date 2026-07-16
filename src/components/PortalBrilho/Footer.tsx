"use client";

import React, { useState } from 'react';
import { Mail, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.disclaimerTop}>
          O trabalho de Cristóvão Brilho não desaconselha o uso de medicamentos e consulta da medicina convencional.
        </p>

        <div className={styles.termsContainer}>
          <button 
            onClick={() => setShowTerms(!showTerms)} 
            className={styles.termsToggle}
          >
            TERMOS DE USO E AVISO LEGAL {showTerms ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showTerms && (
            <p className={styles.termsText}>
              TERMOS DE USO E DIREITOS AUTORAIS - Todos os direitos reservados. Todo o conteúdo deste site (textos, vídeos, marcas, ilustrações, fotos, gráficos, arquivos, designs, ebooks, áudios, etc.) é protegido por direitos autorais e outras leis de proteção. A distribuição, compartilhamento, ou venda sem autorização do produtor, além de antiético, é crime. Fica o usuário avisado, ciente e de acordo que toda a responsabilidade das escolhas por ele feitas, das ações e dos resultados obtidos antes, durante e após o uso do site são exclusivamente dele. Dada a complexidade dos serviços e dos diversos fatores que contribuem para o sucesso dos resultados propostos, o usuário entende e concorda que a utilização do site tem caráter informativo e educacional, isentando o produtor de todo e qualquer tipo de responsabilidade pela saúde física, mental, emocional e espiritual, por eventuais ganhos ou perdas financeiras ou por qualquer outro resultado que o usuário possa experimentar através do uso deste site. Ficam as partes cientes e de acordo que nada relacionado a este site deve ser considerado aconselhamento médico, de saúde mental, jurídico, financeiro ou religioso de qualquer forma. Caso o usuário esteja passando por problemas emocionais e psicológicos, orientamos a busca de um profissional especializado na área da saúde para receber o tratamento ideal para o seu quadro.
            </p>
          )}
        </div>

        <div className={styles.middleSection}>
          <div className={styles.logo}>
            CRISTÓVÃO BRILHO
          </div>
          <div className={styles.social}>
            <span className={styles.socialText}>Acompanhe-nos nas redes sociais:</span>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Instagram"><IconInstagram /></a>
              <a href="#" aria-label="Facebook"><IconFacebook /></a>
              <a href="#" aria-label="YouTube"><IconYoutube /></a>
              <a href="#" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <p>2026 © Cristóvão Brilho. Todos os Direitos Reservados.</p>
          <p>Feito por Serlex Agencia.</p>
        </div>
      </div>
    </footer>
  );
}

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function IconYoutube() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  );
}

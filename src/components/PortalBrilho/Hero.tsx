import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Imagem de Fundo (Cobrindo tudo) */}
      <div className={styles.imageBackground}>
        <Image 
          src="/hero.png"
          alt="Cristóvão Brilho"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'right top' }}
        />
      </div>
      
      {/* Conteúdo sobreposto */}
      <div className={styles.container}>
        {/* Logo no topo esquerdo */}
        <div className={styles.logoTopLeft}>
          CRISTÓVÃO BRILHO
        </div>

        <div className={styles.content}>
          <div className={styles.kicker}>CURSOS E TERAPIAS</div>
          <h1 className={styles.title}>
            Os Mantras, Cristais e Terapias Energéticas que vão te libertar da Matrix.
          </h1>
          <p className={styles.subtitle}>
            A sincronicidade entre mente, corpo e espírito é o que quebra esse ciclo.
            Faça parte do Portal Brilho e tenha acesso ao que Cristóvão Brilho ensina há mais de cinco décadas.
          </p>
          <a 
            href="https://pay.hotmart.com/E106709691V?off=5kw8hfp0" 
            className={styles.ctaButton}
            target="_blank" 
            rel="noopener noreferrer"
          >
            Quer começar agora <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <a href="#sobre">Sobre <span>v</span></a>
          <a href="#atendimentos">Atendimentos <span>v</span></a>
          <a href="#cursos">Cursos <span>v</span></a>
          <a href="#artigos">Artigos</a>
          <a href="#contato">Contato</a>
        </nav>
        
        <div className={styles.language}>
          <span className={styles.flag}>🇺🇸</span>
          <span className={styles.flag}>🇧🇷</span>
        </div>
      </div>
    </header>
  );
}

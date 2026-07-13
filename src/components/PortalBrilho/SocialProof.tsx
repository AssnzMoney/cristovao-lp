import React from 'react';
import styles from './SocialProof.module.css';

export default function SocialProof() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          MILHARES DE PESSOAS JÁ TIVERAM TRANSFORMAÇÕES EM VÁRIOS ÂMBITOS DE SUAS VIDAS ATRAVÉS DE CRISTÓVÃO BRILHO
        </h2>
        
        <div className={styles.placeholderBox}>
          <h3>[ ADICIONAR PROVAS AQUI ]</h3>
          <p>Insira os prints de depoimentos, vídeos ou fotos de palestras aqui.</p>
        </div>
      </div>
    </section>
  );
}

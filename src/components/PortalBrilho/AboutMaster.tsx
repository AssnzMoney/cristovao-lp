import React from 'react';
import Image from 'next/image';
import styles from './AboutMaster.module.css';

export default function AboutMaster() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/cristovao.jpg" 
              alt="Cristóvão Brilho com seu livro" 
              width={600} 
              height={600}
              quality={100}
              unoptimized
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          <div className={styles.content}>
            <h2 className={styles.name}>CRISTÓVÃO BRILHO</h2>
            
            <p>
              Por mais de 50 anos, Cristóvão Brilho tem estudado, vivenciado e transmitido o que aprendeu sobre energia, espiritualidade, ufologia, cristais, mantras e os temas que a humanidade ainda está aprendendo a compreender.
            </p>
            
            <p>
              Reconhecido internacionalmente. Presente nos Estados Unidos, Europa, Brasil e ao redor do mundo.
            </p>
            
            <p>
              Como alguém que passou cinco décadas no caminho — e que agora, pela primeira vez, está criando um espaço para você caminhar junto com ele nessa missão.
            </p>
            
            <p className={styles.highlight}>
              O Portal Brilho é esse espaço.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

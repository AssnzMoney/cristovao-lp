import React from 'react';
import Image from 'next/image';
import styles from './SocialProof.module.css';

export default function SocialProof() {
  const clippings = [
    {
      img: '/social-proof-1.png',
      caption: 'O Senhor dos Cristais',
      link: 'https://cristovaobrilho.com.br/wp-content/uploads/2021/10/Jornal-do-Brasil-Revista-Vida.pdf'
    },
    {
      img: '/social-proof-2.png',
      caption: 'National Examiner USA',
      link: 'https://cristovaobrilho.com.br/wp-content/uploads/2021/10/Revista-National-Examiner-USA.pdf'
    },
    {
      img: '/social-proof-3.png',
      caption: 'Poderoso Ser de Luz',
      link: 'https://cristovaobrilho.com.br/wp-content/uploads/2022/06/PODEROSO-SER-DE-LUZ.pdf'
    },
    {
      img: '/social-proof-4.png',
      caption: 'Sede de um dos 4 Melhores Curadores do Mundo',
      link: 'https://cristovaobrilho.com.br/wp-content/uploads/2022/06/SEDE-DE-UNO-DE-LOS-4-MEJORES...-1.pdf'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Reconhecimento e Autoridade</h2>
        <p className={styles.subtitle}>
          Cristóvão Brilho e seu trabalho de cura têm sido destaque nos maiores veículos de imprensa.
        </p>
        
        <div className={styles.grid}>
          {clippings.map((clip, index) => (
            <a key={index} href={clip.link} className={styles.card} target="_blank" rel="noopener noreferrer">
              <div className={styles.imageWrapper}>
                <Image 
                  src={clip.img} 
                  alt={clip.caption} 
                  fill
                  quality={100}
                  unoptimized
                  style={{ objectFit: 'cover' }} 
                  className={styles.image}
                />
              </div>
              <div className={styles.captionWrapper}>
                <p>{clip.caption}</p>
                <span className={styles.readMore}>Ver Matéria &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';
import styles from './SocialProof.module.css';

export default function SocialProof() {
  const clippings = [
    {
      img: '/social-proof-1.png',
      caption: 'Revista Nacional',
      link: '#'
    },
    {
      img: '/social-proof-2.png',
      caption: 'Jornal Local',
      link: '#'
    },
    {
      img: '/social-proof-3.png',
      caption: 'Entrevista Internacional',
      link: '#'
    },
    {
      img: '/social-proof-4.png',
      caption: 'Matéria Especial',
      link: '#'
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { CalendarDays, MessageCircle, Sparkles, HandMetal, Eye, BookOpen, Video, Users, Lock } from 'lucide-react';
import styles from './Deliverables.module.css';

export default function Deliverables() {
  const items = [
    {
      icon: <Video className={styles.icon} size={28} />,
      title: 'Encontros mensais ao vivo com Cristóvão Brilho',
      description: 'Sessões onde você aprenderá ao vivo as técnicas milenares para quebra da matriz energética.'
    },
    {
      icon: <MessageCircle className={styles.icon} size={28} />,
      title: 'Acesso direto a Cristóvão e à equipe pelo WhatsApp do Portal',
      description: 'Um canal direto para tirar dúvidas, relatar progressos e estar em sintonia com a comunidade.'
    },
    {
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      title: 'Curso de Cristais',
      description: 'Como identificar, ativar e usar cristais como ferramentas de cura e alinhamento energético.'
    },
    {
      icon: <HandMetal size={32} strokeWidth={1.5} />,
      title: 'Dons Mediúnicos',
      description: 'Descubra e compreenda os dons que você trouxe para essa vida — e como desenvolvê-los com segurança se quiser.'
    },
    {
      icon: <Eye size={32} strokeWidth={1.5} />,
      title: 'Desvendando o Mundo Invisível',
      description: 'Os temas que não podem ser abordados abertamente — tratados com profundidade, método e 50 anos de experiência.'
    },
    {
      icon: <BookOpen size={32} strokeWidth={1.5} />,
      title: 'E-book de Autocuidado Espiritual',
      description: 'Mantras, exercícios de fortalecimento e alinhamento de chakras para o dia a dia.'
    },
    {
      icon: <BookOpen className={styles.icon} size={28} />,
      title: 'Todo o acervo gravado de Cristóvão Brilho',
      description: 'Conteúdos exclusivos e não listados no YouTube, reunidos em uma biblioteca poderosa.'
    },
    {
      icon: <Users size={32} strokeWidth={1.5} />,
      title: 'Uma comunidade de pessoas no mesmo movimento',
      description: 'Que sentem o que você sente. Que buscam o que você busca. Que já entenderam que essa transição exige preparo — e escolheram se preparar juntas.'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>O que você acessa ao entrar no Portal Brilho:</h2>
        
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <a 
            href="https://pay.hotmart.com/E106709691V?off=5kw8hfp0"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            QUERO FAZER PARTE DO PORTAL BRILHO
            <Lock size={20} style={{ marginLeft: '10px' }} />
          </a>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import styles from './PainCycle.module.css';

export default function PainCycle() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Você sente que certos padrões na sua vida simplesmente parecem não mudar, por mais que você tente de tudo?
        </h2>
        
        <div className={styles.content}>
          <p>
            Padrões financeiros que simplesmente se repetem há gerações, relações interpessoais que sugam sua energia e parecem ser o padrão que você mais atrai, dores físicas ou indisposições que não têm explicação plausível...
          </p>
          <p>
            E você faz mais. Tenta mais. Se cobra mais. Mas o ciclo continua.
          </p>
          
          <div className={styles.highlightBox}>
            <p>
              Isso não é falta de esforço. Não é falta de fé. Não é falta de competência, ou muito provavelmente não é nenhuma "energia negativa" que te fizeram pensar.
            </p>
            <p>
              <strong>Isso são Registros.</strong> Memórias (dessa ou de outras vidas) que geraram bloqueios. Padrões que você registrou e dos quais você (sem orientação) não consegue se desprender...
            </p>
          </div>
          
          <p>
            Sua mente, corpo e espírito estão operando em frequências diferentes — e nenhuma força do braço ou esforço no mundo sincroniza o que precisa ser alinhado interna e energeticamente.
          </p>
          <p className={styles.warning}>
            Enquanto esse alinhamento não acontece — o padrão se repete. Sempre.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from 'react';
import { Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.pricingCard}>
          <h2 className={styles.title}>ACESSO AO PORTAL BRILHO</h2>

          <div className={styles.prices}>
            <p className={styles.originalPrice}>
              Preço oficial em agosto:<br />
              <span className={styles.strike}>R$297/mês</span>
            </p>
            <p className={styles.julyPrice}>
              Quem entra em julho paga apenas: <span className={styles.highlightGreen}>R$97/mês</span>
            </p>
            <div className={styles.currentPriceBox}>
              <h3 className={styles.currentPrice}>R$97<span className={styles.month}>/mês</span></h3>
            </div>
          </div>

          <a
            href="https://pay.hotmart.com/E106709691V?off=5kw8hfp0"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Lock size={20} /> QUERO ENTRAR POR APENAS R$97/MÊS
          </a>

          <div className={styles.security}>
            <p><Lock size={16} /> Pagamento 100% seguro</p>
            <p><CheckCircle2 size={16} /> Acesso imediato após a confirmação</p>
            <p><CheckCircle2 size={16} /> Cancele quando quiser — sem burocracia</p>
          </div>
        </div>

        <div className={styles.guarantee}>
          <ShieldCheck size={48} className={styles.guaranteeIcon} strokeWidth={1.5} />
          <h3 className={styles.guaranteeTitle}>GARANTIA DE 7 DIAS</h3>
          <p>
            SE ENTRAR, ACESSAR O CONTEÚDO E DECIDIR QUE NÃO QUER ESTAR CONOSCO MAIS, BASTA SOLICITAR O REEMBOLSO E NÃO RENOVAR.
          </p>
        </div>

        <div className={styles.footer}>
          <p className={styles.urgencyFooter}>Oferta especial de R$97/mês por tempo limitado</p>
          <p className={styles.signature}>Fique em Paz e um feixe de luz <SparklesIcon /><br />— Cristóvão Brilho</p>
        </div>
      </div>
    </section>
  );
}

function SparklesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }}>
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

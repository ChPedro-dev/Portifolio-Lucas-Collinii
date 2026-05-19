import { useEffect, useRef } from 'react';
import './AbbaJovemDetail.css';

const ASSETS = '/assets/SESSÃO 2/TEMA AJ 2025';

const videoProcess = [
  {
    id: 'aj-bg-animation',
    title: 'Background animado',
    src: `${ASSETS}/AJ BG ANIMATION.mp4`,
  },
  {
    id: 'aj-cronometro',
    title: 'Cronômetro',
    src: `${ASSETS}/AJ CRONOMETRO.mp4`,
  },
];

const imageProcess = [
  {
    id: 'aj-bg-descanso',
    title: 'Background descanso',
    type: 'video',
    src: `${ASSETS}/AJ DESCANSO.mp4`,
  },
  {
    id: 'aj-bg-fundo',
    title: 'Background estático',
    type: 'image',
    src: `${ASSETS}/AJ BG FUNDO.png`,
  },
];

export default function AbbaJovemDetail({ project, onBack }) {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div 
      className="aj-detail-page" 
      ref={pageRef}
      style={{ 
        background: ` url('${ASSETS}/BG ABBA JOVEM.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <button className="aj-back-button" onClick={onBack}>
        ← Voltar
      </button>

      <header className="aj-detail-header">
        <div className="aj-section-label">Identidade Visual • Verão 2025</div>
        <h1 className="aj-detail-title">{project?.title || 'Abba Jovem'}</h1>
        <p className="aj-detail-desc">
          Exploração visual de um tema leve e refrescante para o Abba Jovem. 
          O processo envolveu a criação de backgrounds animados, cronômetros personalizados e 
          uma paleta de cores que remete ao litoral e à energia do verão.
        </p>
      </header>

      {/* === SEÇÃO 1: PROCESSO VÍDEO === */}
      <section className="aj-process aj-process-video">
        <h2 className="aj-process-title">motion design • after effects, photoshop & premiere </h2>

        <div className="aj-boia-wrapper" aria-hidden="true">
          <img src={`${ASSETS}/BOIA.png`} alt="" className="aj-boia" />
        </div>

        <div className="aj-grid">
          {videoProcess.map((item) => (
            <div key={item.id} className="aj-card">
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="aj-card-media"
              />
              <span className="aj-card-label">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* === SEÇÃO 2: PROCESSO IMAGEM === */}
      <section className="aj-process aj-process-image">

        <div className="aj-grid">
          {imageProcess.map((item) => (
            <div key={item.id} className="aj-card">
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aj-card-media"
                />
              ) : (
                <img src={item.src} alt={item.title} className="aj-card-media" />
              )}
              <span className="aj-card-label">{item.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

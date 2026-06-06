import { useEffect, useRef } from 'react';
import './AbbaJovemDetail.css';

const ASSETS = '/assets/SESSÃO 2/TEMA AJ 2025';

const themeCards = [
  {
    id: 'aj-descanso',
    title: 'Tema AJ - Descanso',
    type: 'image',
    src: `${ASSETS}/AJ BG FUNDO.png`,
  },
  {
    id: 'aj-descanso-animado',
    title: 'Tema AJ - Descanso animado',
    type: 'video',
    src: `${ASSETS}/AJ DESCANSO.mp4`,
  },
  {
    id: 'aj-bg-animation',
    title: 'Tema AJ - Background animado',
    type: 'video',
    src: `${ASSETS}/AJ BG ANIMATION.mp4`,
  },
  {
    id: 'aj-cronometro',
    title: 'Tema AJ - Cronômetro',
    type: 'video',
    src: `${ASSETS}/AJ CRONOMETRO.mp4`,
  },
];

export default function AbbaJovemDetail({ project, onBack }) {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aj-detail-page" ref={pageRef}>
      <video
        className="aj-bg-video"
        src={`${ASSETS}/BG SESSÃO AJ.mp4`}
        autoPlay
        loop
        muted
        playsInline
      />

      <button className="aj-back-button" onClick={onBack}>
        ← Voltar
      </button>

      <header className="aj-detail-header">
        <h1 className="aj-detail-title">TEMA DO ANO – ABBA JOVEM 2025</h1>
        <p className="aj-detail-desc">
          Identidade visual veranil para o Abba Jovem 2025.<br />
          Exploração de um tema leve, refrescante e divertido — referências do litoral,
          motion graphics e elementos gráficos animados.
        </p>
      </header>

      <section className="aj-frame">
        <div className="aj-grid">
          {themeCards.map((item) => (
            <div key={item.id} className="aj-card-wrap">
              <span className="aj-card-title">{item.title}</span>
              <div className="aj-card">
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

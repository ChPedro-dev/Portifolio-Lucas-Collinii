import { useEffect, useRef } from 'react';
import './AfterPartyDetail.css';

const ASSETS = '/assets/SESSÃO 2/AFTER PARTY';

const themeCards = [
  {
    id: 'af-descanso',
    title: 'After Party - Descanso',
    type: 'image',
    src: `${ASSETS}/DESCANSO AFTER PARTY.png`,
  },
  {
    id: 'af-bg-animado',
    title: 'After Party - Background animado',
    type: 'video',
    src: `${ASSETS}/BG After Party Descanso Animado.mp4`,
  },
  {
    id: 'af-pinata',
    title: 'After Party - VH Piñata',
    type: 'video',
    src: `${ASSETS}/VH PIÑATA.mp4`,
  },
  {
    id: 'af-mexican',
    title: 'After Party - AF Mexican',
    type: 'image',
    src: `${ASSETS}/AF MEXICAN.png`,
  },
];

export default function AfterPartyDetail({ project, onBack }) {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="af-detail-page" ref={pageRef}>
      <video
        className="af-bg-video"
        src={`${ASSETS}/BG SESSÃO AF.mp4`}
        autoPlay
        loop
        muted
        playsInline
      />

      <button className="af-back-button" onClick={onBack}>
        ← Voltar
      </button>

      <header className="af-detail-header">
        <h1 className="af-detail-title">AJ AFTER PARTY – MÉXICO</h1>
        <p className="af-detail-desc">
          Edição, desenvolvimento de pacote gráfico e finalização de projeto de encerramento de semestre.<br />
          O trabalho que marcou o início da minha trajetória com o After Effects.
        </p>
      </header>

      <section className="af-frame">
        <div className="af-grid">
          {themeCards.map((item) => (
            <div key={item.id} className="af-card-wrap">
              <span className="af-card-title">{item.title}</span>
              <div className="af-card">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="af-card-media"
                  />
                ) : (
                  <img src={item.src} alt={item.title} className="af-card-media" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

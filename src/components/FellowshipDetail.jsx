import { useEffect, useRef } from 'react';
import './FellowshipDetail.css';

const ASSETS = '/assets/SESSÃO 2/FELLOWSHIP';

export default function FellowshipDetail({ project, onBack }) {
  const pageRef = useRef(null);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2) return;

    const sync = () => {
      if (Math.abs(v1.currentTime - v2.currentTime) > 0.3) {
        v2.currentTime = v1.currentTime;
      }
    };

    v1.addEventListener('timeupdate', sync);
    return () => v1.removeEventListener('timeupdate', sync);
  }, []);

  return (
    <div
      className="fl-detail-page"
      ref={pageRef}
      style={{
        backgroundImage: `url('${ASSETS}/BG FELLOWSHIP.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <button className="fl-back-button" onClick={onBack}>
        ← Voltar
      </button>

      <header className="fl-detail-header">
        <h1 className="fl-detail-title">FELLOWSHIP AJ</h1>
        <p className="fl-detail-desc">
          Edição e finalização de vídeo para o evento Fellowship do Abba Jovem.<br />
          Trabalho focado em capturar a energia e a conexão entre os participantes.
        </p>
      </header>

      <section className="fl-frame">
        {/* Dois vídeos em destaque */}
        <div className="fl-grid-videos">
          <div className="fl-card-wrap">
            <span className="fl-card-title">Fellowship AJ – Recap</span>
            <div className="fl-card fl-card--hero">
              <video
                ref={video1Ref}
                src={`${ASSETS}/FELLOWSHIP AJ 26.04.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="fl-card-media"
              />
            </div>
          </div>
          <div className="fl-card-wrap">
            <span className="fl-card-title">Fellowship AJ – Behind the scenes</span>
            <div className="fl-card fl-card--hero">
              <video
                ref={video2Ref}
                src={`${ASSETS}/2026-04-21 17-02-49.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="fl-card-media"
              />
            </div>
          </div>
        </div>

        {/* Imagem descanso centralizada */}
        <div className="fl-descanso-wrap">
          <span className="fl-card-title fl-card-title--center">Fellowship AJ – Descanso</span>
          <div className="fl-card fl-card--descanso">
            <img
              src={`${ASSETS}/DESCANSO FELLOWSHIP AJ.png`}
              alt="Descanso Fellowship AJ"
              className="fl-card-media"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

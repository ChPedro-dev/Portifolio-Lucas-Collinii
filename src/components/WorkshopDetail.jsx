import { useEffect, useRef } from 'react';
import './WorkshopDetail.css';

const ASSETS = '/assets/sessao-2/workshop';

export default function WorkshopDetail({ project, onBack }) {
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
    <div className="ws-detail-page" ref={pageRef}>
      <video
        className="ws-bg-video"
        src={`${ASSETS}/bg-sessao-workshop.mp4`}
        autoPlay
        loop
        muted
        playsInline
      />

      <button className="ws-back-button" onClick={onBack}>
        ← Voltar
      </button>

      <header className="ws-detail-header">
        <h1 className="ws-detail-title">WORKSHOP ABBA MÚSICA</h1>
        <p className="ws-detail-desc">
          Desenvolvimento de pacote gráfico para identidade visual do grupo Abba Música.<br />
          Projeto educacional com abordagem visual limpa e elegante, priorizando clareza, legibilidade e funcionalidade.
        </p>
      </header>

      <section className="ws-frame">
        {/* Videos em destaque na parte de cima, sincronizados */}
        <div className="ws-grid-videos">
          <div className="ws-card-wrap">
            <span className="ws-card-title">Workshop - Timeline</span>
            <div className="ws-card ws-card--hero">
              <video
                ref={video1Ref}
                src={`${ASSETS}/timeline-workshop-ok.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="ws-card-media"
              />
            </div>
          </div>
          <div className="ws-card-wrap">
            <span className="ws-card-title">Workshop - Vídeo de Aviso</span>
            <div className="ws-card ws-card--hero">
              <video
                ref={video2Ref}
                src={`${ASSETS}/video-de-aviso.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="ws-card-media"
              />
            </div>
          </div>
        </div>

        {/* Imagens na parte de baixo */}
        <div className="ws-grid-images">
          <div className="ws-card-wrap">
            <span className="ws-card-title">Workshop - Descanso</span>
            <div className="ws-card ws-card--image">
              <img
                src={`${ASSETS}/descanso-workshop.png`}
                alt="Descanso Workshop"
                className="ws-card-media"
              />
            </div>
          </div>
          <div className="ws-card-wrap">
            <span className="ws-card-title">Workshop - Fundo</span>
            <div className="ws-card ws-card--image">
              <img
                src={`${ASSETS}/fundo-workshop.png`}
                alt="Fundo Workshop"
                className="ws-card-media"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

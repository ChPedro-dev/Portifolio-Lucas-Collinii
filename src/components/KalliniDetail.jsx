import { useEffect, useRef } from 'react';
import './KalliniDetail.css';

const ASSETS = '/assets/SESSÃO 3/KALLINI';

export default function KalliniDetail({ project, onBack }) {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="kl-detail-page" ref={pageRef}>
      <video
        className="kl-bg-video"
        src={`${ASSETS}/KALLINI BG.mp4`}
        autoPlay
        loop
        muted
        playsInline
      />

      <button className="kl-back-button" onClick={onBack}>
        ← Voltar
      </button>

      <header className="kl-detail-header">
        <h1 className="kl-detail-title">PROJETO KALLINI</h1>
        <p className="kl-detail-desc">
          Identidade visual desenvolvida do zero com base em personagens de League of Legends.<br />
          Conteúdos focados em gameplay e entretenimento com coerência estética e temática.
        </p>
      </header>

      <section className="kl-frame">
        <div className="kl-top-grid">
          {/* Left panel - Info */}
          <div className="kl-info-panel">
            <ul className="kl-info-list">
              <li>PACOTE GRÁFICO</li>
              <li>THUMBNAIL</li>
              <li>BANNER</li>
              <li>CRIAÇÃO DE IDENTIDADE VISUAL</li>
            </ul>
            <div className="kl-logo-row">
              <img src={`${ASSETS}/MAIN/2MAIN_00096.png`} alt="Kallini Logo" className="kl-logo-img kl-icon" />
              <img src={`${ASSETS}/MARCA D'AGUA.png`} alt="Kallini Marca" className="kl-logo-img kl-marca" />
            </div>
          </div>

          {/* Right panel - Banner */}
          <div className="kl-card kl-banner-card">
            <img src={`${ASSETS}/BANNER KALLINI.png`} alt="Banner Kallini" className="kl-card-media" />
          </div>
        </div>

        <div className="kl-mid-grid">
           {/* Thumbs / Small previews */}
           <div className="kl-card kl-thumb-card">
             <img src={`${ASSETS}/THUMB EP1.png`} alt="Thumb EP1" className="kl-card-media" />
           </div>
           <div className="kl-card kl-vh-card">
             <video src={`${ASSETS}/VH_KALLINI_COLLINI.mov`} autoPlay loop muted playsInline className="kl-card-media" />
           </div>
        </div>

        {/* Video Completo */}
        <div className="kl-video-section">
          <h2 className="kl-video-title">VÍDEO COMPLETO</h2>
          <div className="kl-card kl-full-video">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/mvdSYUS9pJw?si=V37OA_zxPTxrO0RU" 
              title="Projeto Kallini" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="kl-card-media kl-media-controls"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

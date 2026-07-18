import { useEffect, useRef } from 'react';
import './ColliniLabDetail.css';

const ASSETS = '/assets/sessao-3/clab';

export default function ColliniLabDetail({ project, onBack }) {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="clab-detail-page" ref={pageRef}>
      <div className="clab-bg-image" style={{ backgroundImage: `url('${ASSETS}/background-clab.webp')` }} />

      <button className="clab-back-button" onClick={onBack}>
        ← Voltar
      </button>

      <header className="clab-header">
        <h1 className="clab-title">PROJETO COLLINI LAB.</h1>
        <p className="clab-subtitle">Collini Lab. é uma marca de vestuário desenvolvida do zero, com identidade visual inspirada em referências familiares e afetivas. Criada inicialmente como um projeto de estudo, evoluiu para uma proposta de marca comercial, com estética minimalista, mensagens diretas e coleções que fortalecem sua identidade. O projeto contemplou o desenvolvimento do naming, da identidade visual e das aplicações da marca, priorizando coerência, autenticidade e potencial de mercado.</p>
      </header>

      <div className="clab-content-wrapper">
        <section className="clab-id-visual-section">
          <h2 className="clab-section-title">IDENTIDADE VISUAL</h2>
          
          <div className="clab-grid-4">
            <div className="clab-card"><img src={`${ASSETS}/png1.webp`} alt="Logo 1" /></div>
            <div className="clab-card"><img src={`${ASSETS}/png2.webp`} alt="Logo 2" /></div>
            <div className="clab-card"><img src={`${ASSETS}/png3.webp`} alt="Logo 3" /></div>
            <div className="clab-card"><img src={`${ASSETS}/png4.webp`} alt="Logo 4" /></div>
          </div>

          <div className="clab-grid-4">
            <div className="clab-card-no-padding"><img src={`${ASSETS}/png5.webp`} alt="Tshirt 1" /></div>
            <div className="clab-card-no-padding"><img src={`${ASSETS}/png6.webp`} alt="Tshirt 2" /></div>
            <div className="clab-card-no-padding"><img src={`${ASSETS}/png7.webp`} alt="Tshirt 3" /></div>
            <div className="clab-card-no-padding"><img src={`${ASSETS}/png8.webp`} alt="Tshirt 4" /></div>
          </div>

          <div className="clab-wallpapers">
            <img src={`${ASSETS}/wallpaper1.webp`} alt="Wallpaper 1" className="clab-wallpaper-1" />
            <img src={`${ASSETS}/wallpaper2.webp`} alt="Wallpaper 2" className="clab-wallpaper-2" />
          </div>
        </section>

        <section className="clab-id-visual-section">
          <h2 className="clab-section-title">IDENTIDADE VISUAL</h2>

          <div className="clab-bottom-layout">
            <div className="clab-bottom-left">
              <div className="clab-tshirts-box">
                <img src={`${ASSETS}/tshirt1.webp`} alt="Tshirt Flat 1" />
                <img src={`${ASSETS}/tshirt2.webp`} alt="Tshirt Flat 2" />
                <img src={`${ASSETS}/tshirt3.webp`} alt="Tshirt Flat 3" />
                <img src={`${ASSETS}/tshirt4.webp`} alt="Tshirt Flat 4" />
              </div>
              <div className="clab-logos-box">
                <img src={`${ASSETS}/logo1.webp`} alt="Logo 1" />
                <img src={`${ASSETS}/logo2.webp`} alt="Logo 2" />
                <img src={`${ASSETS}/logopng3.webp`} alt="Logo 3" />
                <img src={`${ASSETS}/logopng4.webp`} alt="Logo 4" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <img
        src={`${ASSETS}/manequin.webp`}
        alt="Mannequin"
        className="clab-mannequin-overlay"
      />
    </div>
  );
}

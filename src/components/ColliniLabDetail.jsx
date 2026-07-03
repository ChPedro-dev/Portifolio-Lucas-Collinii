import { useEffect, useRef } from 'react';
import './ColliniLabDetail.css';

const ASSETS = '/assets/SESSÃO 3/CLAB';

export default function ColliniLabDetail({ project, onBack }) {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="clab-detail-page" ref={pageRef}>
      <div className="clab-bg-image" style={{ backgroundImage: `url('${ASSETS}/BACKGROUND CLAB.png')` }} />

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
            <div className="clab-card"><img src={`${ASSETS}/PNG1.png`} alt="Logo 1" /></div>
            <div className="clab-card"><img src={`${ASSETS}/PNG2.png`} alt="Logo 2" /></div>
            <div className="clab-card"><img src={`${ASSETS}/PNG3.png`} alt="Logo 3" /></div>
            <div className="clab-card"><img src={`${ASSETS}/PNG4.png`} alt="Logo 4" /></div>
          </div>

          <div className="clab-grid-4">
            <div className="clab-card-no-padding"><img src={`${ASSETS}/PNG5.png`} alt="Tshirt 1" /></div>
            <div className="clab-card-no-padding"><img src={`${ASSETS}/PNG6.png`} alt="Tshirt 2" /></div>
            <div className="clab-card-no-padding"><img src={`${ASSETS}/PNG7.png`} alt="Tshirt 3" /></div>
            <div className="clab-card-no-padding"><img src={`${ASSETS}/PNG8.png`} alt="Tshirt 4" /></div>
          </div>

          <div className="clab-wallpapers">
            <img src={`${ASSETS}/WALLPAPER1.png`} alt="Wallpaper 1" className="clab-wallpaper-1" />
            <img src={`${ASSETS}/WALLPAPER2.png`} alt="Wallpaper 2" className="clab-wallpaper-2" />
          </div>
        </section>

        <section className="clab-id-visual-section">
          <h2 className="clab-section-title">IDENTIDADE VISUAL</h2>

          <div className="clab-bottom-layout">
            <div className="clab-bottom-left">
              <div className="clab-tshirts-box">
                <img src={`${ASSETS}/TSHIRT1.png`} alt="Tshirt Flat 1" />
                <img src={`${ASSETS}/TSHIRT2.png`} alt="Tshirt Flat 2" />
                <img src={`${ASSETS}/TSHIRT3.png`} alt="Tshirt Flat 3" />
                <img src={`${ASSETS}/TSHIRT4.png`} alt="Tshirt Flat 4" />
              </div>
              <div className="clab-logos-box">
                <img src={`${ASSETS}/LOGO1.png`} alt="Logo 1" />
                <img src={`${ASSETS}/LOGO2.png`} alt="Logo 2" />
                <img src={`${ASSETS}/LOGOpng3.png`} alt="Logo 3" />
                <img src={`${ASSETS}/LOGOpng4.png`} alt="Logo 4" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <img
        src={`${ASSETS}/MANEQUIN.png`}
        alt="Mannequin"
        className="clab-mannequin-overlay"
      />
    </div>
  );
}

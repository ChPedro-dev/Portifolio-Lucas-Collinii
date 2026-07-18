import './About.css';

const skills = [
  'Edição de vídeo',
  'Design gráfico',
  'Identidade visual',
  'Motion design',
  'Captação de imagem',
  'Direção criativa',
];

const softwareIcons = [
  { src: '/assets/webps/iconpr.webp', alt: 'Premiere Pro' },
  { src: '/assets/webps/iconaf.webp', alt: 'After Effects' },
  { src: '/assets/webps/iconps.webp', alt: 'Photoshop' },
  { src: '/assets/webps/iconfl.webp', alt: 'FL Studio' },
];

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-inner">
        {/* LEFT */}
        <div className="about-left reveal">
          <div className="section-label">Sobre mim</div>
          <h2 className="section-title">
            Quem<br />sou eu
          </h2>
          <div className="about-text">
            <p>
              Me chamo <strong>Lucas Collini</strong>, tenho 22 anos e atuo como editor de vídeo e designer
              gráfico. Tenho experiência na criação de conteúdos visuais, com foco em audiovisual, edição e
              identidade visual.
            </p>
            <p>
              Ao longo da minha trajetória, desenvolvi projetos utilizando ferramentas como{' '}
              <strong>Premiere Pro, After Effects e Photoshop</strong>, participando de todas as etapas do
              processo criativo da concepção à entrega final.
            </p>
            <p>
              Busco oportunidades para crescer profissionalmente na área audiovisual, contribuindo com
              criatividade, organização e atenção aos detalhes.
            </p>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <div className="section-label" style={{ marginBottom: '1rem' }}>O que eu faço</div>
            <div className="skills-grid">
              {skills.map((s) => (
                <div className="skill-item" key={s}>{s}</div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right reveal">
          {/* Softwares */}
          <div className="info-card">
            <h4>Softwares</h4>
            <div className="software-badges">
              <div className="badge">
                {softwareIcons.map((ic) => (
                  <img key={ic.alt} src={ic.src} alt={ic.alt} className="icon" />
                ))}
              </div>
            </div>
          </div>

          {/* Idiomas */}
          <div className="info-card">
            <h4>Idiomas</h4>
            <div className="lang-item">
              <span>Inglês</span>
              <span className="lang-level">Avançado · Dynamic Speaking First</span>
            </div>
            <div className="lang-item no-border">
              <span>Português</span>
              <span className="lang-level">Nativo</span>
            </div>
          </div>

          {/* Habilidades */}
          <div className="info-card">
            <h4>Habilidades</h4>
            <div className="skills-grid" style={{ gridTemplateColumns: '1fr' }}>
              {['Edição de vídeo', 'Motion design', 'Design gráfico', 'Captação de imagem', 'Direção criativa'].map(
                (s) => <div className="skill-item" key={s}>{s}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

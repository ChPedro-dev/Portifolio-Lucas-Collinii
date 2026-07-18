import './Projects.css';

const personalProjects = [
  {
    id: 'kalliniCard',
    image: '/assets/sessao-3/kallini/capa.webp',
    gradient: 'linear-gradient(135deg, #001a3a, #003a6e, #0050a0)',
    emoji: '⚔️',
    typeLabel: 'Projeto Pessoal · Gaming',
    title: 'Projeto Kallini',
    desc: 'Identidade visual desenvolvida do zero com base em personagens de League of Legends. Conteúdos focados em gameplay e entretenimento com coerência estética e temática.',
    tags: ['Branding', 'After Effects', 'Gaming'],
  },
  {
    id: 'colliniLabCard',
    image: '/assets/sessao-3/clab/wallpaper-collini-lab-v2.webp',
    gradient: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
    emoji: '👕',
    typeLabel: 'Projeto Pessoal · Moda',
    title: 'Collini Lab.',
    desc: 'Marca de vestuário desenvolvida do zero com identidade visual construída a partir de referências familiares e afetivas. Estética minimalista com estampas e mensagens diretas.',
    tags: ['Branding', 'Naming', 'Identidade'],
  },
];

export default function Personal({ onSelectProject }) {
  return (
    <section className="projects" id="pessoais">
      <div className="projects-header reveal">
        <div>
          <div className="section-label">Criação</div>
          <h2 className="section-title">Projetos<br />Pessoais</h2>
        </div>
      </div>
      <div className="proj-grid">
        {personalProjects.map((p) => (
          <div 
            className="proj-card reveal" 
            id={p.id} 
            key={p.id}
            onClick={() => onSelectProject?.(p)}
            style={{ cursor: 'pointer' }}
          >
            <div
              className="proj-img"
              style={{ 
                background: p.image ? `url('${p.image}') center/cover` : p.gradient 
              }}
            >
              {!p.image && <span className="proj-emoji">{p.emoji}</span>}
              <div className="proj-img-overlay" />
              <span className="proj-type-label">{p.typeLabel}</span>
            </div>
            <div className="proj-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="exp-tags">
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

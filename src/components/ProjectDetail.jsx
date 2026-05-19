import { useEffect } from 'react';
import './ProjectDetail.css';

export default function ProjectDetail({ project, onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return null;

  return (
    <div className="project-detail-page" style={{ backgroundImage: `url('${project.hoverBg}')` }}>
      <div className="detail-overlay" />
      
      <button className="back-button" onClick={onBack}>
        ← Voltar
      </button>

      <div className="detail-content reveal visible">
        <div className="detail-header">
          <div className="section-label">{project.typeLabel || 'Projeto'}</div>
          <h1 className="detail-title">{project.title}</h1>
        </div>

        <div className="detail-grid">
          <div className="detail-main">
            <img src={project.image} alt={project.title} className="detail-hero-img" />
            <div className="detail-desc">
              <p>{project.desc}</p>
              <div className="exp-tags">
                {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
          
          <div className="detail-sidebar">
             {/* Aqui poderiam entrar mais detalhes específicos do projeto no futuro */}
             <div className="info-card">
               <h4>Status</h4>
               <p>Concluído</p>
             </div>
             <div className="info-card">
               <h4>Ano</h4>
               <p>2024 / 2025</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

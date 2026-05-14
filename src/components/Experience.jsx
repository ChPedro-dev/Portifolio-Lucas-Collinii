import './Experience.css';

const experiences = [
  {
    company: 'TVCI · Paranaguá',
    period: '2 anos',
    role: 'Editor & Operador de Master',
    desc: 'Edição e finalização de chamadas promocionais, criação de vinhetas e pacotes gráficos. Também atuo como operador de master, garantindo que toda a programação vá ao ar com qualidade e dentro dos padrões técnicos.',
    tags: ['Edição de Vídeo', 'Motion Graphics', 'Operação ao Vivo', 'Premiere Pro'],
  },
  {
    company: 'Comunhão Cristã Abba',
    period: 'Curitiba / Paranaguá',
    role: 'Comunicação e Audiovisual',
    desc: 'Edição de vídeos e imagens para redes sociais e projetos institucionais. Criação de artes e conteúdos visuais, captação de fotos e vídeos para a identidade da instituição.',
    tags: ['Edição', 'Design', 'Captação'],
  },
  {
    company: 'Comunhão Cristã Abba',
    period: 'Curitiba',
    role: 'Auxiliar Técnico de Áudio',
    desc: 'Suporte técnico em operação de áudio, edição de vídeos e imagens, criação de artes e captação de conteúdo visual para os eventos da instituição.',
    tags: ['Áudio', 'Captação', 'Edição'],
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experiencia">
      <div className="section-label reveal">Experiência</div>
      <h2 className="section-title reveal">
        Trajetória<br />Profissional
      </h2>
      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div className="exp-item reveal" key={i}>
            <div className="exp-meta">
              <div className="exp-company">{exp.company}</div>
              <div className="exp-period">{exp.period}</div>
            </div>
            <div>
              <div className="exp-role">{exp.role}</div>
              <p className="exp-desc">{exp.desc}</p>
              <div className="exp-tags">
                {exp.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

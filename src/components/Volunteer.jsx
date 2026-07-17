import { useState, useRef } from 'react';
import ImageCard from './ImageCard';
import './Projects.css';

const volunteerProjects = [
  {
    id: 'afterPartyCard',
    image: '/assets/sessao-2/after-party/descanso-after-party.png',
    hoverBg: '/assets/sessao-2/after-party/bg-after-party.png',
    title: 'AJ After Party México',
    desc: 'Edição, desenvolvimento de pacote gráfico e finalização de projeto de encerramento de semestre. O trabalho que marcou o início da minha trajetória com o After Effects.',
    tags: ['After Effects', 'Motion Design'],
    keepCoverOnHover: true,
  },
  {
    id: 'fellowshipCard',
    image: '/assets/sessao-2/fellowship/descanso-fellowship-aj.png',
    hoverBg: '/assets/sessao-2/fellowship/bg-fellowship.png',
    title: 'AJ Fellowship',
    desc: 'Edição e finalização de vídeo para o evento Fellowship do Abba Jovem. Trabalho focado em capturar a energia e a conexão entre os participantes.',
    tags: ['Edição', 'After Effects'],
    keepCoverOnHover: true,
  },
  {
    id: 'abbaJovemCard',
    image: '/assets/sessao-2/tema-aj-2025/capa.png',
    hoverBg: '/assets/sessao-2/tema-aj-2025/aj-bg-fundo.png',
    title: 'Abba Jovem',
    desc: 'Desenvolvimento de pacote gráfico para a identidade visual do Abba Jovem, explorando referências do litoral e uma estética leve, com clima veranil.',
    tags: ['Identidade Visual', 'Motion'],
  },
  {
    id: 'workshopCard',
    image: '/assets/sessao-2/workshop/descanso-workshop.png',
    hoverBg: '/assets/sessao-2/workshop/bg-sessao-workshop.mp4',
    title: 'Workshop Abba Música',
    desc: 'Desenvolvimento de pacote gráfico para identidade visual do grupo Abba Música. Projeto educacional com abordagem visual simples, priorizando clareza e funcionalidade.',
    tags: ['Identidade Visual', 'Design'],
    keepCoverOnHover: true,
  },
];

export default function Volunteer({ onSelectProject }) {
  const [hoveredBg, setHoveredBg] = useState(null);
  const hoverTimerRef = useRef(null);

  const handleMouseEnter = (p) => {
    setHoveredBg(p.hoverBg);
    // Inicia timer de 2 segundos para redirecionar
    hoverTimerRef.current = setTimeout(() => {
      onSelectProject?.(p);
    }, 2000);
  };

  const handleMouseLeave = () => {
    setHoveredBg(null);
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
  };

  return (
    <section
      className="projects volunteer-section"
      id="voluntario"
      style={{
        background: 'var(--mid)',
        position: 'relative',
        transition: 'background 0.5s ease',
        overflow: 'hidden',
      }}
    >
      {/* Background Layer */}
      {volunteerProjects.map((p) => 
        p.hoverBg.endsWith('.mp4') ? (
          <video
            key={`bg-${p.id}`}
            src={p.hoverBg}
            autoPlay
            loop
            muted
            playsInline
            className={`volunteer-bg-layer ${hoveredBg === p.hoverBg ? 'visible' : ''}`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: hoveredBg === p.hoverBg ? 0.2 : 0,
              transition: 'opacity 0.8s ease',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />
        ) : (
          <div
            key={`bg-${p.id}`}
            className={`volunteer-bg-layer ${hoveredBg === p.hoverBg ? 'visible' : ''}`}
            style={{
              backgroundImage: `url('${p.hoverBg}')`,
              position: 'absolute',
              inset: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: hoveredBg === p.hoverBg ? 0.2 : 0,
              transition: 'opacity 0.8s ease',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />
        )
      )}

      <div className="projects-header reveal" style={{ position: 'relative', zIndex: 1 }}>
        <div>
          <div className="section-label">Impacto</div>
          <h2 className="section-title">Trabalhos<br />Voluntários</h2>
        </div>
      </div>
      <div className="proj-grid" style={{ position: 'relative', zIndex: 1 }}>
        {volunteerProjects.map((p) => (
          <ImageCard
            key={p.id}
            {...p}
            onMouseEnter={() => handleMouseEnter(p)}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
              onSelectProject?.(p);
            }}
          />
        ))}
      </div>
    </section>
  );
}

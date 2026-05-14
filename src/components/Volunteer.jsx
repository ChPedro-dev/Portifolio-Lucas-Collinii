import { useRef } from 'react';
import VideoCard from './VideoCard';
import './Projects.css';

const volunteerProjects = [
  {
    id: 'afterPartyCard',
    videoMain: '/assets/SESSÃO 2/AFTER PARTY/BG After Party Descanso Animado.mp4',
    videoBg: '/assets/SESSÃO 2/AFTER PARTY/BG After Party Descanso Animado.mp4',
    poster: '/assets/SESSÃO 2/AFTER PARTY/AF MEXICAN.png',
    title: 'AJ After Party México',
    desc: 'Edição, desenvolvimento de pacote gráfico e finalização de projeto de encerramento de semestre. O trabalho que marcou o início da minha trajetória com o After Effects.',
    tags: ['After Effects', 'Motion Design'],
  },
  {
    id: 'abbaJovemCard',
    videoMain: '/assets/SESSÃO 2/TEMA AJ 2025/AJ BG ANIMATION.mp4',
    videoBg: '/assets/SESSÃO 2/TEMA AJ 2025/AJ DESCANSO ANIMATION.mp4',
    poster: '/assets/SESSÃO 2/TEMA AJ 2025/BG AJ 2025.png',
    title: 'Abba Jovem',
    desc: 'Desenvolvimento de pacote gráfico para a identidade visual do Abba Jovem, explorando referências do litoral e uma estética leve, com clima veranil.',
    tags: ['Identidade Visual', 'Motion'],
  },
  {
    id: 'workshopCard',
    videoMain: '/assets/SESSÃO 2/WORKSHOP/VIDEO DE AVISO.mp4',
    poster: '/assets/SESSÃO 2/WORKSHOP/WORKSHOP.png',
    title: 'Workshop Abba Música',
    desc: 'Desenvolvimento de pacote gráfico para identidade visual do grupo Abba Música. Projeto educacional com abordagem visual simples, priorizando clareza e funcionalidade.',
    tags: ['Identidade Visual', 'Design'],
  },
];

export default function Volunteer() {
  const allVideosRef = useRef([]);

  return (
    <section className="projects" id="voluntario" style={{ background: 'var(--mid)' }}>
      <div className="projects-header reveal">
        <div>
          <div className="section-label">Impacto</div>
          <h2 className="section-title">Trabalhos<br />Voluntários</h2>
        </div>
      </div>
      <div className="proj-grid">
        {volunteerProjects.map((p) => (
          <VideoCard key={p.id} {...p} allVideosRef={allVideosRef} />
        ))}
      </div>
    </section>
  );
}

import { useRef, useEffect } from 'react';
import VideoCard from './VideoCard';
import './Projects.css';

const professionalProjects = [
  {
    id: 'vincenzoCard',
    featured: true,
    videoMain: '/assets/sessao-1/finalizados/ch-vicenzo.mp4',
    videoTimeline: '/assets/sessao-1/timelines/timeline-vincenzo.mp4',
    poster: '/assets/sessao-1/capas/capa-vincenzo.png',
    title: 'Vincenzo',
    desc: 'Edição, desenvolvimento de pacote gráfico e finalização de chamada promocional, a partir de trecho do dorama Vincenzo, exibido na TVCI em fevereiro.',
    tags: ['Premiere Pro', 'Motion Graphics', 'Chamada Promo'],
    showTimeline: true,
  },
  {
    id: 'extraCard',
    videoMain: '/assets/sessao-1/finalizados/ch-extra-v1.mp4',
    videoTimeline: '/assets/sessao-1/timelines/timeline-extracurricular.mp4',
    poster: '/assets/sessao-1/capas/capa-extracurricular.png',
    title: 'Extracurricular',
    desc: 'Edição, desenvolvimento de pacote gráfico e finalização de chamada promocional para o dorama Extracurricular, exibido na TVCI em março.',
    tags: ['Edição', 'After Effects'],
    showTimeline: true,
  },
  {
    id: 'cinemaCard',
    videoMain: '/assets/sessao-1/finalizados/ch-cinema-livre-manut-2.mp4',
    videoTimeline: '/assets/sessao-1/timelines/timeline-cinema-livre.mp4',
    poster: '/assets/sessao-1/capas/capa-cinema-livre.png',
    title: 'Cinema Livre 1',
    desc: 'Edição e finalização de chamada promocional desenvolvida a partir do filme As Branquelas, evidenciando a qualidade e o estilo dos filmes exibidos na grade.',
    tags: ['Edição', 'Chamada Promo'],
    showTimeline: true,
  },
  {
    id: 'cinema3Card',
    videoMain: '/assets/sessao-1/finalizados/ch-cinema-livre-manut-3.mp4',
    videoTimeline: '/assets/sessao-1/timelines/timeline-cinema-livre-manut3.mp4',
    poster: '/assets/sessao-1/capas/capa-cinema-livre.png',
    title: 'Cinema Livre 2',
    desc: 'Chamada de manutenção para a sessão Cinema Livre, com foco em filmes de ação e aventura.',
    tags: ['Edição', 'Finalização'],
    showTimeline: true,
  },
  {
    id: 'cinema4Card',
    videoMain: '/assets/sessao-1/finalizados/ch-cinema-livre-manut-4.mp4',
    videoTimeline: '/assets/sessao-1/timelines/timeline-cinema-livre-manut4.mp4',
    poster: '/assets/sessao-1/capas/capa-cinema-livre.png',
    title: 'Cinema Livre 3',
    desc: 'Chamada de manutenção Cinema Livre, destacando os grandes clássicos exibidos na programação.',
    tags: ['Edição', 'Motion Design'],
    showTimeline: true,
  },
  {
    id: 'caminhoCard',
    videoMain: '/assets/sessao-1/finalizados/ch-caminho-do-ceu.mp4',
    videoTimeline: '/assets/sessao-1/timelines/timeline-a-caminho-do-ceu.mp4',
    poster: '/assets/sessao-1/capas/capa-a-caminho-do-ceu.png',
    title: 'A Caminho do Céu',
    desc: 'Edição e finalização de chamada para o dorama A Caminho do Céu, destacando a sensibilidade e a narrativa da obra.',
    tags: ['Premiere Pro', 'Finalização'],
    showTimeline: true,
  },
  {
    id: 'lostCard',
    videoMain: '/assets/sessao-1/finalizados/ch-lost.mp4',
    videoTimeline: '/assets/sessao-1/timelines/timeline-lost.mp4',
    poster: '/assets/sessao-1/capas/capa-lost.png',
    title: 'Lost',
    desc: 'Edição e finalização de chamada promocional para a série Lost, focando no mistério e suspense da trama.',
    tags: ['Edição', 'Chamada Promo'],
    showTimeline: true,
  },
  {
    id: 'seriesCard',
    videoMain: '/assets/sessao-1/finalizados/ch-series-manut-2.mp4',
    videoTimeline: '/assets/sessao-1/timelines/timeline-super-series.mp4',
    poster: '/assets/sessao-1/capas/capa-super-series.png',
    title: 'Super Séries',
    desc: 'Edição e finalização de pacote gráfico para chamadas de manutenção da grade de séries.',
    tags: ['After Effects', 'Motion Graphics'],
    showTimeline: true,
  },
  {
    id: 'rockyCard',
    videoMain: '/assets/sessao-1/finalizados/ch-saga-rocky.mp4',
    videoTimeline: '/assets/sessao-1/timelines/timeline-rocky.mp4', // TODO: preencher quando disponível
    poster: '/assets/sessao-1/capas/capa-rocky.png',               // TODO: substituir pelo caminho real
    title: 'Rocky',
    desc: 'Edição e finalização de chamada promocional para o clássico Rocky, destacando a garra e determinação do personagem.',
    tags: ['Premiere Pro', 'Chamada Promo', 'Motion Graphics'],
    showTimeline: true,
  },
];

// Global flag to prevent re-triggering scroll on remount (SPA navigation)
let hasScrolledInitial = false;

export default function Projects() {
  const allVideosRef = useRef([]);

  // Scroll vincenzo into view when section enters viewport (only once)
  useEffect(() => {
    if (hasScrolledInitial) return;
    
    const section = document.getElementById('projetos');
    const vincenzo = document.getElementById('vincenzoCard');
    if (!section || !vincenzo) return;
    
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasScrolledInitial) {
          hasScrolledInitial = true;
          setTimeout(() => vincenzo.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
          obs.unobserve(section);
        }
      });
    }, { threshold: 0.1 });
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="projects" id="projetos">
      <div className="projects-header reveal">
        <div>
          <div className="section-label">Portfólio</div>
          <h2 className="section-title">Trabalhos<br />Profissionais</h2>
        </div>
      </div>
      <div className="proj-grid">
        {professionalProjects.map((p) => (
          <VideoCard key={p.id} {...p} allVideosRef={allVideosRef} />
        ))}
      </div>
    </section>
  );
}

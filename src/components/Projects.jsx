import { useRef, useEffect } from 'react';
import VideoCard from './VideoCard';
import './Projects.css';

const professionalProjects = [
  {
    id: 'vincenzoCard',
    featured: true,
    videoMain: '/assets/SESSÃO 1/FINALIZADOS/CH VICENZO.mp4',
    videoBg: '/assets/SESSÃO 1/DESFOCADO/VINCENZO DESFOCADO.mp4',
    videoTimeline: '/assets/SESSÃO 1/TIMELINES/TIMELINE VINCENZO.mp4',
    poster: '/assets/SESSÃO 1/CAPAS/CAPA VINCENZO.png',
    title: 'Vincenzo',
    desc: 'Edição, desenvolvimento de pacote gráfico e finalização de chamada promocional, a partir de trecho do dorama Vincenzo, exibido na TVCI em fevereiro.',
    tags: ['Premiere Pro', 'Motion Graphics', 'Chamada Promo'],
    showTimeline: true,
  },
  {
    id: 'extraCard',
    videoMain: '/assets/SESSÃO 1/FINALIZADOS/CH EXTRA v1.mp4',
    videoBg: '/assets/SESSÃO 1/DESFOCADO/EXTRACURRICULAR DESFOCADO.mp4',
    videoTimeline: '/assets/SESSÃO 1/TIMELINES/TIMELINE EXTRACURRICULAR.mp4',
    poster: '/assets/SESSÃO 1/CAPAS/CAPA EXTRACURRICULAR.png',
    title: 'Extracurricular',
    desc: 'Edição, desenvolvimento de pacote gráfico e finalização de chamada promocional para o dorama Extracurricular, exibido na TVCI em março.',
    tags: ['Edição', 'After Effects'],
    showTimeline: true,
  },
  {
    id: 'cinemaCard',
    videoMain: '/assets/SESSÃO 1/FINALIZADOS/CH CINEMA LIVRE MANUT 2.mp4',
    videoBg: '/assets/SESSÃO 1/DESFOCADO/CINEMA LIVRE 2 DESFOCADO.mp4',
    videoTimeline: '/assets/SESSÃO 1/TIMELINES/TIMELINE CINEMA LIVRE.mp4',
    poster: '/assets/SESSÃO 1/CAPAS/CAPA CINEMA LIVRE.png',
    title: 'Cinema Livre 1',
    desc: 'Edição e finalização de chamada promocional desenvolvida a partir do filme As Branquelas, evidenciando a qualidade e o estilo dos filmes exibidos na grade.',
    tags: ['Edição', 'Chamada Promo'],
    showTimeline: true,
  },
  {
    id: 'cinema3Card',
    videoMain: '/assets/SESSÃO 1/FINALIZADOS/CH CINEMA LIVRE MANUT 3.mp4',
    videoBg: '/assets/SESSÃO 1/DESFOCADO/CINEMA LIVRE 3 DESFOCADO.mp4',
    videoTimeline: '/assets/SESSÃO 1/TIMELINES/TIMELINE CINEMA LIVRE MANUT3.mp4',
    poster: '/assets/SESSÃO 1/CAPAS/CAPA CINEMA LIVRE.png',
    title: 'Cinema Livre 2',
    desc: 'Chamada de manutenção para a sessão Cinema Livre, com foco em filmes de ação e aventura.',
    tags: ['Edição', 'Finalização'],
    showTimeline: true,
  },
  {
    id: 'cinema4Card',
    videoMain: '/assets/SESSÃO 1/FINALIZADOS/CH CINEMA LIVRE MANUT 4.mp4',
    videoBg: '/assets/SESSÃO 1/DESFOCADO/CINEMA LIVRE 4 DESFOCADO.mp4',
    videoTimeline: '/assets/SESSÃO 1/TIMELINES/TIMELINE CINEMA LIVRE MANUT4.mp4',
    poster: '/assets/SESSÃO 1/CAPAS/CAPA CINEMA LIVRE.png',
    title: 'Cinema Livre 3',
    desc: 'Chamada de manutenção Cinema Livre, destacando os grandes clássicos exibidos na programação.',
    tags: ['Edição', 'Motion Design'],
    showTimeline: true,
  },
  {
    id: 'caminhoCard',
    videoMain: '/assets/SESSÃO 1/FINALIZADOS/CH CAMINHO DO CÉU.mp4',
    videoBg: '/assets/SESSÃO 1/DESFOCADO/A CAMINHO DO CÉU DESFOCADO.mp4',
    videoTimeline: '/assets/SESSÃO 1/TIMELINES/TIMELINE A CAMINHO DO CÉU.mp4',
    poster: '/assets/SESSÃO 1/CAPAS/CAPA A CAMINHO DO CÉU.png',
    title: 'A Caminho do Céu',
    desc: 'Edição e finalização de chamada para o dorama A Caminho do Céu, destacando a sensibilidade e a narrativa da obra.',
    tags: ['Premiere Pro', 'Finalização'],
    showTimeline: true,
  },
  {
    id: 'lostCard',
    videoMain: '/assets/SESSÃO 1/FINALIZADOS/CH LOST.mp4',
    videoBg: '/assets/SESSÃO 1/DESFOCADO/LOST DESFOCADO.mp4',
    videoTimeline: '/assets/SESSÃO 1/TIMELINES/TIMELINE LOST.mp4',
    poster: '/assets/SESSÃO 1/CAPAS/CAPA LOST.png',
    title: 'Lost',
    desc: 'Edição e finalização de chamada promocional para a série Lost, focando no mistério e suspense da trama.',
    tags: ['Edição', 'Chamada Promo'],
    showTimeline: true,
  },
  {
    id: 'seriesCard',
    videoMain: '/assets/SESSÃO 1/FINALIZADOS/CH SÉRIES MANUT 2.mp4',
    videoBg: '/assets/SESSÃO 1/DESFOCADO/SUPER SÉRIES DESFOCADO.mp4',
    videoTimeline: '/assets/SESSÃO 1/TIMELINES/TIMELINE SUPER SÉRIES.mp4',
    poster: '/assets/SESSÃO 1/CAPAS/CAPA SUPER SERIES.png',
    title: 'Super Séries',
    desc: 'Edição e finalização de pacote gráfico para chamadas de manutenção da grade de séries.',
    tags: ['After Effects', 'Motion Graphics'],
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

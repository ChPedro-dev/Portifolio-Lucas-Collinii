import { useEffect, useState } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Volunteer from './components/Volunteer';
import Personal from './components/Personal';
import Music from './components/Music';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import AbbaJovemDetail from './components/AbbaJovemDetail';
import AfterPartyDetail from './components/AfterPartyDetail';
import FellowshipDetail from './components/FellowshipDetail';
import WorkshopDetail from './components/WorkshopDetail';
import KalliniDetail from './components/KalliniDetail';
import ColliniLabDetail from './components/ColliniLabDetail';


function App() {
  const [activeProject, setActiveProject] = useState(null);

  // Silencia AbortError globais (comum em SPAs e ngrok ao abortar fetches)
  useEffect(() => {
    const handleRejection = (e) => {
      if (e.reason && (e.reason.name === 'AbortError' || e.reason.message?.includes('signal is aborted'))) {
        e.preventDefault();
      }
    };
    window.addEventListener('unhandledrejection', handleRejection);
    return () => window.removeEventListener('unhandledrejection', handleRejection);
  }, []);

  const handleBack = () => {
    // Determina a seção alvo baseada no projeto atual
    const isPersonal = activeProject && (activeProject.id === 'kalliniCard' || activeProject.id === 'colliniLabCard');
    const targetId = isPersonal ? 'pessoais' : 'voluntario';

    setActiveProject(null);
    // Aguarda o próximo tick do DOM para o display: block ser aplicado
    setTimeout(() => {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }, 10);
  };

  // Reveal on scroll — IntersectionObserver
  useEffect(() => {
    if (activeProject) return; // Não observa se estiver no detalhe

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
          }
        });
      },
      { threshold: 0.1 }
    );

    const observe = () => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    };

    observe();
    const t = setTimeout(observe, 300);

    return () => {
      observer.disconnect();
      clearTimeout(t);
    };
  }, [activeProject]);

  return (
    <>
      <div style={{ display: activeProject ? 'none' : 'block' }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Volunteer onSelectProject={setActiveProject} />
        <Personal onSelectProject={setActiveProject} />
        <Music />
        <Contact />
      </div>

      {activeProject && activeProject.id === 'abbaJovemCard' && (
        <AbbaJovemDetail
          project={activeProject}
          onBack={handleBack}
        />
      )}

      {activeProject && activeProject.id === 'afterPartyCard' && (
        <AfterPartyDetail
          project={activeProject}
          onBack={handleBack}
        />
      )}

      {activeProject && activeProject.id === 'fellowshipCard' && (
        <FellowshipDetail
          project={activeProject}
          onBack={handleBack}
        />
      )}

      {activeProject && activeProject.id === 'workshopCard' && (
        <WorkshopDetail
          project={activeProject}
          onBack={handleBack}
        />
      )}

      {activeProject && activeProject.id === 'kalliniCard' && (
        <KalliniDetail
          project={activeProject}
          onBack={handleBack}
        />
      )}

      {activeProject && activeProject.id === 'colliniLabCard' && (
        <ColliniLabDetail
          project={activeProject}
          onBack={handleBack}
        />
      )}

      {activeProject && activeProject.id !== 'abbaJovemCard' && activeProject.id !== 'afterPartyCard' && activeProject.id !== 'fellowshipCard' && activeProject.id !== 'workshopCard' && activeProject.id !== 'kalliniCard' && activeProject.id !== 'colliniLabCard' && (
        <ProjectDetail
          project={activeProject}
          onBack={handleBack}
        />
      )}
    </>
  );
}

export default App;

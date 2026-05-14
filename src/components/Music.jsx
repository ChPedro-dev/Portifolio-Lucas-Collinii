import { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import './Music.css';

const tracklist = [
  {
    num: 1,
    audio: '/assets/SESSÃO 5/WAV/NEEDIT.wav',
    cover: '/assets/SESSÃO 5/CAPAS/CAPA NEED IT.jpg',
    name: 'Need It',
    year: '2025',
    type: 'Single',
  },
  {
    num: 2,
    audio: '/assets/SESSÃO 5/WAV/POPTHAT.wav',
    cover: '/assets/SESSÃO 5/CAPAS/CAPA POP THAT.jpg',
    name: 'Pop That',
    year: '2025',
    type: 'Single',
  },
  {
    num: 3,
    audio: '/assets/SESSÃO 5/WAV/FACE.wav',
    cover: '/assets/SESSÃO 5/CAPAS/CAPA FACE.jpg',
    name: 'Face',
    year: '2026',
    type: 'Single',
  },
  {
    num: 4,
    audio: '/assets/SESSÃO 5/WAV/TASTEOFYOU3.wav',
    cover: '/assets/SESSÃO 5/CAPAS/CAPA SUMMER SEASON.jpg',
    name: 'Summer Season',
    year: '2026',
    type: 'EP',
  },
];

const discAll = [
  'Face', 'All Night', 'Way Out', 'Taste of You', 'Need It', 'Feelings',
  'Reason to Love', 'F## to Night', 'Heaven', 'Knock Knock', 'Seasons',
  'Feel Love Again', "Talkin'", 'Have Fun', 'Just Believe',
];

export default function Music() {
  const wavesurfersRef = useRef([]);
  const trackElemsRef = useRef([]);

  useEffect(() => {
    const surfers = [];

    tracklist.forEach((track, i) => {
      const container = document.getElementById(`waveform-${i}`);
      if (!container) return;

      const ws = WaveSurfer.create({
        container,
        waveColor: '#444',
        progressColor: '#FF5500',
        cursorColor: 'transparent',
        barWidth: 2,
        barRadius: 3,
        responsive: true,
        height: 40,
        normalize: true,
        partialRender: true,
      });

      ws.setVolume(0.1);
      ws.load(track.audio);
      surfers.push(ws);

      const trackEl = trackElemsRef.current[i];

      const togglePlay = () => {
        if (ws.isPlaying()) {
          ws.pause();
        } else {
          surfers.forEach((s, j) => { if (j !== i && s.isPlaying()) s.pause(); });
          // Pause all videos
          document.querySelectorAll('video').forEach((v) => v.pause());
          document.querySelectorAll('.proj-card.playing').forEach((c) => {
            c.classList.remove('playing');
            const btn = c.querySelector('.play-pause');
            if (btn) btn.textContent = 'Play';
          });
          ws.play();
        }
      };

      const onTrackClick = (e) => {
        if (e.target.closest(`#waveform-${i}`)) {
          if (!ws.isPlaying()) {
            surfers.forEach((s, j) => { if (j !== i && s.isPlaying()) s.pause(); });
            ws.play();
          }
          return;
        }
        togglePlay();
      };

      ws.on('play', () => { trackEl?.classList.add('playing'); });
      ws.on('pause', () => { trackEl?.classList.remove('playing'); });
      ws.on('finish', () => { trackEl?.classList.remove('playing'); });

      trackEl?.addEventListener('click', onTrackClick);
    });

    wavesurfersRef.current = surfers;

    return () => {
      surfers.forEach((ws) => ws.destroy());
    };
  }, []);

  return (
    <section className="music" id="musica">
      <div className="section-label reveal">Produção Musical</div>
      <h2 className="section-title reveal">Discografia</h2>
      <div className="music-inner">
        {/* TRACKS */}
        <div className="tracks reveal">
          <p className="music-intro">
            Nascido em família de músicos, com base em guitarra e produção via FL Studio, trouxe ritmo e
            narrativa para a edição de vídeo. Hoje também produz trilhas e elementos sonoros para seus
            projetos audiovisuais.
          </p>
          {tracklist.map((track, i) => (
            <div
              className="track"
              key={track.name}
              ref={(el) => (trackElemsRef.current[i] = el)}
            >
              <div className="track-num">{track.num}</div>
              <img src={track.cover} alt={track.name} className="track-img" />
              <div className="track-info">
                <div className="track-name">{track.name}</div>
                <div className="track-year">{track.year}</div>
              </div>
              <div className="waveform-container" id={`waveform-${i}`} />
              <span className="track-type">{track.type}</span>
            </div>
          ))}
        </div>

        {/* DISCOGRAPHY PANEL */}
        <div className="discography-panel reveal">
          <h4>♪ Todas as Faixas</h4>
          <div className="disc-list">
            {discAll.map((name) => (
              <div className="disc-item" key={name}>{name}</div>
            ))}
          </div>
          <div className="music-links">
            <a
              href="https://open.spotify.com/intl-pt/artist/4ODRvQJXPtprTZ3jRIvY3f?si=PkyDdaUxQyeWCP9_IzjtPA"
              target="_blank"
              rel="noreferrer"
              className="music-link spotify"
            >
              <img src="/assets/PNGS/Spotify.png" alt="Spotify" className="platform-logo" />
              <span>Spotify</span>
            </a>
            <a
              href="https://soundcloud.com/lucas-m-collini"
              target="_blank"
              rel="noreferrer"
              className="music-link soundcloud"
            >
              <img src="/assets/PNGS/soundcloud.png" alt="SoundCloud" className="platform-logo" />
              <span>SoundCloud</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

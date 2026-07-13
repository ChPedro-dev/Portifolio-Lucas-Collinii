import { useEffect, useRef, useState } from 'react';
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

function Track({ track }) {
  const containerRef = useRef(null);
  const waveSurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    let isMounted = true;

    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: '#444',
      progressColor: '#FF5500',
      cursorColor: 'transparent',
      barWidth: 2,
      barRadius: 3,
      height: 40,
      normalize: true,
    });

    ws.setVolume(0.1);
    
    ws.on('error', (err) => {
      if (err.name === 'AbortError') return;
      if (isMounted) console.debug('WaveSurfer internal error:', err);
    });

    // Pequeno delay para garantir estabilidade no carregamento (especialmente via ngrok)
    const loadTimer = setTimeout(() => {
      if (isMounted) {
        ws.load(track.audio).catch(err => {
          if (err.name === 'AbortError') return;
          console.debug('Load error:', err);
        });
      }
    }, 50);

    ws.on('play', () => isMounted && setIsPlaying(true));
    ws.on('pause', () => isMounted && setIsPlaying(false));
    ws.on('finish', () => isMounted && setIsPlaying(false));
    ws.on('interaction', () => {
      if (isMounted) {
        document.querySelectorAll('video').forEach((v) => v.pause());
        window.dispatchEvent(new CustomEvent('pause-other-tracks', { detail: track.num }));
        ws.play().catch(() => {});
      }
    });

    const handlePauseOthers = (e) => {
      if (e.detail !== track.num && ws && ws.isPlaying()) {
        ws.pause();
      }
    };
    window.addEventListener('pause-other-tracks', handlePauseOthers);

    waveSurferRef.current = ws;

    return () => {
      isMounted = false;
      clearTimeout(loadTimer);
      window.removeEventListener('pause-other-tracks', handlePauseOthers);
      if (ws) {
        ws.unAll();
        try {
          ws.pause();
          ws.destroy();
        } catch (e) {
          // Ignora erros na destruição
        }
      }
    };
  }, [track.audio, track.num]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!waveSurferRef.current) return;

    if (waveSurferRef.current.isPlaying()) {
      waveSurferRef.current.pause();
    } else {
      // Pause others
      document.querySelectorAll('video').forEach((v) => v.pause());
      window.dispatchEvent(new CustomEvent('pause-other-tracks', { detail: track.num }));
      waveSurferRef.current.play().catch(() => {});
    }
  };

  return (
    <div className={`track ${isPlaying ? 'playing' : ''}`} onClick={togglePlay}>
      <div className="track-num">{track.num}</div>
      <img src={track.cover} alt={track.name} className="track-img" />
      <div className="track-info">
        <div className="track-name">{track.name}</div>
        <div className="track-year">{track.year}</div>
      </div>
      <button className="track-play-btn" aria-label={isPlaying ? "Pause" : "Play"}>
        {isPlaying ? (
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M8 5v14l11-7z"/></svg>
        )}
      </button>
      <div className="waveform-container" ref={containerRef} onClick={(e) => e.stopPropagation()} />
      <span className="track-type">{track.type}</span>
    </div>
  );
}

export default function Music() {
  return (
    <section className="music" id="musica">
      <div className="section-label reveal">Produção Musical</div>
      <h2 className="section-title reveal">Discografia</h2>
      <div className="music-inner">
        <div className="tracks reveal">
          <p className="music-intro">
            Nascido em família de músicos, com base em guitarra e produção via FL Studio, trouxe ritmo e
            narrativa para a edição de vídeo. Hoje também produz trilhas e elementos sonoros para seus
            projetos audiovisuais.
          </p>
          {tracklist.map((track) => (
            <Track key={track.name} track={track} />
          ))}
        </div>

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
              <img src="/assets/PNGS/IconSpotify.png" alt="Spotify" className="platform-logo" />
              <span>Spotify</span>
            </a>
            <a
              href="https://soundcloud.com/lucas-m-collini"
              target="_blank"
              rel="noreferrer"
              className="music-link soundcloud"
            >
              <img src="/assets/PNGS/IconSoundCloud.png" alt="SoundCloud" className="platform-logo" />
              <span>SoundCloud</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

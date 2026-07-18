import { useRef, useEffect, useCallback } from 'react';
import './Projects.css';

/**
 * VideoCard — reutilizável para qualquer card com vídeo.
 *
 * Props:
 *  id          string  — id do elemento (ex: "vincenzoCard")
 *  featured    bool    — ocupa 2 colunas e inicia com autoplay
 *  videoMain   string  — URL do vídeo principal (usado também como fundo desfocado)
 *  videoTimeline string — URL do vídeo da timeline (opcional)
 *  poster      string  — URL da imagem de capa
 *  title       string
 *  desc        string
 *  tags        string[]
 *  showTimeline bool   — se exibe o botão de timeline
 *  allVideosRef React.MutableRefObject — array compartilhado para auto-pause
 */
export default function VideoCard({
  id,
  featured = false,
  videoMain,
  videoBg,
  videoTimeline,
  poster,
  title,
  desc,
  tags = [],
  showTimeline = false,
  allVideosRef,
}) {
  const cardRef = useRef(null);
  const mainRef = useRef(null);
  const bgRef = useRef(null);
  const timelineVidRef = useRef(null);
  const progressRef = useRef(null);
  const playBtnRef = useRef(null);
  const muteBtnRef = useRef(null);
  const volumeRef = useRef(null);
  const timelinelineRef = useRef(null);
  const popupRef = useRef(null);
  const popupTimerRef = useRef(null);

  // Registra o vídeo principal na lista global de auto-pause
  useEffect(() => {
    if (allVideosRef && mainRef.current) {
      allVideosRef.current.push(mainRef.current);
    }
  }, [allVideosRef]);

  const pauseOthers = useCallback(() => {
    if (!allVideosRef) return;
    allVideosRef.current.forEach((v) => {
      if (v && v !== mainRef.current && !v.paused) {
        v.pause();
        const c = v.closest?.('.proj-card');
        if (c) {
          c.classList.remove('playing');
          const btn = c.querySelector('.play-pause');
          if (btn) btn.textContent = 'Play';
        }
      }
    });
  }, [allVideosRef]);

  const scheduleTimelinePopup = useCallback(() => {
    if (!showTimeline || !popupRef.current || !cardRef.current) return;
    clearTimeout(popupTimerRef.current);
    popupTimerRef.current = setTimeout(() => {
      const card = cardRef.current;
      const popup = popupRef.current;
      const vid = mainRef.current;
      if (card && popup && vid && !vid.paused && !card.classList.contains('timeline-active')) {
        popup.classList.add('visible');
      }
    }, 5000);
  }, [showTimeline]);

  useEffect(() => {
    const card = cardRef.current;
    const video = mainRef.current;
    const bgVideo = bgRef.current;
    const tlVideo = timelineVidRef.current;
    const playBtn = playBtnRef.current;
    const muteBtn = muteBtnRef.current;
    const volSlider = volumeRef.current;
    const progressBar = progressRef.current;
    const popup = popupRef.current;
    const imgContainer = card?.querySelector('.proj-img');

    if (!video || !card) return;

    // Initial volume
    video.volume = 0.1;
    if (volSlider) volSlider.value = 0.1;
    video.loop = false;
    if (bgVideo) bgVideo.volume = 0;
    if (tlVideo) { tlVideo.volume = 0; tlVideo.loop = false; }

    // Sync on autoplay
    if (!video.paused) {
      if (bgVideo) bgVideo.play().catch(() => {});
      if (tlVideo) tlVideo.play().catch(() => {});
      scheduleTimelinePopup();
    }

    const togglePlay = () => {
      if (video.paused) {
        if (bgVideo) bgVideo.currentTime = video.currentTime;
        if (tlVideo) tlVideo.currentTime = video.currentTime;

        // Unmute on first play if muted
        if (video.muted) {
          video.muted = false;
          video.volume = 0.1;
          if (volSlider) volSlider.value = 0.1;
          if (muteBtn) muteBtn.textContent = 'Mute';
        }

        pauseOthers();
        video.play().catch(() => {});
        if (bgVideo) bgVideo.play().catch(() => {});
        if (tlVideo) tlVideo.play().catch(() => {});
        if (playBtn) playBtn.textContent = 'Pause';
        card.classList.add('playing');
        scheduleTimelinePopup();
      } else {
        video.pause();
        bgVideo?.pause();
        tlVideo?.pause();
        if (playBtn) playBtn.textContent = 'Play';
        card.classList.remove('playing');
      }
    };

    const onImgClick = (e) => {
      if (e.target.closest('.video-controls') || e.target.closest('.timeline-popup')) return;
      if (video.muted) {
        video.muted = false;
        video.volume = 0.1;
        if (volSlider) volSlider.value = 0.1;
        if (muteBtn) muteBtn.textContent = 'Mute';
        scheduleTimelinePopup();
      } else {
        togglePlay();
      }
    };

    const onPlayBtn = (e) => { e.stopPropagation(); togglePlay(); };

    const onMuteBtn = (e) => {
      e.stopPropagation();
      video.muted = !video.muted;
      if (muteBtn) muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
      if (!video.muted && video.volume === 0) {
        video.volume = 0.1;
        if (volSlider) volSlider.value = 0.1;
      } else if (volSlider) {
        volSlider.value = video.muted ? 0 : video.volume;
      }
    };

    const onVolume = (e) => {
      video.volume = parseFloat(e.target.value);
      video.muted = video.volume === 0;
      if (muteBtn) muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
    };

    const onTimeUpdate = () => {
      if (!video.duration) return;
      const pct = (video.currentTime / video.duration) * 100;
      if (progressBar) progressBar.style.width = pct + '%';
      if (bgVideo && Math.abs(bgVideo.currentTime - video.currentTime) > 0.1) bgVideo.currentTime = video.currentTime;
      if (tlVideo && Math.abs(tlVideo.currentTime - video.currentTime) > 0.1) tlVideo.currentTime = video.currentTime;
    };

    const onEnded = () => {
      video.removeAttribute('autoplay');
      video.pause();
      video.currentTime = 0;
      video.load();
      if (bgVideo) { bgVideo.pause(); bgVideo.currentTime = 0; bgVideo.load(); }
      if (tlVideo) { tlVideo.removeAttribute('autoplay'); tlVideo.pause(); tlVideo.currentTime = 0; tlVideo.load(); }
      card.classList.remove('playing');
      card.classList.remove('timeline-active');
      if (playBtn) playBtn.textContent = 'Play';
      if (popup) { popup.classList.remove('visible'); popup.textContent = 'Visualizar Timeline'; }
    };

    const onPopupClick = (e) => {
      e.stopPropagation();
      if (card.classList.contains('timeline-active')) {
        card.classList.remove('timeline-active');
        if (popup) popup.textContent = 'Visualizar Timeline';
      } else {
        card.classList.add('timeline-active');
        if (popup) popup.textContent = 'Vídeo Inteiro';
      }
    };

    imgContainer?.addEventListener('click', onImgClick);
    playBtn?.addEventListener('click', onPlayBtn);
    muteBtn?.addEventListener('click', onMuteBtn);
    volSlider?.addEventListener('input', onVolume);
    video.addEventListener('timeupdate', onTimeUpdate);
    // timeline click is now handled by React
    video.addEventListener('ended', onEnded);
    popup?.addEventListener('click', onPopupClick);

    // Trigger popup schedule if autoplay is active
    video.addEventListener('play', scheduleTimelinePopup);

    return () => {
      imgContainer?.removeEventListener('click', onImgClick);
      playBtn?.removeEventListener('click', onPlayBtn);
      muteBtn?.removeEventListener('click', onMuteBtn);
      volSlider?.removeEventListener('input', onVolume);
      video.removeEventListener('timeupdate', onTimeUpdate);
      // timeline listener removed
      video.removeEventListener('ended', onEnded);
      popup?.removeEventListener('click', onPopupClick);
      video.removeEventListener('play', scheduleTimelinePopup);
      clearTimeout(popupTimerRef.current);
    };
  }, [pauseOthers, scheduleTimelinePopup]);

  return (
    <div
      className={`proj-card reveal${featured ? ' featured' : ''}${featured ? ' playing' : ''}`}
      id={id}
      ref={cardRef}
    >
      {/* Proj Image / Video Area */}
      <div className="proj-img">
        <div className="video-blur-wrapper">
          {/* Cópia desfocada do vídeo — sempre visível como fundo dinâmico */}
          <video
            ref={bgRef}
            src={videoMain}
            className="video-bg-blur"
            autoPlay={featured}
            muted
            playsInline
            loop
            tabIndex={-1}
            aria-hidden="true"
          />
          {/* Vídeo principal — na frente */}
          <video
            ref={mainRef}
            src={videoMain}
            className="video-main"
            poster={poster}
            autoPlay={featured}
            muted={featured}
            playsInline
            loop
          />
        </div>

        {showTimeline && (
          <button className="timeline-popup" ref={popupRef}>
            Visualizar Timeline
          </button>
        )}

        {/* Controls */}
        <div className="video-controls">
          {/* video-timeline — clique para seek */}
          <div
            className="video-timeline"
            ref={timelinelineRef}
            onClick={(e) => {
              e.stopPropagation();
              const video = mainRef.current;
              const bgVideo = bgRef.current;
              const tlVideo = timelineVidRef.current;
              const timeline = timelinelineRef.current;
              if (!video || !timeline || !video.duration) return;
              const rect = timeline.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              video.currentTime = pos * video.duration;
              if (bgVideo) bgVideo.currentTime = video.currentTime;
              if (tlVideo) tlVideo.currentTime = video.currentTime;
            }}
          >
            <div className="video-progress" ref={progressRef} />
          </div>
          <div className="video-bottom-controls">
            <button className="video-btn play-pause" ref={playBtnRef}>
              {featured ? 'Pause' : 'Play'}
            </button>
            <div className="volume-control">
              <button className="video-btn mute-unmute" ref={muteBtnRef}>Mute</button>
              <input
                type="range"
                className="volume-slider"
                ref={volumeRef}
                min="0"
                max="1"
                step="0.1"
                defaultValue={featured ? '0.1' : '0'}
              />
            </div>
          </div>
        </div>

        <div className="play-overlay">
          <img src="/assets/webps/iconplay.webp" alt="Play" />
        </div>
        <div className="proj-img-overlay" />
      </div>

      {/* Timeline View — read-only, sem seek por clique */}
      {videoTimeline && (
        <div className="timeline-view">
          <video
            ref={timelineVidRef}
            src={videoTimeline}
            autoPlay={featured}
            muted
            playsInline
            loop
            style={{ pointerEvents: 'none' }}
          />
        </div>
      )}

      {/* Body */}
      <div className="proj-body">
        <h3>{title}</h3>
        <p>{desc}</p>
        {tags.length > 0 && (
          <div className="exp-tags">
            {tags.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

import './Projects.css';

/**
 * ImageCard — card estático com imagem (sem player de vídeo).
 *
 * Props:
 *  id       string  — id do elemento
 *  image    string  — URL da imagem principal (DESCANSO)
 *  hoverBg  string  — URL da imagem de fundo exibida no hover (BG)
 *  title    string
 *  desc     string
 *  tags     string[]
 *  onMouseEnter func
 *  onMouseLeave func
 */
export default function ImageCard({
  id,
  image,
  hoverBg,
  title,
  desc,
  tags = [],
  onMouseEnter,
  onMouseLeave,
  onClick,
}) {
  return (
    <div
      className="proj-card reveal"
      id={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* Imagem */}
      <div className="proj-img image-only">
        {hoverBg && (
          <img src={hoverBg} alt="" className="card-hover-bg" aria-hidden="true" />
        )}
        <img src={image} alt={title} className="card-static-img" />
        <div className="proj-img-overlay" />
      </div>

      {/* Body */}
      <div className="proj-body">
        <h3>{title}</h3>
        <p>{desc}</p>
        {tags.length > 0 && (
          <div className="exp-tags">
            {tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

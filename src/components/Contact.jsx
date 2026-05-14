import './Contact.css';

export default function Contact() {
  return (
    <>
      <section className="contact" id="contato">
        <div className="contact-inner">
          <div>
            <h2>Vamos<br />Trabalhar<br />Juntos?</h2>
            <p>
              Aberto a projetos de edição de vídeo, motion design, identidade visual e conteúdo audiovisual.
              Entre em contato e vamos criar algo incrível.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:lucasmcollini@gmail.com" className="contact-link">
              <div className="contact-link-icon">✉</div>
              <div className="contact-link-info">
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">lucasmcollini@gmail.com</div>
              </div>
              <div className="contact-link-arrow">→</div>
            </a>
            <a href="tel:+5541984200094" className="contact-link">
              <div className="contact-link-icon">📱</div>
              <div className="contact-link-info">
                <div className="contact-link-label">WhatsApp</div>
                <div className="contact-link-value">+55 (41) 98420-0094</div>
              </div>
              <div className="contact-link-arrow">→</div>
            </a>
            <a
              href="https://linkedin.com/in/lucascollini"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">in</div>
              <div className="contact-link-info">
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">linkedin.com/in/lucascollini</div>
              </div>
              <div className="contact-link-arrow">→</div>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p className="footer-logo">
          LUCAS<span>COLLINI</span>
        </p>
        <p>© 2025 Lucas Collini. Designer Gráfico & Editor de Vídeo.</p>
        <p style={{ fontSize: '0.7rem' }}>Curitiba / Paranaguá · PR · Brasil</p>
      </footer>
    </>
  );
}

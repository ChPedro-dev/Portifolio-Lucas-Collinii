import './Hero.css';

export default function Hero() {
  return (
    <section
      id="homeSection"
      style={{ backgroundImage: "url('/assets/HOME/BACKGROUND.png')" }}
    >
      <div id="glassPanel">
        <img id="title" src="/assets/HOME/TITULO PNG.png" alt="Lucas Collini — Portfolio" />
      </div>
    </section>
  );
}

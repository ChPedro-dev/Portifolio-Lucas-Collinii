import './Hero.css';

export default function Hero() {
  return (
    <section
      id="homeSection"
      style={{ backgroundImage: "url('/assets/home/background.webp')" }}
    >
      <div id="glassPanel">
        <img id="title" src="/assets/home/titulo-png.webp" alt="Lucas Collini — Portfolio" />
      </div>
    </section>
  );
}

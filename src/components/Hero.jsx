import './Hero.css';

export default function Hero() {
  return (
    <section
      id="homeSection"
      style={{ backgroundImage: "url('/assets/home/background.png')" }}
    >
      <div id="glassPanel">
        <img id="title" src="/assets/home/titulo-png.png" alt="Lucas Collini — Portfolio" />
      </div>
    </section>
  );
}

import heroImg1400 from '../../img/background/hero1400px.jpg';
import heroImg1024 from '../../img/background/hero1024px.jpg';
import heroImg320 from '../../img/background/hero320px.jpg';

function Hero() {
  return (
    <div className="hero">
      <picture>
        <source srcSet={heroImg320} media="(max-width: 320px)" />
        <source srcSet={heroImg1024} media="(max-width: 1024px)" />
        <img className="hero__img" src={heroImg1400} alt="hero" />
      </picture>
    </div>
  );
}

export default Hero;
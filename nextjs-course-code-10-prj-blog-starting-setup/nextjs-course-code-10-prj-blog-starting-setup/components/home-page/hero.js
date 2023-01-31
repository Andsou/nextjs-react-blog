import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/andy.jpg"
          alt="An image showing Andy"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Andy</h1>
      <p>
        I am a BIT student at Red River College and I'm interested in Web
        Development
      </p>
    </section>
  );
}

export default Hero;

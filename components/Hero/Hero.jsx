import React from 'react';
import s from './Hero.module.css';
import Image from 'next/image';
import avatar from '../../public/images/site/bogdan.jpg';

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.image}>
        <Image
          src={avatar}
          alt="An image showing Bogdan"
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <h1>Hi, i'm Bogdan</h1>
      <p>I blog about web development - especially frontend frameworks like Angular, Vue or React.</p>
    </section>
  );
};

export default Hero;

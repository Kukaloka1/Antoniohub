import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const aboutArray = 'About Me'.split('');

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            With a decade-long tenure in the financial sector, I have gained deep expertise in Sales, Account Management, Banking, and FinTech. In the past two years, I have also ventured into website construction and coding, spending the last year focusing on mastering UX/UI design while building web applications using React and Python. As a keen AI enthusiast, I am developing web apps with integrated AI functionalities, driven by a passion to fortify my skills as a Full Stack Developer and continue learning and evolving.
          </p>
          <p>
            In addition to my technical pursuits, I have a background in Arts, Design, and Music, which enriches my creative approach to technology.
          </p>
          <p>
            "I am seeking to continue learning and growing in my budding tech career. For this reason, I am looking for a reputable company that can offer me the opportunity to gain more experience."
          </p>
          <p>GPT-4 has been a major player in my self-education journey.</p>
          <p>
            If I had to define myself in one sentence, I would describe myself as a positive, curious, and tech-obsessed individual brimming with creativity.
          </p>
          <p>
            "I am passionately developing a small Tech Hub known as 'Bittech Network,' where I actively create my own products and projects. I am eager to innovate and produce something both fun and remarkable."
          </p>
          <div className="link-container">
            <a href="http://www.bittechnetwork.com" target="_blank" rel="noopener noreferrer">
              Visit Bittech Network
            </a>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;



import { memo, use } from 'react';
import Hero from './hero';
import About from './about';
import Stats from './stats';
import Skills from './skills';
import Resume from './resume';
import Portfolio from './portfolio';
import '../assets/css/main.css';

const Main = () => {

  return (
       <>
       <Hero />
       <About />
       <Stats />
       <Skills />
       <Resume />
       <Portfolio />
       </>
  );
};

export default Main;
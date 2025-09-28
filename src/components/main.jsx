import { memo, use } from 'react';
import Hero from './hero';
import About from './about';
import Stats from './stats';
import Skills from './skills';
import '../assets/css/main.css';

const Main = () => {

  return (
       <>
       <Hero />
       <About />
       <Stats />
       <Skills />
       </>
  );
};

export default Main;
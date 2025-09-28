import { memo, use } from 'react';
import Hero from './hero';
import About from './about';
import Stats from './stats';
import '../assets/css/main.css';

const Main = () => {

  return (
       <>
       <Hero />
       <About />
       <Stats />
       </>
  );
};

export default Main;
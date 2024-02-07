import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import EventContent from '../components/EventContent';

const Presentes = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading='EVENTOS.' text='Surpresas LeBru'/>
      <EventContent />
      <Footer />
    </div>
  )
}

export default Presentes
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Experts from '../components/Experts';
import Services from '../components/Services';
import Clients from '../components/Clients';
// import Achievements from '../components/Achievements'; this I have to add later
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Clients />
      <Services />
      <Experts />
      {/* <Achievements /> */}
      <Contact />
    </>
  );
};

export default HomePage;
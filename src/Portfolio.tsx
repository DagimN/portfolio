import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/MyServices";
import Reviews from "./components/Reviews";
import ShowCasePanel from "./components/ShowCase";
import Timeline from "./components/Timeline";

const Portfolio = () => {
  return (
    <main className="h-screen">
      <Hero />
      <Timeline />
      <span id="services" />
      <ShowCasePanel />
      <Services />
      <Reviews />
      <Footer />
    </main>
  );
};

export default Portfolio;

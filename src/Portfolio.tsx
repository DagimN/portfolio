import Hero from "./components/Hero";
import Services from "./components/MyServices";
import ShowCaseOrbit from "./components/ShowCaseOrbit";

const Portfolio = () => {
  return (
    <main className="h-screen">
      <Hero />
      <ShowCaseOrbit />
      <Services />
      <div>Reviews</div>
      <footer>contacts</footer>
    </main>
  );
};

export default Portfolio;
